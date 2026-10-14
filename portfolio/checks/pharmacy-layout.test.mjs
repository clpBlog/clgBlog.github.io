import test from 'node:test';
import assert from 'node:assert/strict';
import {createPharmacyLayout, validatePharmacyMove} from '../src/shelfpilot/lib/pharmacy-layout.mjs';

const shelf = (id, zone = 'left', order = 1, dimensions = {}) => ({id, asset_id: id, origin: [0, 0, 0],
  width: 2, height: 3, depth: .5, boards: [.2, 1, 2], ...dimensions,
  location: {zone, order, label: '', evidence: ''}});
const product = (id, shelf_id, position = [.4, 1, .25]) => ({id, observation_id: id, shelf_id,
  position_status: 'estimated', position_3d: position, dimensions: {width: .3, height: .5, depth: .15},
  spec: {dimensions: {width: .3, height: .5, depth: .15, unit: 'display'},
    frontTexture: {url: '/actual-photo', bboxPixels: [100, 200, 300, 400]}}});
const scene = (shelves, placements = []) => ({geometry_kind: 'reviewed_shelf_layout', approximate: true,
  metric_scale_known: false, scene: {shelves, points: [], cameras: []}, placements});
const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-9, `${a} != ${b}`);
const bounds = shelf => {
  const {width: w, depth: d, origin: [x, , z], rotation_y: r} = shelf;
  const corners = [[-w / 2, 0], [w / 2, 0], [-w / 2, d], [w / 2, d]].map(([a, b]) =>
    [x + Math.cos(r) * a + Math.sin(r) * b, z - Math.sin(r) * a + Math.cos(r) * b]);
  return [Math.min(...corners.map(c => c[0])), Math.min(...corners.map(c => c[1])),
    Math.max(...corners.map(c => c[0])), Math.max(...corners.map(c => c[1]))];
};
const overlaps = (a, b) => Math.min(a[2], b[2]) - Math.max(a[0], b[0]) > 1e-8
  && Math.min(a[3], b[3]) - Math.max(a[1], b[1]) > 1e-8;

test('side shelves face inward, back faces entrance, products rotate and scale with their own shelf', () => {
  const input = scene([shelf('l'), shelf('r', 'right'), shelf('b', 'back')],
    [product('pl', 'l'), product('pr', 'r'), product('pb', 'b')]);
  const original = structuredClone(input), output = createPharmacyLayout(input), k = 2.3 / 3;
  assert.deepEqual(input, original);
  const [l, r, b] = output.scene.shelves, [pl, pr, pb] = output.placements;
  close(l.rotation_y, Math.PI / 2); close(r.rotation_y, -Math.PI / 2); close(b.rotation_y, 0);
  close(pl.position_3d[0] - l.origin[0], .25 * k); close(pl.position_3d[2] - l.origin[2], -.4 * k);
  close(pr.position_3d[0] - r.origin[0], -.25 * k); close(pr.position_3d[2] - r.origin[2], .4 * k);
  close(pb.position_3d[0] - b.origin[0], .4 * k); close(pb.position_3d[2] - b.origin[2], .25 * k);
  close(pl.position_3d[1], k); close(pl.dimensions.width, .3 * k); close(pl.spec.dimensions.height, .5 * k);
  close(l.boards[1], k); assert.deepEqual(pl.spec.frontTexture, input.placements[0].spec.frontTexture);
  assert.equal(output.scene.pharmacy.positioned_count, 3); assert.equal(output.scene.pharmacy.metric_scale_known, false);
  assert.equal(createPharmacyLayout(output), output);
});

test('uniform scaling respects a nonzero original cabinet origin', () => {
  const s = {...shelf('a', 'back'), origin: [4, 2, 7]};
  const out = createPharmacyLayout(scene([s], [product('p', 'a', [4.4, 3, 7.25])]));
  const placed = out.scene.shelves[0], p = out.placements[0], k = 2.3 / 3;
  close(p.position_3d[0] - placed.origin[0], .4 * k); close(p.position_3d[1], k);
  close(p.position_3d[2] - placed.origin[2], .25 * k);
});

