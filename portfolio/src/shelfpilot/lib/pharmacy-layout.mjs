/**
 * Display-only pharmacy layout. Photo evidence supplies relative zones/order;
 * a room template supplies dimensions and spacing. It is never a measured map.
 * Local shelves face +Z and have their back/base center at origin.
 */
const NOMINAL_HEIGHT = 2.3;
const WALL_INSET = .35;
const CABINET_GAP = .3;
const FRONT_CLEARANCE = 2.5;
const AISLE = 1.3;
const finiteVector = value => Array.isArray(value) && value.length === 3 && value.every(Number.isFinite);
const dimensionsOK = value => value && ['width', 'height', 'depth'].every(key => Number.isFinite(value[key]) && value[key] > 0);
const sumRun = (shelves, key, gap = CABINET_GAP) => shelves.reduce((sum, shelf) => sum + shelf[key], 0) + Math.max(0, shelves.length - 1) * gap;
const maximum = (shelves, key) => Math.max(0, ...shelves.map(shelf => shelf[key]));
const stableSort = (a, b) => (a.location?.order || 0) - (b.location?.order || 0) || String(a.id).localeCompare(String(b.id), 'en');

function rotate([x, y, z], yaw) {
  return [Math.cos(yaw) * x + Math.sin(yaw) * z, y, -Math.sin(yaw) * x + Math.cos(yaw) * z];
}

function toWorld(position, shelf, sourceShelf) {
  const local = position.map((n, i) => (n - sourceShelf.origin[i]) * shelf.scale_factor);
  return rotate(local, shelf.rotation_y).map((n, i) => n + shelf.origin[i]);
}

function scaledDimensions(dimensions, scale) {
  return {...dimensions, width: dimensions.width * scale, height: dimensions.height * scale, depth: dimensions.depth * scale};
}

const manualPoseOK = pose => pose && ['x', 'z', 'rotation'].every(key => Number.isFinite(pose[key]))
  && Math.abs(pose.x) <= 100 && Math.abs(pose.z) <= 100 && Math.abs(pose.rotation) <= Math.PI;

function footprint(shelf, pose, padding = .045) {
  const x = pose.x, z = pose.z, c = Math.cos(pose.rotation), s = Math.sin(pose.rotation);
  return [[-shelf.width / 2 - padding, -padding], [shelf.width / 2 + padding, -padding],
    [shelf.width / 2 + padding, shelf.depth + padding], [-shelf.width / 2 - padding, shelf.depth + padding]]
    .map(([a, b]) => [x + c * a + s * b, z - s * a + c * b]);
}

// Separating-axis test retains narrow diagonal gaps that an axis-aligned box loses.
function intersects(a, b) {
  for (const polygon of [a, b]) for (let i = 0; i < polygon.length; i++) {
    const edge = polygon[(i + 1) % polygon.length], start = polygon[i];
    const axis = [-(edge[1] - start[1]), edge[0] - start[0]];
    const left = a.map(p => p[0] * axis[0] + p[1] * axis[1]);
    const right = b.map(p => p[0] * axis[0] + p[1] * axis[1]);
    if (Math.min(Math.max(...left), Math.max(...right)) - Math.max(Math.min(...left), Math.min(...right)) <= 1e-9) return false;
  }
  return true;
}

function rectangle(x, z, width, depth) {
  return [[x - width / 2, z - depth / 2], [x + width / 2, z - depth / 2],
    [x + width / 2, z + depth / 2], [x - width / 2, z + depth / 2]];
}

/** Mirrors the permanent entrance fittings; empty display cabinets are movable template props. */
function reservedEntranceAreas(room) {
  const w = room.width, front = room.depth / 2;
  const counterWidth = Math.min(2.15, w * .27), benchWidth = Math.min(1.55, w * .2);
  return [
    {name: '入口通道', polygon: rectangle(0, front - FRONT_CLEARANCE / 2, Math.min(2, w * .25) + .2, FRONT_CLEARANCE)},
    {name: '服务台', polygon: rectangle(w / 2 - counterWidth / 2 - .28, front - .83, counterWidth + .34, 1.06)},
    {name: '等候长椅', polygon: rectangle(-w / 2 + 1.05, front - .83, benchWidth + .24, .78)},
    {name: '入口绿植', polygon: rectangle(-w / 2 + .4, front - 1.56, .72, .66)},
  ];
}