test('unknown or missing order and every same-zone/order claimant stay on a separate pending pad', () => {
  const out = createPharmacyLayout(scene([shelf('a', 'left', 2), shelf('b', 'left', 2), shelf('c', 'unknown'),
    shelf('d', 'right', null), {...shelf('e'), location: undefined}, shelf('f', 'right', 1)], [product('p', 'a')]));
  const pharmacy = out.scene.pharmacy;
  assert.equal(pharmacy.positioned_count, 1); assert.equal(pharmacy.pending_count, 5);
  assert.deepEqual(pharmacy.pending_shelves.filter(p => p.reason === 'relative_location_conflict').map(p => p.id), ['a', 'b']);
  for (const s of out.scene.shelves.filter(s => s.layout_status === 'pending')) assert.ok(bounds(s)[0] > pharmacy.width / 2);
  assert.ok(pharmacy.staging.min[0] > pharmacy.width / 2);
  assert.equal(out.placements[0].spatial_evidence.position_semantics, 'staging_display_only');
});

test('large and mixed-width layouts have no overlapping cabinets and reserve checkout/entry area', () => {
  const shelves = [];
  for (const zone of ['left', 'right', 'back', 'island']) for (let i = 1; i <= 7; i++)
    shelves.push(shelf(`${zone}${i}`, zone, i, {width: i % 2 ? 1.8 : 5, height: i % 3 ? 3 : 1.8, depth: i % 2 ? .5 : 1.1}));
  shelves.push(shelf('u', 'unknown'), shelf('v', 'unknown', null, {width: 7}));
  const out = createPharmacyLayout(scene(shelves)), allBounds = out.scene.shelves.map(bounds), p = out.scene.pharmacy;
  for (let i = 0; i < allBounds.length; i++) for (let j = i + 1; j < allBounds.length; j++)
    assert.equal(overlaps(allBounds[i], allBounds[j]), false, `${out.scene.shelves[i].id} overlaps ${out.scene.shelves[j].id}`);
  for (const s of out.scene.shelves.filter(s => s.layout_status === 'positioned')) {
    const b = bounds(s); assert.ok(b[0] >= -p.width / 2 && b[2] <= p.width / 2);
    assert.ok(b[1] >= -p.depth / 2 && b[3] <= p.depth / 2 - 2.5 + 1e-8);
  }
});

test('input array order does not change the relative layout and increasing side order proceeds toward back', () => {
  const shelves = [shelf('c', 'left', 3), shelf('a', 'left', 1), shelf('b', 'left', 2)];
  const a = createPharmacyLayout(scene(shelves)), b = createPharmacyLayout(scene([...shelves].reverse()));
  assert.deepEqual(a.scene, b.scene);
  assert.ok(a.scene.shelves[0].origin[2] > a.scene.shelves[1].origin[2]);
  assert.ok(a.scene.shelves[1].origin[2] > a.scene.shelves[2].origin[2]);
});

test('unresolved observations stay unresolved; valid aliases follow canonical position without another physical package', () => {
  const p = product('p', 'l'), alias = {...product('alias', 'l'), alias: true, canonical_id: 'p'};
  const missingAlias = {...alias, id: 'orphan', canonical_id: 'missing'};
  const unresolved = {...product('u', 'l'), position_status: 'unresolved', position_3d: null};
  const lost = product('lost', 'missing');
  const out = createPharmacyLayout(scene([shelf('l')], [alias, unresolved, lost, p, missingAlias]));
  assert.deepEqual(out.placements[0].position_3d, out.placements[3].position_3d);
  assert.equal(out.placements.filter(p => !p.alias && p.position_status === 'estimated').length, 1);
  assert.equal(out.placements[1], unresolved); assert.equal(out.placements[2].position_3d, null);
  assert.equal(out.placements[4].position_status, 'unresolved');
});

test('measured maps, ungrouped photos, and null are unchanged by identity', () => {
  const measured = {...scene([shelf('m')], [product('p', 'm')]), geometry_kind: 'sparse_multiview', approximate: false};
  const knownScale = {...scene([shelf('m')]), metric_scale_known: true};
  const points = scene([shelf('m')]); points.scene.points = [[1, 2, 3, 4, 5, 6]];
  const photos = {...scene([shelf('m')]), geometry_kind: 'photo_shelf_approximation'};
  for (const input of [measured, knownScale, points, photos, null]) assert.equal(createPharmacyLayout(input), input);
});