/** Validate a proposed base/back-center pose against a transformed whole-shop scene. */
export function validatePharmacyMove(data, shelfId, pose) {
  const room = data?.scene?.pharmacy, shelves = data?.scene?.shelves || [];
  const shelf = shelves.find(item => item.id === shelfId);
  if (!room || !Number.isFinite(room.width) || !Number.isFinite(room.depth)) return {valid: false, reason: '请先打开全店布局。'};
  if (!shelf || !dimensionsOK(shelf)) return {valid: false, reason: '这个货柜的尺寸暂不可用。'};
  if (!manualPoseOK(pose)) return {valid: false, reason: '货柜位置或旋转角度无效。'};
  const polygon = footprint(shelf, pose);
  if (polygon.some(([x, z]) => x < -room.width / 2 + .1 || x > room.width / 2 - .1 || z < -room.depth / 2 + .1 || z > room.depth / 2 - .1))
    return {valid: false, reason: '请把整个货柜放在店内地面，并与墙边留一点空隙。'};
  for (const area of reservedEntranceAreas(room)) if (intersects(polygon, area.polygon))
    return {valid: false, reason: `这里需要留给${area.name}，请换一个位置。`};
  for (const other of shelves) {
    if (other.id === shelfId || other.layout_status !== 'positioned' || !dimensionsOK(other) || !finiteVector(other.origin)) continue;
    const otherPolygon = footprint(other, {x: other.origin[0], z: other.origin[2], rotation: other.rotation_y || 0});
    if (intersects(polygon, otherPolygon)) return {valid: false, reason: `会与“${other.name || '另一个货柜'}”重叠，请移开一点。`};
  }
  return {valid: true};
}

/**
 * Returns a new whole-shop view; callers retain the original for single-cabinet
 * viewing. A second call is a no-op. Non-photo/measured data is never altered.
 */