test('invalid cabinet geometry cannot leak a renderable drug at stale local coordinates', () => {
  const out = createPharmacyLayout(scene([shelf('invalid', 'left', 1, {height: 0})], [product('p', 'invalid')]));
  assert.equal(out.scene.shelves.length, 0); assert.equal(out.scene.pharmacy.pending_count, 1);
  assert.equal(out.placements[0].position_status, 'unresolved'); assert.equal(out.placements[0].position_3d, null);
});

test('persisted manual pose overrides uncertain AI location and transforms packages without mutating evidence', () => {
  const input = scene([shelf('a', 'unknown')], [product('p', 'a')]);
  input.layout = {shelves: [{id: 'a', manual_placement: {x: 1, z: -1, rotation: Math.PI / 4}}]};
  const before = structuredClone(input), output = createPharmacyLayout(input), s = output.scene.shelves[0], p = output.placements[0], k = 2.3 / 3;
  assert.deepEqual(input, before); assert.deepEqual(s.origin, [1, 0, -1]); close(s.rotation_y, Math.PI / 4);
  assert.equal(s.layout_status, 'positioned'); assert.equal(s.layout_source, 'manual');
  assert.equal(output.scene.pharmacy.manual_count, 1); assert.equal(output.scene.pharmacy.pending_count, 0);
  close(p.position_3d[0], 1 + (.4 + .25) * Math.SQRT1_2 * k);
  close(p.position_3d[2], -1 + (-.4 + .25) * Math.SQRT1_2 * k);
  assert.equal(p.spec.provenance.position.method, 'manual_pharmacy_placement');
  assert.equal(p.spatial_evidence.position_semantics, 'manual_template_position');
  assert.equal(s.location.zone, 'unknown'); assert.deepEqual(p.spec.frontTexture, input.placements[0].spec.frontTexture);
  const reloaded = createPharmacyLayout(JSON.parse(JSON.stringify(input)));
  assert.deepEqual(reloaded.scene, output.scene); assert.deepEqual(reloaded.placements, output.placements);
});

test('a moved cabinet keeps its AI slot reserved so neighbours and room dimensions do not jump', () => {
  const input = scene([shelf('a', 'left', 1, {width: 9}), shelf('b', 'left', 2, {width: 8})]);
  const before = createPharmacyLayout(input);
  input.layout = {shelves: [{id: 'a', manual_placement: {x: 0, z: -2, rotation: 0}}, {id: 'b'}]};
  const after = createPharmacyLayout(input);
  assert.deepEqual(after.scene.shelves.find(s => s.id === 'b').origin, before.scene.shelves.find(s => s.id === 'b').origin);
  close(after.scene.pharmacy.depth, before.scene.pharmacy.depth); close(after.scene.pharmacy.width, before.scene.pharmacy.width);
});

test('manual overrides only the chosen member of an ambiguous AI group; deletion restores uncertainty', () => {
  const input = scene([shelf('a', 'left', 2), shelf('b', 'left', 2)]);
  input.layout = {shelves: [{id: 'a', manual_placement: {x: 0, z: 0, rotation: 0}}, {id: 'b'}]};
  let out = createPharmacyLayout(input);
  assert.equal(out.scene.shelves.find(s => s.id === 'a').layout_status, 'positioned');
  assert.equal(out.scene.shelves.find(s => s.id === 'b').layout_status, 'pending');
  assert.equal(out.scene.pharmacy.manual_count, 1);
  delete input.layout.shelves[0].manual_placement;
  out = createPharmacyLayout(input); assert.equal(out.scene.pharmacy.pending_count, 2); assert.equal(out.scene.pharmacy.manual_count, 0);
});

test('movement rejects walls, rotated wall crossings, entrance and permanent service furniture', () => {
  const whole = createPharmacyLayout(scene([shelf('a', 'unknown')]));
  for (const pose of [
    {x: 3.8, z: 0, rotation: 0}, {x: 0, z: -4.95, rotation: 0},
    {x: 0, z: 4.4, rotation: Math.PI / 2}, {x: 0, z: 3, rotation: 0},
    {x: 2.6, z: 4, rotation: 0}, {x: -2.9, z: 4, rotation: 0},
    {x: -3.4, z: 3.3, rotation: Math.PI / 2}, {x: NaN, z: 0, rotation: 0},
  ]) assert.equal(validatePharmacyMove(whole, 'a', pose).valid, false, JSON.stringify(pose));
  assert.deepEqual(validatePharmacyMove(whole, 'a', {x: 0, z: 0, rotation: Math.PI / 4}), {valid: true});
});

test('oriented collision check permits parallel diagonal cabinets whose axis bounds overlap', () => {
  const whole = createPharmacyLayout(scene([shelf('a', 'unknown'), shelf('b', 'unknown')]));
  const b = whole.scene.shelves.find(s => s.id === 'b');
  b.origin = [0, 0, 0]; b.rotation_y = Math.PI / 4; b.layout_status = 'positioned';
  assert.equal(validatePharmacyMove(whole, 'a', {x: .2, z: .2, rotation: Math.PI / 4}).valid, false);
  assert.equal(validatePharmacyMove(whole, 'a', {x: .6, z: .6, rotation: Math.PI / 4}).valid, true);
  assert.equal(validatePharmacyMove(whole, 'b', {x: 0, z: 0, rotation: Math.PI / 4}).valid, true);
});

test('invalid persisted poses are pending, and all mutually colliding manual cabinets stay pending independent of array order', () => {
  const input = scene([shelf('a', 'unknown'), shelf('b', 'unknown'), shelf('c', 'unknown')]);
  input.layout = {shelves: [{id: 'a', manual_placement: {x: 0, z: 0, rotation: Math.PI / 2}},
    {id: 'b', manual_placement: {x: .2, z: .1, rotation: Math.PI / 4}}, {id: 'c', manual_placement: {x: 50, z: 50, rotation: 0}}]};
  const out = createPharmacyLayout(input);
  assert.equal(out.scene.pharmacy.manual_count, 0); assert.equal(out.scene.pharmacy.pending_count, 3);
  assert.ok(out.scene.pharmacy.pending_shelves.every(s => s.reason === 'manual_placement_conflict'));
  assert.ok(out.scene.shelves.every(s => s.layout_source === 'manual' && s.origin[0] > out.scene.pharmacy.width / 2));
  assert.ok(out.scene.shelves.every(s => s.rotation_y === 0));
  for (let i = 0; i < out.scene.shelves.length; i++) for (let j = i + 1; j < out.scene.shelves.length; j++)
    assert.equal(overlaps(bounds(out.scene.shelves[i]), bounds(out.scene.shelves[j])), false);
  input.scene.shelves.reverse(); input.layout.shelves.reverse();
  assert.deepEqual(createPharmacyLayout(input).scene, out.scene);
});

test('restoring one cabinet to its AI location cannot silently overlap another manual cabinet', () => {
  const input = scene([shelf('a', 'left'), shelf('b', 'unknown')]);
  const aiShelf = createPharmacyLayout(input).scene.shelves.find(s => s.id === 'a');
  input.layout = {shelves: [{id: 'a', manual_placement: {x: 0, z: -1, rotation: 0}},
    {id: 'b', manual_placement: {x: aiShelf.origin[0], z: aiShelf.origin[2], rotation: aiShelf.rotation_y}}]};
  assert.equal(createPharmacyLayout(input).scene.pharmacy.manual_count, 2);
  delete input.layout.shelves[0].manual_placement;
  const restored = createPharmacyLayout(input);
  assert.equal(restored.scene.shelves.find(s => s.id === 'a').layout_status, 'positioned');
  assert.equal(restored.scene.shelves.find(s => s.id === 'b').layout_status, 'pending');
});

test('manual pose can come from scene shelf, but persisted layout removal takes precedence', () => {
  const input = scene([{...shelf('a', 'unknown'), manual_placement: {x: 0, z: 0, rotation: 0}}]);
  assert.equal(createPharmacyLayout(input).scene.pharmacy.manual_count, 1);
  input.layout = {shelves: [{id: 'a'}]};
  assert.equal(createPharmacyLayout(input).scene.pharmacy.manual_count, 0);
});