export function createPharmacyLayout(data) {
  if (!data || data.geometry_kind !== 'reviewed_shelf_layout' || data.approximate === false
    || data.metric_scale_known === true || data.scene?.points?.length || data.scene?.pharmacy) return data;

  const sources = data.scene?.shelves || [];
  const sourceById = new Map(sources.map(shelf => [shelf.id, shelf]));
  const layoutById = new Map((data.layout?.shelves || []).map(shelf => [shelf.id, shelf]));
  const pending = [], groups = {left: [], right: [], back: [], island: []};
  const claims = new Map();
  const locationKey = shelf => {
    const location = shelf.location;
    return location && Object.hasOwn(groups, location.zone) && Number.isInteger(location.order) && location.order > 0
      ? `${location.zone}:${location.order}` : null;
  };
  for (const shelf of sources) {
    const key = locationKey(shelf);
    if (key) claims.set(key, (claims.get(key) || 0) + 1);
  }

  const invalid = [];
  for (const source of sources) {
    if (!dimensionsOK(source) || !finiteVector(source.origin)) {
      invalid.push({id: source.id, reason: 'invalid_cabinet_geometry'});
      continue;
    }
    const scale = source.photo_display ? 1 : NOMINAL_HEIGHT / source.height;
    const shelf = {...source, ...scaledDimensions(source, scale), origin: [0, 0, 0],
      boards: (source.boards || []).map(y => y * scale), rotation_y: 0, scale_factor: scale, layout_source: 'photo_relative_template'};
    const key = locationKey(source);
    const reason = !key ? 'relative_location_unconfirmed' : claims.get(key) > 1 ? 'relative_location_conflict' : null;
    shelf.layout_status = reason ? 'pending' : 'positioned';
    if (reason) {
      shelf.layout_reason = reason;
      pending.push(shelf);
    } else groups[source.location.zone].push(shelf);
  }
  Object.values(groups).forEach(shelves => shelves.sort(stableSort));
  pending.sort((a, b) => String(a.id).localeCompare(String(b.id), 'en'));

  const leftDepth = maximum(groups.left, 'depth'), rightDepth = maximum(groups.right, 'depth');
  const backDepth = maximum(groups.back, 'depth');
  const backRun = sumRun(groups.back, 'width');
  const islandRun = sumRun(groups.island, 'depth', AISLE);
  const sideRun = Math.max(sumRun(groups.left, 'width'), sumRun(groups.right, 'width'));
  const width = Math.max(8, backRun + WALL_INSET * 2 + CABINET_GAP * 2,
    leftDepth + rightDepth + maximum(groups.island, 'width') + AISLE * 2 + WALL_INSET * 2);
  const depth = Math.max(10, Math.max(sideRun, islandRun) + FRONT_CLEARANCE + backDepth + AISLE + WALL_INSET);
  const frontEdge = depth / 2 - FRONT_CLEARANCE;

  for (const zone of ['left', 'right']) {
    let cursor = frontEdge;
    for (const shelf of groups[zone]) {
      shelf.rotation_y = zone === 'left' ? Math.PI / 2 : -Math.PI / 2;
      shelf.origin = [(zone === 'left' ? -1 : 1) * (width / 2 - WALL_INSET), 0, cursor - shelf.width / 2];
      cursor -= shelf.width + CABINET_GAP;
    }
  }
  let backCursor = -backRun / 2;
  for (const shelf of groups.back) {
    shelf.origin = [backCursor + shelf.width / 2, 0, -depth / 2 + WALL_INSET];
    backCursor += shelf.width + CABINET_GAP;
  }
  let islandCursor = frontEdge;
  for (const shelf of groups.island) {
    shelf.origin = [0, 0, islandCursor - shelf.depth];
    islandCursor -= shelf.depth + AISLE;
  }

  // Compute the AI arrangement first, including the original slots of moved
  // cabinets. Editing one cabinet must not slide its neighbours or resize the room.
  const allShelves = [...groups.left, ...groups.right, ...groups.back, ...groups.island, ...pending];
  const manualCandidates = [];
  for (const shelf of allShelves) {
    const record = layoutById.get(shelf.id) || sourceById.get(shelf.id);
    if (!record || !Object.hasOwn(record, 'manual_placement')) continue;
    const pose = record.manual_placement;
    shelf.layout_source = 'manual';
    const result = validatePharmacyMove({scene: {pharmacy: {width, depth}, shelves: [shelf]}}, shelf.id, pose);
    if (!result.valid) {
      shelf.layout_status = 'pending'; shelf.layout_reason = 'manual_placement_conflict'; shelf.manual_placement_issue = result.reason;
      continue;
    }
    shelf.origin = [pose.x, 0, pose.z]; shelf.rotation_y = pose.rotation;
    shelf.layout_status = 'positioned'; delete shelf.layout_reason;
    manualCandidates.push(shelf);
  }
  // Evaluate all manual candidates together. Two conflicting manual moves both
  // need attention; their array order must not choose an arbitrary winner.
  const conflicts = manualCandidates.map(shelf => ({shelf, result: validatePharmacyMove(
    {scene: {pharmacy: {width, depth}, shelves: allShelves}}, shelf.id,
    {x: shelf.origin[0], z: shelf.origin[2], rotation: shelf.rotation_y})})).filter(item => !item.result.valid);
  for (const {shelf, result} of conflicts) {
    shelf.layout_status = 'pending'; shelf.layout_reason = 'manual_placement_conflict'; shelf.manual_placement_issue = result.reason;
  }
  pending.splice(0, pending.length, ...allShelves.filter(shelf => shelf.layout_status === 'pending'));
  pending.sort((a, b) => String(a.id).localeCompare(String(b.id), 'en'));

  // Unknown cabinets remain inspectable, on an explicitly separate staging pad.
  // Their positions here say nothing about their physical positions in the shop.
  let staging = null;
  if (pending.length) {
    const minX = width / 2 + 1.5, stageWidth = maximum(pending, 'width') + 1.2;
    let cursor = frontEdge;
    for (const shelf of pending) {
      shelf.rotation_y = 0;
      shelf.origin = [minX + stageWidth / 2, 0, cursor - shelf.depth];
      cursor -= shelf.depth + .8;
    }
    staging = {min: [minX, 0, cursor + .2], max: [minX + stageWidth, 2.6, frontEdge + .6]};
  }
  const shelves = [...allShelves.filter(shelf => shelf.layout_status === 'positioned'), ...pending];
  const shelfById = new Map(shelves.map(shelf => [shelf.id, shelf]));
  const canonical = new Map();
  const placements = (data.placements || []).map(placement => {
    if (placement.alias) return placement;
    const shelf = shelfById.get(placement.shelf_id), source = sourceById.get(placement.shelf_id);
    if (placement.position_status !== 'estimated' || !finiteVector(placement.position_3d)) return placement;
    if (!shelf || !source) return {...placement, position_status: 'unresolved', position_3d: null,
      spatial_evidence: {...placement.spatial_evidence, reason: 'cabinet_layout_unavailable'}};
    const position = toWorld(placement.position_3d, shelf, source);
    const method = shelf.layout_source === 'manual' ? 'manual_pharmacy_placement' : 'photo_relative_template';
    const dimensions = dimensionsOK(placement.dimensions) ? scaledDimensions(placement.dimensions, shelf.scale_factor) : placement.dimensions;
    const spec = placement.spec ? structuredClone(placement.spec) : placement.spec;
    if (spec) {
      if (dimensionsOK(spec.dimensions)) spec.dimensions = scaledDimensions(spec.dimensions, shelf.scale_factor);
      spec.provenance = {...spec.provenance, position: {status: 'estimated', position_3d: position,
        method, metric_scale_known: false, cabinet_location_status: shelf.layout_status}};
    }
    const result = {...placement, photo_position: finiteVector(placement.photo_position)?toWorld(placement.photo_position,shelf,source):undefined, position_3d: position, rotation_y: shelf.rotation_y, dimensions, spec,
      layout_status: shelf.layout_status, layout_source: shelf.layout_source, surface: null,
      spatial_evidence: {...placement.spatial_evidence, method, metric_scale_known: false,
        cabinet_location_status: shelf.layout_status, position_semantics: shelf.layout_status === 'pending' ? 'staging_display_only' : shelf.layout_source === 'manual' ? 'manual_template_position' : 'relative_template_position'}};
    canonical.set(result.id, result);
    return result;
  }).map(placement => {
    if (!placement.alias) return placement;
    const target = canonical.get(placement.canonical_id);
    if (!target || placement.position_status !== 'estimated') return {...placement, position_status: 'unresolved', position_3d: null};
    return {...placement, photo_position:target.photo_position, position_3d: [...target.position_3d], rotation_y: target.rotation_y,
      layout_status: target.layout_status, layout_source: target.layout_source, spatial_evidence: {...placement.spatial_evidence,
        method: target.spatial_evidence.method, cabinet_location_status: target.layout_status,
        position_semantics: target.spatial_evidence.position_semantics, metric_scale_known: false}};
  });

  return {...data, placements, scene: {...data.scene, shelves, pharmacy: {
    schema_version: 'pharmacy-template/1', width, depth, height: 3.1, origin: [0, 0, 0], entrance: [0, 0, depth / 2],
    positioned_count: shelves.length - pending.length, pending_count: pending.length + invalid.length,
    manual_count: shelves.filter(shelf => shelf.layout_status === 'positioned' && shelf.layout_source === 'manual').length,
    pending_shelves: [...pending.map(shelf => ({id: shelf.id, reason: shelf.layout_reason})), ...invalid],
    staging, metric_scale_known: false, method: 'photo_relative_template', unit: 'display',
  }}, provenance: {...data.provenance, position_source: 'photo_relative_template', metric_scale_known: false,
    room_dimensions_measured: false, relative_locations_from: 'shelf_layout', pending_positions: 'separate_staging_only'}};
}
