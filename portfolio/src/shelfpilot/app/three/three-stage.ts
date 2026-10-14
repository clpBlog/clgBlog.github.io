
import { withBasePath } from '../../lib/app-path.mjs';
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import type { FrontTextureSpec, GLBExportResult, MeasuredCamera, MeasuredMarker, MeasuredScene, PackageSpec, Provenance, QuadPixels, StageMode, StageOptions, StageSelection, StageState, StageView, TextureLoadReport, ThreeStage, Vec2, Vec3 } from "./types";

const FINITE_LIMIT = 1e10;
const FRONT_MATERIAL = "shelfpilot_front_evidence";
const finite3 = (value: unknown): value is Vec3 => Array.isArray(value) && value.length === 3 && value.every(number => Number.isFinite(number) && Math.abs(number) < FINITE_LIMIT);
const vector = (value: Vec3) => new THREE.Vector3(value[0], value[1], value[2]);
const plain = <T,>(value: T): T => JSON.parse(JSON.stringify(value));
const clamp = THREE.MathUtils.clamp;
function must(condition: unknown, message: string): asserts condition { if (!condition) throw new Error(message); }

function validatePackage(spec: PackageSpec) {
  must(spec && typeof spec.id === "string" && spec.id.length > 0 && spec.id.length <= 200, "展示模型缺少有效编号。");
  must(typeof spec.name === "string" && spec.name.length <= 500, "展示模型名称格式不正确。");
  must(["box", "bottle", "tube", "pouch"].includes(spec.kind), "不支持这种包装模板。");
  must(spec.dimensions?.unit === "display", "参数化包装只能使用 display 展示尺度。");
  for (const value of [spec.dimensions.width, spec.dimensions.height, spec.dimensions.depth]) must(Number.isFinite(value) && value > 0.0001 && value <= 10000, "展示尺寸必须是有限的正数。");
}

function generatedLabelContent(spec: PackageSpec) {
  if (spec.frontTexture) return null;
  const kind = spec.source?.kind;
  if (kind !== "catalog_placeholder" && kind !== "generic_template") return null;
  return {
    badge: kind === "catalog_placeholder" ? "目录示意" : "包装模板",
    name: spec.name,
    sku_id: kind === "catalog_placeholder" && typeof spec.source?.sku_id === "string" ? spec.source.sku_id : null,
    source_kind: kind,
  };
}

/** Export metadata is intentionally stronger than untrusted optional source metadata. */
export function packageProvenance(spec: PackageSpec): Provenance {
  validatePackage(spec);
  const front = spec.frontTexture, label = generatedLabelContent(spec);
  return plain({
    schema_version: "shelfpilot-display-model/1",
    package_id: spec.id,
    observed_name: spec.name,
    package_kind: spec.kind,
    geometry_source: "parameterized_approximation",
    unit: "display",
    metric_scale_known: false,
    not_for_measurement: true,
    physical_dimensions_verified: false,
    sku_identity_verified_by_this_model: false,
    nominal_dimensions: { ...spec.dimensions },
    origin: "bottom_center",
    axes: "X right, Y up, front face +Z",
    unobserved_surfaces: "neutral_material_without_invented_label_text",
    gltf_unit_warning: "glTF convention interprets coordinate numbers as metres. These numbers are nominal display units only, not measured physical dimensions.",
    front_texture: front ? {
      texture_source: "original_photo",
      source_url: front.url,
      image_id: front.imageId ?? null,
      image_width: front.imageWidth ?? null,
      image_height: front.imageHeight ?? null,
      bbox_pixels: front.bboxPixels ? [...front.bboxPixels] : null,
      quad_pixels_tl_tr_br_bl: front.quadPixels ? front.quadPixels.map(point => [...point]) : null,
      derivation: front.quadPixels ? "projective_crop_of_original_image" : front.bboxPixels ? "rectangular_crop_of_original_image" : "supplied_front_image",
      occlusions_preserved: true,
      generated_text: false,
      provenance: front.provenance ?? null,
    } : label ? {
      texture_source: "generated_label",
      derivation: "canvas_text_from_supplied_name_and_optional_sku_id",
      generated_text: true,
      observed_packaging: false,
      content: label,
      manufacturer_or_medical_claims_added: false,
    } : null,
    source: spec.source ?? null,
    extra: spec.extra ?? null,
    supplied_provenance: spec.provenance ?? null,
  }) as Provenance;
}

function neutralMaterial(color: string, name: string) {
  const material = new THREE.MeshStandardMaterial({ color, roughness: .79, metalness: 0 });
  material.name = name;
  return material;
}
function frontMaterial(color: string) {
  const material = new THREE.MeshBasicMaterial({ color, side: THREE.FrontSide, toneMapped: false });
  material.name = FRONT_MATERIAL;
  material.userData.front_evidence = true;
  return material;
}
function patchGeometry(width: number, height: number, zAt: (x: number, y: number) => number, yOffset = 0, segments = 18) {
  const geometry = new THREE.PlaneGeometry(width, height, segments, 12);
  const positions = geometry.getAttribute("position") as THREE.BufferAttribute;
  for (let index = 0; index < positions.count; index++) {
    const x = positions.getX(index), y = positions.getY(index) + yOffset;
    positions.setXYZ(index, x, y, zAt(x, y));
  }
  geometry.computeVertexNormals();
  return geometry;
}
function pouchGeometry(width: number, height: number, depth: number) {
  const nx = 18, ny = 22, stride = nx + 1, faceCount = (nx + 1) * (ny + 1);
  const positions: number[] = [], uv: number[] = [], indices: number[] = [];
  for (const side of [1, -1]) {
    for (let y = 0; y <= ny; y++) for (let x = 0; x <= nx; x++) {
      const u = x / nx, v = y / ny;
      const bulge = Math.pow(Math.sin(Math.PI * u), .68) * Math.pow(Math.sin(Math.PI * v), .82);
      positions.push((u - .5) * width, (v - .5) * height, side * depth * (.09 + .41 * bulge));
      uv.push(side > 0 ? u : 1 - u, v);
    }
  }
  const frontStart = indices.length;
  for (let y = 0; y < ny; y++) for (let x = 0; x < nx; x++) { const a = y * stride + x, b = a + 1, c = a + stride, d = c + 1; indices.push(a, b, d, a, d, c); }
  const frontCount = indices.length - frontStart;
  const backStart = indices.length;
  for (let y = 0; y < ny; y++) for (let x = 0; x < nx; x++) { const a = faceCount + y * stride + x, b = a + 1, c = a + stride, d = c + 1; indices.push(a, d, b, a, c, d); }
  const loop: number[] = [];
  for (let x = 0; x <= nx; x++) loop.push(x);
  for (let y = 1; y <= ny; y++) loop.push(y * stride + nx);
  for (let x = nx - 1; x >= 0; x--) loop.push(ny * stride + x);
  for (let y = ny - 1; y > 0; y--) loop.push(y * stride);
  for (let i = 0; i < loop.length; i++) { const a = loop[i], b = loop[(i + 1) % loop.length], c = a + faceCount, d = b + faceCount; indices.push(a, c, d, a, d, b); }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geometry.setIndex(indices); geometry.addGroup(frontStart, frontCount, 1); geometry.addGroup(backStart, indices.length - backStart, 0); geometry.computeVertexNormals();
  return geometry;
}

/** Pure geometry builder; no DOM, image loading or WebGL context. Origin is the bottom centre. */
export function buildPackageModel(spec: PackageSpec): THREE.Group {
  validatePackage(spec);
  const { width: w, height: h, depth: d } = spec.dimensions;
  const group = new THREE.Group(); group.name = spec.name || spec.id;
  group.userData = { shelfpilot: packageProvenance(spec), stageSelection: { id: spec.id, kind: "package", packageId: spec.id } };
  const body = neutralMaterial(spec.bodyColor || "#e5e8df", "Neutral unobserved package surface");
  const face = frontMaterial(spec.bodyColor || "#edf0e7");
  const cap = neutralMaterial(spec.capColor || "#d6ded2", "Neutral unobserved closure");
  const shell = new THREE.Group(); shell.position.y = h / 2; group.add(shell);
  const mesh = (geometry: THREE.BufferGeometry, material: THREE.Material | THREE.Material[], name: string) => { const object = new THREE.Mesh(geometry, material); object.name = name; object.castShadow = true; object.receiveShadow = true; shell.add(object); return object; };
  const epsilon = Math.min(w, h, d) * .003;
  if (spec.kind === "box") {
    const bevel = Math.min(w, h, d) * .027;
    mesh(new RoundedBoxGeometry(w, h, d, 2, bevel), body, "Parameterized carton");
    const front = mesh(new THREE.PlaneGeometry(w - bevel * 2.05, h - bevel * 2.05), face, "Observed front image"); front.position.z = d / 2 + epsilon; front.castShadow = false;
    cap.dispose();
  } else if (spec.kind === "bottle") {
    const r = w / 2;
    const profile = [[0, -.5], [.82, -.5], [.97, -.474], [1, -.42], [1, .23], [.94, .285], [.57, .34], [.40, .375], [.40, .41], [0, .41]].map(([radius, y]) => new THREE.Vector2(radius * r, y * h));
    const bottle = mesh(new THREE.LatheGeometry(profile, 40), body, "Parameterized bottle body"); bottle.scale.z = d / w;
    const closure = mesh(new THREE.CylinderGeometry(r * .50, r * .50, h * .12, 36), cap, "Parameterized bottle closure"); closure.position.y = h * .44; closure.scale.z = d / w;
    const label = mesh(patchGeometry(w * .78, h * .58, x => d / 2 * Math.sqrt(Math.max(.001, 1 - (x / r) ** 2)) + epsilon, -h * .075), face, "Observed front image on approximate bottle surface"); label.castShadow = false;
  } else if (spec.kind === "tube") {
    const r = w / 2;
    const profile = [[0, -.335], [.67, -.335], [.85, -.26], [.97, -.16], [1, .24], [.99, .42], [.96, .475], [0, .475]].map(([radius, y]) => new THREE.Vector2(radius * r, y * h));
    const tube = mesh(new THREE.LatheGeometry(profile, 40), body, "Parameterized tube body"); tube.scale.z = d / w;
    const closure = mesh(new THREE.CylinderGeometry(r * .69, r * .70, h * .165, 32), cap, "Parameterized tube closure"); closure.position.y = -h * .4175; closure.scale.z = d / w;
    const seam = mesh(new THREE.BoxGeometry(w * .97, h * .027, d * .19), body, "Unlabelled tube crimp"); seam.position.y = h * .4865;
    const label = mesh(patchGeometry(w * .76, h * .57, (x, y) => { const radial = y < -h * .16 ? .96 : 1; return d / 2 * Math.sqrt(Math.max(.01, radial ** 2 - (x / r) ** 2)) + epsilon; }, h * .077), face, "Observed front image on approximate tube surface"); label.castShadow = false;
  } else {
    mesh(pouchGeometry(w, h, d), [body, face], "Parameterized filled pouch with observed front");
    const seamMaterial = neutralMaterial(spec.capColor || "#d8dfcf", "Unlabelled pouch seal");
    for (const y of [-.485, .485]) { const seam = mesh(new THREE.BoxGeometry(w * .999, h * .016, d * .185), seamMaterial, "Approximate neutral pouch seal"); seam.position.y = y * h; }
    cap.dispose();
  }
  group.updateMatrixWorld(true);
  return group;
}

type Homography = readonly [number, number, number, number, number, number, number, number];
function quadHomography(quad: QuadPixels): Homography {
  must(Array.isArray(quad) && quad.length === 4 && quad.every(point => Array.isArray(point) && point.length === 2 && point.every(Number.isFinite)), "正面四角格式不正确。");
  let winding = 0;
  for (let i = 0; i < 4; i++) { const a = quad[i], b = quad[(i + 1) % 4], c = quad[(i + 2) % 4]; const cross = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]); must(Math.abs(cross) > 1e-8, "正面四角退化，无法生成贴图。"); if (!winding) winding = Math.sign(cross); else must(Math.sign(cross) === winding, "正面四角必须按 TL / TR / BR / BL 构成凸四边形。"); }
  const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = quad;
  const sx = x0 - x1 + x2 - x3, sy = y0 - y1 + y2 - y3;
  let g = 0, h = 0;
  if (Math.abs(sx) + Math.abs(sy) > 1e-10) {
    const dx1 = x1 - x2, dx2 = x3 - x2, dy1 = y1 - y2, dy2 = y3 - y2, determinant = dx1 * dy2 - dx2 * dy1;
    must(Math.abs(determinant) > 1e-10, "正面投影不可逆。");
    g = (sx * dy2 - dx2 * sy) / determinant; h = (dx1 * sy - sx * dy1) / determinant;
  }
  const result: Homography = [x1 - x0 + g * x1, x3 - x0 + h * x3, x0, y1 - y0 + g * y1, y3 - y0 + h * y3, y0, g, h];
  must(result.every(Number.isFinite), "正面投影包含非有限数值。"); return result;
}
function applyHomography(transform: Homography, u: number, v: number): Vec2 {
  const [a, b, c, d, e, f, g, h] = transform, denominator = g * u + h * v + 1;
  must(Number.isFinite(u) && Number.isFinite(v) && Math.abs(denominator) > 1e-12, "贴图投影分母无效。");
  return [(a * u + b * v + c) / denominator, (d * u + e * v + f) / denominator];
}
/** Map unit-square coordinates to the real original-image pixel quadrilateral. */
export function projectQuadPoint(quad: QuadPixels, u: number, v: number): Vec2 { return applyHomography(quadHomography(quad), u, v); }

export interface NormalizedMeasuredCamera extends MeasuredCamera { center: Vec3; right: Vec3; down: Vec3; forward: Vec3; radialK1: number }
export function normalizeMeasuredCamera(input: MeasuredCamera): NormalizedMeasuredCamera {
  must(input && typeof input.id === "string" && input.id.length > 0, "实测相机缺少编号。");
  must([input.width, input.height, input.fx, input.fy].every(value => Number.isFinite(value) && value > 0) && [input.cx, input.cy].every(Number.isFinite), "实测相机内参无效。");
  let center = input.center, right = input.right, down = input.down, forward = input.forward;
  if (!(finite3(center) && finite3(right) && finite3(down) && finite3(forward))) {
    must(Array.isArray(input.R) && input.R.length === 3 && input.R.every(finite3) && finite3(input.t), "相机需要有效的中心与轴，或 COLMAP R/t。");
    const R = input.R!, t = input.t!; right = R[0]; down = R[1]; forward = R[2];
    center = [0, 1, 2].map(column => -(R[0][column] * t[0] + R[1][column] * t[1] + R[2][column] * t[2])) as [number, number, number];
  }
  must(finite3(center) && finite3(right) && finite3(down) && finite3(forward), "相机坐标包含非有限数值。");
  const r = vector(right), d = vector(down), f = vector(forward);
  must([r, d, f].every(axis => Math.abs(axis.length() - 1) < .015) && Math.abs(r.dot(d)) < .015 && Math.abs(r.dot(f)) < .015 && Math.abs(d.dot(f)) < .015 && new THREE.Vector3().crossVectors(r, d).dot(f) > .98, "相机轴不是有效的正交姿态。");
  const radialK1 = input.camera_model === "SIMPLE_RADIAL" ? input.radial_k1 ?? input.camera_params?.[3] ?? 0 : 0;
  must(Number.isFinite(radialK1), "相机畸变参数无效。");
  return { ...input, center, right, down, forward, radialK1 };
}
export function cameraPoseMatrix(camera: MeasuredCamera): THREE.Matrix4 {
  const c = normalizeMeasuredCamera(camera);
  return new THREE.Matrix4().makeBasis(vector(c.right), vector(c.down).negate(), vector(c.forward).negate()).setPosition(vector(c.center));
}
export function calibratedProjection(camera: MeasuredCamera, near: number, far: number): THREE.Matrix4 {
  const c = normalizeMeasuredCamera(camera);
  must(Number.isFinite(near) && Number.isFinite(far) && near > 0 && far > near, "相机裁剪平面无效。");
  return new THREE.Matrix4().set(2 * c.fx / c.width, 0, 1 - 2 * c.cx / c.width, 0, 0, 2 * c.fy / c.height, 2 * c.cy / c.height - 1, 0, 0, 0, -(far + near) / (far - near), -2 * far * near / (far - near), 0, 0, -1, 0);
}
export function projectMeasuredPoint(point: Vec3, camera: MeasuredCamera): { u: number; v: number; depth: number } | null {
  must(finite3(point), "被投影点无效。"); const c = normalizeMeasuredCamera(camera), delta = vector(point).sub(vector(c.center)), depth = delta.dot(vector(c.forward));
  if (!(depth > 1e-9)) return null;
  const x = delta.dot(vector(c.right)) / depth, y = delta.dot(vector(c.down)) / depth, radial = 1 + c.radialK1 * (x * x + y * y);
  return { u: c.fx * x * radial + c.cx, v: c.fy * y * radial + c.cy, depth };
}

/** Pure export snapshot: solid geometry at its bottom origin; no selection helper or shelf. */
export function makeExportObject(model: THREE.Group, spec: PackageSpec, suppliedFrontTexture?: THREE.Texture): THREE.Group {
  const result = model.clone(true); result.position.set(0, 0, 0); result.rotation.set(0, 0, 0); result.scale.set(1, 1, 1); result.visible = true;
  const textures = new Map<THREE.Texture, THREE.Texture>();
  const cloneMaterial = (original: THREE.Material) => {
    const material = original.clone();
    if (material instanceof THREE.MeshBasicMaterial || material instanceof THREE.MeshStandardMaterial) {
      material.wireframe = false; material.opacity = 1; material.transparent = false;
      if (material instanceof THREE.MeshStandardMaterial) material.emissive.set(0x000000);
      const texture = material.userData.front_evidence && suppliedFrontTexture ? suppliedFrontTexture : material.map;
      if (texture) { if (!textures.has(texture)) textures.set(texture, texture.clone()); material.map = textures.get(texture)!; material.color.set(0xffffff); }
    }
    return material;
  };
  result.traverse(object => {
    if (object instanceof THREE.Mesh) { object.geometry = object.geometry.clone(); object.material = Array.isArray(object.material) ? object.material.map(cloneMaterial) : cloneMaterial(object.material); object.castShadow = false; object.receiveShadow = false; }
    delete object.userData.stageSelection;
  });
  result.userData = { shelfpilot: {
    ...packageProvenance(spec),
    exported_by: `Three.js r${THREE.REVISION} GLTFExporter`,
    texture_embedded: !!suppliedFrontTexture,
    texture_source: suppliedFrontTexture ? suppliedFrontTexture.userData.texture_source || (spec.frontTexture ? "original_photo" : generatedLabelContent(spec) ? "generated_label" : "supplied_texture") : "none",
    embedded_texture_metadata: suppliedFrontTexture ? plain(suppliedFrontTexture.userData) : null,
    export_mode: "selected_display_package_only",
  } };
  result.updateMatrixWorld(true); return result;
}

type DecodedImage = { image: CanvasImageSource; width: number; height: number; close: () => void };
type PackageEntry = { spec: PackageSpec; model: THREE.Group; texture: THREE.CanvasTexture | null; textureState: "none" | "pending" | "loaded" | "failed"; error?: string; shelfPosition: THREE.Vector3; shelfScale: number; outline: THREE.Box3Helper };
type Bounds = { box: THREE.Box3; center: THREE.Vector3; radius: number };

function safeSourceURL(url: string): string {
  const parsed = new URL(url, window.location.href);
  must(parsed.origin === window.location.origin && ["https:", "http:"].includes(parsed.protocol), "正面证据只允许读取当前站点的原图。");
  return withBasePath(parsed.pathname) + parsed.search + parsed.hash;
}
async function decodeSource(url: string, signal: AbortSignal): Promise<DecodedImage> {
  const response = await fetch(safeSourceURL(url), { credentials: "same-origin", signal });
  must(response.ok, response.status === 401 ? "登录已失效，无法读取原图贴面。" : "原图读取失败，未生成正面贴图。");
  const blob = await response.blob();
  must(blob.size > 0 && blob.size <= 32 * 1024 * 1024 && /^image\/(jpeg|png|webp)$/i.test(blob.type), "正面源图不是允许的 JPEG / PNG / WebP，或文件过大。");
  if (typeof createImageBitmap === "function") {
    const bitmap = await createImageBitmap(blob);
    if (signal.aborted) { bitmap.close(); throw new DOMException("Aborted", "AbortError"); }
    if (!(bitmap.width > 0 && bitmap.height > 0 && bitmap.width * bitmap.height <= 64000000)) { bitmap.close(); throw new Error("原图尺寸超过展示纹理的读取范围。"); }
    return { image: bitmap, width: bitmap.width, height: bitmap.height, close: () => bitmap.close() };
  }
  const objectURL = URL.createObjectURL(blob);
  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const element = new Image();
      const abort = () => { element.src = ""; reject(new DOMException("Aborted", "AbortError")); };
      signal.addEventListener("abort", abort, { once: true });
      element.onload = () => { signal.removeEventListener("abort", abort); resolve(element); };
      element.onerror = () => { signal.removeEventListener("abort", abort); reject(new Error("浏览器无法解码原图。")); };
      element.src = objectURL;
    });
    must(image.naturalWidth > 0 && image.naturalHeight > 0 && image.naturalWidth * image.naturalHeight <= 64000000, "原图尺寸超过展示纹理的读取范围。");
    return { image, width: image.naturalWidth, height: image.naturalHeight, close: () => URL.revokeObjectURL(objectURL) };
  } catch (error) { URL.revokeObjectURL(objectURL); throw error; }
}

/** Real source pixels are resampled; no generated lettering, missing-face synthesis or inpainting. */
function bakeFrontTexture(source: DecodedImage, spec: FrontTextureSpec, maximum: number): THREE.CanvasTexture {
  if (spec.imageWidth !== undefined) must(spec.imageWidth === source.width, "贴图源宽度与原图不一致，已停止贴图。");
  if (spec.imageHeight !== undefined) must(spec.imageHeight === source.height, "贴图源高度与原图不一致，已停止贴图。");
  const box = spec.bboxPixels || [0, 0, source.width, source.height];
  must(box.length === 4 && box.every(Number.isFinite) && box[0] >= 0 && box[1] >= 0 && box[2] > box[0] && box[3] > box[1] && box[2] <= source.width && box[3] <= source.height, "正面裁切框超出真实原图。");
  const quad: QuadPixels = spec.quadPixels || [[box[0], box[1]], [box[2], box[1]], [box[2], box[3]], [box[0], box[3]]];
  must(quad.every(point => point[0] >= 0 && point[1] >= 0 && point[0] <= source.width && point[1] <= source.height), "正面四角超出真实原图。");
  const transform = quadHomography(quad);
  const distance = (a: Vec2, b: Vec2) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const sourceWidth = (distance(quad[0], quad[1]) + distance(quad[3], quad[2])) / 2;
  const sourceHeight = (distance(quad[0], quad[3]) + distance(quad[1], quad[2])) / 2;
  const scale = Math.min(1, maximum / Math.max(sourceWidth, sourceHeight));
  const width = Math.max(2, Math.round(sourceWidth * scale)), height = Math.max(2, Math.round(sourceHeight * scale));
  const output = document.createElement("canvas"); output.width = width; output.height = height;
  const context = output.getContext("2d", { willReadFrequently: true }); must(context, "浏览器无法建立真实原图贴图。");
  const minX = Math.floor(Math.min(...quad.map(point => point[0]))), minY = Math.floor(Math.min(...quad.map(point => point[1])));
  const cutWidth = Math.max(1, Math.ceil(Math.max(...quad.map(point => point[0]))) - minX), cutHeight = Math.max(1, Math.ceil(Math.max(...quad.map(point => point[1]))) - minY);
  const input = document.createElement("canvas"); input.width = cutWidth; input.height = cutHeight;
  const inputContext = input.getContext("2d", { willReadFrequently: true }); must(inputContext, "浏览器无法读取原图像素。");
  inputContext.drawImage(source.image, minX, minY, cutWidth, cutHeight, 0, 0, cutWidth, cutHeight);
  const pixels = inputContext.getImageData(0, 0, cutWidth, cutHeight).data, result = context.createImageData(width, height);
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const original = applyHomography(transform, (x + .5) / width, (y + .5) / height);
    const px = clamp(original[0] - minX - .5, 0, cutWidth - 1), py = clamp(original[1] - minY - .5, 0, cutHeight - 1);
    const x0 = Math.floor(px), y0 = Math.floor(py), x1 = Math.min(cutWidth - 1, x0 + 1), y1 = Math.min(cutHeight - 1, y0 + 1), tx = px - x0, ty = py - y0;
    const a = (y0 * cutWidth + x0) * 4, b = (y0 * cutWidth + x1) * 4, c = (y1 * cutWidth + x0) * 4, d = (y1 * cutWidth + x1) * 4, target = (y * width + x) * 4;
    for (let channel = 0; channel < 4; channel++) result.data[target + channel] = (pixels[a + channel] * (1 - tx) + pixels[b + channel] * tx) * (1 - ty) + (pixels[c + channel] * (1 - tx) + pixels[d + channel] * tx) * ty;
  }
  context.putImageData(result, 0, 0);
  // Release the temporary full crop; only the bounded derived texture is retained.
  input.width = 1; input.height = 1;
  const texture = new THREE.CanvasTexture(output); texture.name = `Observed front: ${spec.imageId || spec.url}`; texture.colorSpace = THREE.SRGBColorSpace;
  texture.userData = { mimeType: "image/png", texture_source: "original_photo", generated_text: false, source_url: spec.url, derived_from_original_pixels: true, source_quad_pixels: quad.map(point => [...point]) };
  return texture;
}

/** Label only catalog/template models. A failed photograph is never replaced with generated text. */
function bakeGeneratedLabel(spec: PackageSpec, maximum: number): THREE.CanvasTexture {
  const label = generatedLabelContent(spec); must(label, "仅目录示意与包装模板可生成文字标签。");
  const { width: w, height: h } = spec.dimensions;
  const aspect = spec.kind === "bottle" ? w * .78 / (h * .58) : spec.kind === "tube" ? w * .76 / (h * .57) : w / h;
  const limit = Math.min(768, maximum);
  const width = Math.max(64, Math.round(aspect >= 1 ? limit : limit * aspect));
  const height = Math.max(64, Math.round(aspect <= 1 ? limit : limit / aspect));
  const canvas = document.createElement("canvas"); canvas.width = width; canvas.height = height;
  const context = canvas.getContext("2d"); must(context, "浏览器无法绘制目录文字标签。");
  const short = Math.min(width, height), margin = short * .08, usable = width - margin * 2;
  const family = '"PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", system-ui, sans-serif';
  const clean = (text: string) => text.replace(/[\u0000-\u001f\u007f]/g, " ").trim();
  const font = (size: number, weight = 600) => { context.font = `${weight} ${size}px ${family}`; };
  const ellipsis = (text: string) => {
    let chars = Array.from(text);
    if (context.measureText(text).width <= usable) return text;
    while (chars.length && context.measureText(chars.join("") + "…").width > usable) chars.pop();
    return chars.join("") + "…";
  };
  const wrap = (text: string) => {
    const lines: string[] = []; let line = "";
    for (const char of Array.from(text)) {
      if (line && context.measureText(line + char).width > usable) { lines.push(line); line = char; }
      else line += char;
    }
    if (line) lines.push(line); return lines;
  };
  context.fillStyle = "#f8f7ee"; context.fillRect(0, 0, width, height);
  context.strokeStyle = "#bac8b1"; context.lineWidth = Math.max(1, short * .005); context.strokeRect(margin * .38, margin * .38, width - margin * .76, height - margin * .76);
  context.textBaseline = "top"; context.textAlign = "left";
  const badgeSize = Math.max(8, Math.min(28, short * .07)); font(badgeSize, 700);
  context.fillStyle = "#486348"; context.fillText(label.badge, margin, margin);
  context.fillStyle = "#cbd6c0"; context.fillRect(margin, margin + badgeSize * 1.6, usable, Math.max(1, short * .005));
  const name = clean(label.name) || "名称未填写", availableHeight = height * .43;
  let size = Math.max(12, Math.min(76, usable * .17, availableHeight / 1.22));
  font(size, 700); let lines = wrap(name);
  const minimum = Math.max(10, short * .055);
  while ((lines.length > 3 || lines.length * size * 1.22 > availableHeight) && size > minimum) { size = Math.max(minimum, size - 2); font(size, 700); lines = wrap(name); }
  if (lines.length > 3) lines = [lines[0], lines[1], ellipsis(lines.slice(2).join(""))];
  context.fillStyle = "#213f2c";
  const top = height * .27 + Math.max(0, (availableHeight - lines.length * size * 1.22) / 2);
  lines.forEach((line, index) => context.fillText(ellipsis(line), margin, top + index * size * 1.22));
  const footerSize = Math.max(8, Math.min(23, short * .055)); font(footerSize, 500); context.fillStyle = "#566451";
  if (label.sku_id) context.fillText(ellipsis(`SKU ${clean(label.sku_id)}`), margin, height - margin - footerSize * 2.7);
  context.fillText(ellipsis(label.source_kind === "catalog_placeholder" ? "展示外观 · 包装未核验" : "通用外形 · 非实物复刻"), margin, height - margin - footerSize);
  const texture = new THREE.CanvasTexture(canvas); texture.name = `${label.badge}: ${spec.name}`; texture.colorSpace = THREE.SRGBColorSpace;
  texture.userData = { mimeType: "image/png", texture_source: "generated_label", generated_text: true, observed_packaging: false, content: label, manufacturer_or_medical_claims_added: false };
  return texture;
}

function disposeTree(root: THREE.Object3D, disposeTextures = true) {
  const geometries = new Set<THREE.BufferGeometry>(), materials = new Set<THREE.Material>(), textures = new Set<THREE.Texture>();
  root.traverse(object => {
    if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) {
      geometries.add(object.geometry);
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) { materials.add(material); const map = (material as THREE.MeshBasicMaterial).map; if (map) textures.add(map); }
    }
  });
  geometries.forEach(geometry => geometry.dispose()); materials.forEach(material => material.dispose()); if (disposeTextures) textures.forEach(texture => texture.dispose());
  root.removeFromParent(); root.clear();
}
function objectBounds(root: THREE.Object3D): Bounds | null {
  root.updateMatrixWorld(true); const box = new THREE.Box3().setFromObject(root); if (box.isEmpty()) return null;
  const center = box.getCenter(new THREE.Vector3()), radius = Math.max(box.getSize(new THREE.Vector3()).length() / 2, .001); return { box, center, radius };
}
function boundsFromPoints(points: readonly (readonly number[])[], quantile: number): Bounds | null {
  if (!points.length) return null;
  const min: number[] = [], max: number[] = [];
  for (let axis = 0; axis < 3; axis++) {
    const values = points.map(point => point[axis]).sort((a, b) => a - b);
    const q = points.length >= 20 ? quantile : 0;
    const at = (values.length - 1) * q, lower = Math.floor(at), fraction = at - lower;
    min.push(values[lower] + (values[Math.min(values.length - 1, lower + 1)] - values[lower]) * fraction);
    const atHigh = (values.length - 1) * (1 - q), high = Math.floor(atHigh), f = atHigh - high;
    max.push(values[high] + (values[Math.min(values.length - 1, high + 1)] - values[high]) * f);
  }
  const box = new THREE.Box3(new THREE.Vector3(...min as [number, number, number]), new THREE.Vector3(...max as [number, number, number]));
  return { box, center: box.getCenter(new THREE.Vector3()), radius: Math.max(box.getSize(new THREE.Vector3()).length() / 2, .001) };
}

/**
 * One WebGL renderer with on-demand frames. OrbitControls has no auto-rotation/damping loop.
 * Display package geometry never shares the measured point-cloud coordinate system.
 */
export function createThreeStage(canvas: HTMLCanvasElement, options: StageOptions = {}): ThreeStage {
  must(canvas instanceof HTMLCanvasElement, "Three.js 渲染器需要一个真实 canvas 元素。");
  const maxPackages = clamp(Math.floor(options.maxPackages || 48), 1, 48);
  const maxTextureSize = clamp(Math.floor(options.maxTextureSize || 1024), 64, 2048);
  const pixelRatioCap = clamp(options.pixelRatioCap || 1.75, 1, 2);
  let renderer: THREE.WebGLRenderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance", preserveDrawingBuffer: false }); }
  catch { throw new Error("此浏览器未能建立 WebGL 2 渲染环境，无法显示真实三维模型。请在支持 WebGL 2 的浏览器中重试。"); }
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.NeutralToneMapping; renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.shadowMap.autoUpdate = false; renderer.autoClear = false;
  const display = new THREE.Scene(); display.background = new THREE.Color(options.background || "#f0f4ee");
  const measured = new THREE.Scene(); measured.background = new THREE.Color("#102c25");
  const packageRoot = new THREE.Group(), shelfRoot = new THREE.Group(), outlineRoot = new THREE.Group(); display.add(packageRoot, shelfRoot, outlineRoot);
  shelfRoot.name = "Independent display shelving, not a measured store"; shelfRoot.userData = { display_only: true, metric_scale_known: false };
  const measuredRoot = new THREE.Group(), markerRoot = new THREE.Group(), cameraRoot = new THREE.Group(); measured.add(measuredRoot, markerRoot, cameraRoot);
  const hemisphere = new THREE.HemisphereLight(0xffffff, 0x73866b, 2.4); display.add(hemisphere);
  const keyLight = new THREE.DirectionalLight(0xfff8e9, 2.2); keyLight.castShadow = true; keyLight.shadow.mapSize.set(1024, 1024); keyLight.shadow.bias = -.0004; keyLight.shadow.normalBias = .016; display.add(keyLight, keyLight.target);
  const fillLight = new THREE.DirectionalLight(0xe8f2e4, 1.15); fillLight.position.set(-4, 3, 2); display.add(fillLight);
  const camera = new THREE.PerspectiveCamera(42, 1, .001, 1000); camera.position.set(5, 3, 8);
  const previousTouchAction = canvas.style.touchAction;
  const controls = new OrbitControls(camera, canvas); controls.enableDamping = false; controls.autoRotate = false; controls.enablePan = true; controls.minPolarAngle = .003; controls.maxPolarAngle = Math.PI - .003;
  canvas.style.touchAction = "none";
  const raycaster = new THREE.Raycaster();
  let width = 1, height = 1, mode: StageMode = "shelf", selectedId: string | null = null, view: StageView = "isometric", activeCamera: NormalizedMeasuredCamera | null = null;
  let disposed = false, contextLost = false, raf = 0, loadingVersion = 0, texturesVisible = true, wireframe = false, showCameras = true;
  let displayBounds: Bounds | null = null, measuredBounds: Bounds | null = null, allMeasuredBounds: Bounds | null = null;
  let packageEntries = new Map<string, PackageEntry>(), normalizedCameras: NormalizedMeasuredCamera[] = [], markerEntries: Array<{ marker: MeasuredMarker; object: THREE.Mesh }> = [];
  let loadController: AbortController | null = null, pendingTextures: Promise<TextureLoadReport> = Promise.resolve({ loaded: [], failed: [] });
  const highlighted = new Set<string>(), lensDistortion = { value: 0 };
  let pointer: { id: number; x: number; y: number; moved: boolean } | null = null;
  let lastFit: Bounds | null = null;
  const state = (): StageState => ({ mode, selectedId, cameraId: activeCamera?.id || null, view, context: disposed ? "disposed" : contextLost ? "lost" : "ready" });
  const notifyView = () => options.onViewChange?.(state());
  const checkAlive = () => { if (disposed) throw new Error("Three.js 渲染器已释放。"); };
  const report = (error: unknown) => options.onError?.(error instanceof Error ? error.message : "三维操作未完成。");

  function requestRender() { if (!disposed && !contextLost && !raf) raf = requestAnimationFrame(render); }
  function viewport() {
    if (!activeCamera) return { x: 0, y: 0, width, height };
    const scale = Math.min(width / activeCamera.width, height / activeCamera.height), w = activeCamera.width * scale, h = activeCamera.height * scale;
    return { x: (width - w) / 2, y: (height - h) / 2, width: w, height: h };
  }
  function render() {
    raf = 0; if (disposed || contextLost) return;
    try {
      renderer.setScissorTest(false); renderer.setViewport(0, 0, width, height);
      renderer.setClearColor(mode === "measured" ? "#081e19" : options.background || "#f0f4ee", 1); renderer.clear(true, true, true);
      const area = viewport();
      if (activeCamera) { renderer.setViewport(area.x, area.y, area.width, area.height); renderer.setScissor(area.x, area.y, area.width, area.height); renderer.setScissorTest(true); }
      renderer.render(mode === "measured" ? measured : display, camera); renderer.setScissorTest(false);
    } catch (error) { report(error); }
  }
  function leaveCamera() {
    if (!activeCamera) return;
    activeCamera = null; lensDistortion.value = 0; camera.up.set(0, 1, 0); camera.aspect = width / height; camera.fov = 42; camera.updateProjectionMatrix(); cameraRoot.visible = showCameras;
    controls.update(); notifyView(); requestRender();
  }
  function aimLighting(bounds: Bounds | null) {
    if (!bounds) return;
    const r = bounds.radius; keyLight.position.copy(bounds.center).add(new THREE.Vector3(r * .7, r * 1.45, r * 1.05)); keyLight.target.position.copy(bounds.center);
    keyLight.shadow.camera.left = -r * 1.45; keyLight.shadow.camera.right = r * 1.45; keyLight.shadow.camera.top = r * 1.45; keyLight.shadow.camera.bottom = -r * 1.45; keyLight.shadow.camera.near = .01; keyLight.shadow.camera.far = r * 7 + 20; keyLight.shadow.camera.updateProjectionMatrix();
    fillLight.position.copy(bounds.center).add(new THREE.Vector3(-r, r * .8, r)); renderer.shadowMap.needsUpdate = true;
  }
  function fit(bounds: Bounds | null, preset: StageView = view, preserveDirection = false) {
    leaveCamera(); if (!bounds) { requestRender(); return; }
    lastFit = bounds; const r = bounds.radius;
    const vertical = THREE.MathUtils.degToRad(camera.fov), horizontal = 2 * Math.atan(Math.tan(vertical / 2) * width / height), minimumFov = Math.min(vertical, horizontal);
    const distance = r / Math.sin(Math.max(.01, minimumFov / 2)) * 1.13;
    const direction = preserveDirection ? camera.position.clone().sub(controls.target).normalize() : preset === "front" ? new THREE.Vector3(0, 0, 1) : preset === "top" ? new THREE.Vector3(0, 1, .006).normalize() : new THREE.Vector3(.70, .36, 1.25).normalize();
    camera.up.set(0, 1, 0); camera.aspect = width / height; camera.near = Math.max(.00001, r / 5000); camera.far = Math.max(distance * 25, (allMeasuredBounds?.radius || r) * 80, 100);
    camera.updateProjectionMatrix(); controls.target.copy(bounds.center); camera.position.copy(bounds.center).addScaledVector(direction, distance); camera.lookAt(bounds.center);
    controls.minDistance = r * .08; controls.maxDistance = Math.max(r * 80, distance * 5); controls.update(); view = preset; requestRender(); notifyView();
  }
  function currentBounds() {
    if (mode === "measured") return measuredBounds;
    if (mode === "product") { const entry = selectedId ? packageEntries.get(selectedId) : undefined; return entry ? objectBounds(entry.model) : null; }
    return displayBounds;
  }
  function resize() {
    if (disposed) return;
    const rect = canvas.getBoundingClientRect(), w = Math.max(1, Math.round(rect.width)), h = Math.max(1, Math.round(rect.height));
    const changed = w !== width || h !== height; width = w; height = h;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, pixelRatioCap)); renderer.setSize(width, height, false);
    if (activeCamera) { camera.projectionMatrix.copy(calibratedProjection(activeCamera, camera.near, camera.far)); camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert(); }
    else { camera.aspect = width / height; camera.updateProjectionMatrix(); if (changed && lastFit) fit(lastFit, view, true); }
    requestRender();
  }

  function applyMaterialView(entry: PackageEntry) {
    entry.model.traverse(object => {
      if (!(object instanceof THREE.Mesh)) return;
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
        if (!(material instanceof THREE.MeshBasicMaterial || material instanceof THREE.MeshStandardMaterial)) continue;
        material.wireframe = wireframe;
        if (material.userData.front_evidence) { material.map = texturesVisible ? entry.texture : null; material.color.set(texturesVisible && entry.texture ? "#ffffff" : entry.spec.bodyColor || "#edf0e7"); material.needsUpdate = true; }
      }
    });
  }
  function refreshHighlights() {
    for (const [id, entry] of packageEntries) {
      const selected = selectedId === id, match = highlighted.has(id); entry.outline.visible = entry.model.visible && (selected || match);
      if (entry.outline.visible) { entry.model.updateMatrixWorld(true); entry.outline.box.setFromObject(entry.model); entry.outline.box.expandByScalar(Math.max(entry.spec.dimensions.width, entry.spec.dimensions.height) * entry.model.scale.x * .016); (entry.outline.material as THREE.LineBasicMaterial).color.set(selected ? "#c7953c" : "#518c66"); entry.outline.updateMatrixWorld(true); }
    }
    for (const entry of markerEntries) { const selected = selectedId === entry.marker.id || selectedId === entry.marker.packageId, match = highlighted.has(entry.marker.id) || !!entry.marker.packageId && highlighted.has(entry.marker.packageId); (entry.object.material as THREE.MeshBasicMaterial).color.set(selected ? "#ffcf65" : match ? "#d9ed99" : "#79dab5"); entry.object.scale.setScalar(selected ? 1.55 : 1); }
    cameraRoot.traverse(object => { if (object instanceof THREE.LineSegments) (object.material as THREE.LineBasicMaterial).color.set(object.userData.stageSelection?.id === selectedId ? "#ffcd72" : "#60a994"); });
    requestRender();
  }
  function clearShelf() { for (const child of [...shelfRoot.children]) disposeTree(child); }
  function shelfBoard(width: number, y: number, depth: number, thickness: number, material: THREE.MeshStandardMaterial) {
    const board = new THREE.Mesh(new THREE.BoxGeometry(width, thickness, depth), material); board.position.set(0, y - thickness / 2, -.03); board.castShadow = true; board.receiveShadow = true; shelfRoot.add(board);
  }
  function rebuildShelf() {
    clearShelf(); if (!packageEntries.size) { displayBounds = null; return; }
    const entries = [...packageEntries.values()], columns = Math.min(6, Math.max(1, Math.ceil(Math.sqrt(entries.length * 1.3)))), rows = Math.ceil(entries.length / columns);
    const nominalHeight = 1.65;
    const itemWidths = entries.map(entry => entry.spec.dimensions.width / entry.spec.dimensions.height * nominalHeight), itemDepths = entries.map(entry => entry.spec.dimensions.depth / entry.spec.dimensions.height * nominalHeight);
    const cellWidth = Math.max(.8, ...itemWidths) + .42, cellDepth = Math.max(.42, ...itemDepths) + .44, rowHeight = nominalHeight + .5;
    const shelfWidth = columns * cellWidth + .38, shelfHeight = rows * rowHeight;
    const boardMaterial = neutralMaterial("#d7dfcd", "Independent display shelf");
    for (let row = 0; row < rows; row++) shelfBoard(shelfWidth, row * rowHeight, cellDepth, .065, boardMaterial);
    for (const sign of [-1, 1]) { const post = new THREE.Mesh(new THREE.BoxGeometry(.09, shelfHeight - .18, cellDepth), boardMaterial); post.position.set(sign * (shelfWidth / 2 - .045), (shelfHeight - .18) / 2 - .065, -.03); post.castShadow = true; post.receiveShadow = true; shelfRoot.add(post); }
    const back = new THREE.Mesh(new THREE.BoxGeometry(shelfWidth, shelfHeight - .24, .035), neutralMaterial("#e6ecdf", "Neutral display backdrop")); back.position.set(0, (shelfHeight - .24) / 2 - .025, -cellDepth / 2 - .04); back.receiveShadow = true; shelfRoot.add(back);
    entries.forEach((entry, index) => {
      const row = rows - 1 - Math.floor(index / columns), column = index % columns;
      entry.shelfPosition.set((column - (columns - 1) / 2) * cellWidth, row * rowHeight, 0); entry.shelfScale = nominalHeight / entry.spec.dimensions.height;
      entry.model.position.copy(entry.shelfPosition); entry.model.scale.setScalar(entry.shelfScale); entry.model.rotation.set(0, 0, 0); entry.model.visible = true;
    });
    displayBounds = objectBounds(shelfRoot); aimLighting(displayBounds);
  }
  function applyMode(refit = true) {
    leaveCamera();
    if (mode === "product" && (!selectedId || !packageEntries.has(selectedId))) selectedId = packageEntries.keys().next().value ?? null;
    shelfRoot.visible = mode === "shelf"; outlineRoot.visible = mode !== "measured";
    for (const [id, entry] of packageEntries) {
      entry.model.visible = mode === "shelf" || mode === "product" && selectedId === id;
      if (mode === "product") { entry.model.position.set(0, 0, 0); entry.model.scale.setScalar(1); }
      else { entry.model.position.copy(entry.shelfPosition); entry.model.scale.setScalar(entry.shelfScale); }
    }
    renderer.shadowMap.enabled = mode !== "measured"; cameraRoot.visible = showCameras;
    refreshHighlights(); aimLighting(mode === "product" ? currentBounds() : displayBounds);
    if (refit) fit(currentBounds(), mode === "measured" ? "front" : view); else requestRender();
    notifyView();
  }

  async function setPackages(packages: readonly PackageSpec[]): Promise<TextureLoadReport> {
    checkAlive(); must(Array.isArray(packages) && packages.length <= maxPackages, `每个视口最多建立 ${maxPackages} 个展示模型，请在列表中分页。`);
    const ids = new Set<string>(); packages.forEach(spec => { validatePackage(spec); must(!ids.has(spec.id), "展示模型编号重复。"); ids.add(spec.id); });
    const next: PackageEntry[] = [];
    try {
      for (const raw of packages) {
        const spec = plain(raw), model = buildPackageModel(spec); const outline = new THREE.Box3Helper(new THREE.Box3(), 0xc7953c); outline.visible = false; (outline.material as THREE.LineBasicMaterial).depthTest = false; (outline.material as THREE.LineBasicMaterial).toneMapped = false; outline.renderOrder = 5;
        next.push({ spec, model, outline, texture: null, textureState: spec.frontTexture ? "pending" : "none", shelfPosition: new THREE.Vector3(), shelfScale: 1 });
      }
    } catch (error) { for (const entry of next) { disposeTree(entry.model); disposeTree(entry.outline); } throw error; }
    loadingVersion++; const version = loadingVersion; loadController?.abort(); loadController = new AbortController(); const signal = loadController.signal;
    for (const entry of packageEntries.values()) { disposeTree(entry.model); entry.texture?.dispose(); disposeTree(entry.outline); }
    packageEntries = new Map(next.map(entry => [entry.spec.id, entry]));
    for (const entry of next) { packageRoot.add(entry.model); outlineRoot.add(entry.outline); applyMaterialView(entry); }
    if (selectedId && !packageEntries.has(selectedId)) selectedId = null;
    rebuildShelf(); applyMode();
    const sources = new Map<string, Promise<DecodedImage>>();
    const reportData: TextureLoadReport = { loaded: [], failed: [] }; let index = 0;
    const worker = async () => {
      while (index < next.length && !signal.aborted && !disposed && version === loadingVersion) {
        const entry = next[index++], front = entry.spec.frontTexture;
        try {
          let texture: THREE.CanvasTexture;
          if (front) {
            const key = safeSourceURL(front.url); if (!sources.has(key)) sources.set(key, decodeSource(key, signal));
            const source = await sources.get(key)!;
            if (signal.aborted || disposed || version !== loadingVersion) return;
            texture = bakeFrontTexture(source, front, maxTextureSize);
          } else {
            if (!generatedLabelContent(entry.spec)) continue;
            texture = bakeGeneratedLabel(entry.spec, maxTextureSize);
          }
          texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
          entry.texture = texture; entry.textureState = "loaded"; applyMaterialView(entry); reportData.loaded.push(entry.spec.id); requestRender();
        } catch (error) {
          if (signal.aborted || disposed || version !== loadingVersion) return;
          entry.textureState = "failed"; entry.error = error instanceof Error ? error.message : "原图贴面未读取。"; reportData.failed.push({ id: entry.spec.id, message: entry.error });
        }
      }
    };
    pendingTextures = (async () => {
      try { await Promise.all([worker(), worker(), worker()]); return reportData; }
      finally { for (const source of sources.values()) void source.then(image => image.close(), () => {}); if (!disposed && version === loadingVersion) requestRender(); }
    })();
    return pendingTextures;
  }

  function addLensShader(material: THREE.Material) {
    material.onBeforeCompile = shader => {
      shader.uniforms.shelfpilotRadialK1 = lensDistortion;
      shader.vertexShader = "uniform float shelfpilotRadialK1;\n" + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace("#include <project_vertex>", "#include <project_vertex>\nif (mvPosition.z < -0.0000001 && shelfpilotRadialK1 != 0.0) { vec2 slope = mvPosition.xy / -mvPosition.z; float radial = 1.0 + shelfpilotRadialK1 * dot(slope, slope); gl_Position = projectionMatrix * vec4(mvPosition.xy * radial, mvPosition.zw); }");
    };
    material.customProgramCacheKey = () => "shelfpilot-simple-radial-v1";
  }
  function cameraFrustum(c: NormalizedMeasuredCamera, scale: number) {
    const corners = [[0, 0], [c.width, 0], [c.width, c.height], [0, c.height]].map(([u, v]) => {
      const xd = (u - c.cx) / c.fx, yd = (v - c.cy) / c.fy; let x = xd, y = yd;
      for (let iteration = 0; iteration < 8; iteration++) { const factor = 1 + c.radialK1 * (x * x + y * y); if (Math.abs(factor) < .001) break; x = xd / factor; y = yd / factor; }
      return vector(c.center).addScaledVector(vector(c.forward), scale).addScaledVector(vector(c.right), x * scale).addScaledVector(vector(c.down), y * scale);
    });
    const positions: number[] = []; for (let index = 0; index < corners.length; index++) { positions.push(...c.center, ...corners[index].toArray(), ...corners[index].toArray(), ...corners[(index + 1) % corners.length].toArray()); }
    const geometry = new THREE.BufferGeometry(); geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const material = new THREE.LineBasicMaterial({ color: "#60a994", transparent: true, opacity: .78, toneMapped: false }); addLensShader(material);
    const object = new THREE.LineSegments(geometry, material); object.userData.stageSelection = { id: c.id, kind: "camera" }; object.name = c.label || c.id; return object;
  }
  function setMeasuredScene(data: MeasuredScene | null) {
    checkAlive();
    if (data) {
      must(Array.isArray(data.points) && data.points.length <= 1000000 && Array.isArray(data.cameras), "实测点云数据或数量不符合当前视口范围。");
      must(data.points.every(point => Array.isArray(point) && point.length === 6 && finite3(point.slice(0, 3)) && point.slice(3).every(color => Number.isFinite(color) && color >= 0 && color <= 255)), "实测点云包含无效坐标或颜色，未建立替代场景。");
      must(!data.coordinateFrame || data.coordinateFrame.unit === "arbitrary" && data.coordinateFrame.metric_scale_known === false, "本视口只接收明确标记相对尺度的实测点云。");
      must((data.markers || []).every(marker => typeof marker.id === "string" && finite3(marker.position)), "实测位置标记无效。");
    }
    const cameras = data ? data.cameras.map(normalizeMeasuredCamera) : [];
    must(new Set(cameras.map(c => c.id)).size === cameras.length, "实测相机编号重复。");
    for (const root of [measuredRoot, markerRoot, cameraRoot]) for (const child of [...root.children]) disposeTree(child);
    normalizedCameras = cameras; markerEntries = []; measuredBounds = null; allMeasuredBounds = null;
    if (!data) { if (mode === "measured") applyMode(); return; }
    measured.userData = { source: data.provenance ?? null, coordinates_preserved: true, unit: "arbitrary", metric_scale_known: false };
    const geometry = new THREE.BufferGeometry(), positions = new Float32Array(data.points.length * 3), colors = new Float32Array(data.points.length * 3);
    const color = new THREE.Color();
    data.points.forEach((point, index) => { positions.set(point.slice(0, 3), index * 3); color.setRGB(point[3] / 255, point[4] / 255, point[5] / 255, THREE.SRGBColorSpace); colors.set([color.r, color.g, color.b], index * 3); });
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3)); geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3)); geometry.computeBoundingSphere();
    const pointMaterial = new THREE.PointsMaterial({ size: 2.1, sizeAttenuation: false, vertexColors: true, toneMapped: false }); addLensShader(pointMaterial);
    const points = new THREE.Points(geometry, pointMaterial); points.name = "Original measured samples, including outliers"; measuredRoot.add(points);
    measuredBounds = boundsFromPoints(data.points, .01); allMeasuredBounds = boundsFromPoints([...data.points, ...cameras.map(c => c.center)], 0);
    const radius = measuredBounds?.radius || allMeasuredBounds?.radius || 1;
    for (const camera of cameras) cameraRoot.add(cameraFrustum(camera, radius * .085));
    for (const marker of data.markers || []) {
      const material = new THREE.MeshBasicMaterial({ color: "#79dab5", toneMapped: false, depthTest: false }); addLensShader(material);
      const object = new THREE.Mesh(new THREE.SphereGeometry(radius * .009, 12, 8), material); object.position.copy(vector(marker.position)); object.renderOrder = 4; object.name = marker.label;
      object.userData = { stageSelection: { id: marker.id, kind: "marker", packageId: marker.packageId }, provenance: marker.provenance ?? null, marker_only: true, exact_package_dimensions_unknown: true }; markerRoot.add(object); markerEntries.push({ marker, object });
    }
    raycaster.params.Line = { threshold: radius * .015 }; refreshHighlights(); if (mode === "measured") applyMode();
  }
  function viewCamera(id: string) {
    checkAlive(); const c = normalizedCameras.find(camera => camera.id === id); if (!c || mode !== "measured") return false;
    if (c.camera_model && !["PINHOLE", "SIMPLE_PINHOLE", "SIMPLE_RADIAL"].includes(c.camera_model)) { options.onError?.("该相机的畸变模型尚未接入，暂不能将此视图显示为原图校准机位。"); return false; }
    activeCamera = c; selectedId = c.id; lensDistortion.value = c.radialK1;
    const radius = measuredBounds?.radius || 1; cameraPoseMatrix(c).decompose(camera.position, camera.quaternion, camera.scale);
    camera.up.copy(vector(c.down).negate()); camera.near = Math.max(.00001, radius / 5000); camera.far = Math.max((allMeasuredBounds?.radius || radius) * 100, 1000);
    camera.aspect = c.width / c.height; camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(c.height / (2 * c.fy))); camera.updateMatrixWorld(true);
    camera.projectionMatrix.copy(calibratedProjection(c, camera.near, camera.far)); camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
    controls.target.copy(vector(c.center).addScaledVector(vector(c.forward), radius * 1.5)); cameraRoot.visible = false;
    refreshHighlights(); requestRender(); notifyView(); return true;
  }
  function focusSelection(id: string) {
    if (mode === "measured") {
      const marker = markerEntries.find(entry => entry.marker.id === id || entry.marker.packageId === id);
      if (marker) { const r = (measuredBounds?.radius || 1) * .23, center = vector(marker.marker.position), box = new THREE.Box3().setFromCenterAndSize(center, new THREE.Vector3(r, r, r)); fit({ box, center, radius: r }, "front"); }
    } else { const entry = packageEntries.get(id); if (entry) fit(objectBounds(entry.model), view); }
  }
  function select(id: string | null, settings: { focus?: boolean } = {}) {
    checkAlive(); selectedId = id;
    if (mode === "product") applyMode(settings.focus !== false); else { refreshHighlights(); if (settings.focus && id) focusSelection(id); }
    notifyView();
  }
  function raySelection(event: PointerEvent) {
    const rect = canvas.getBoundingClientRect(), area = viewport(), x = event.clientX - rect.left, y = event.clientY - rect.top;
    if (x < area.x || x > area.x + area.width || y < area.y || y > area.y + area.height) return;
    let nx = (x - area.x) / area.width * 2 - 1, ny = 1 - (y - area.y) / area.height * 2;
    if (activeCamera && activeCamera.radialK1 !== 0) {
      const c = activeCamera, u = (x - area.x) / area.width * c.width, v = (y - area.y) / area.height * c.height, xd = (u - c.cx) / c.fx, yd = (v - c.cy) / c.fy; let xx = xd, yy = yd;
      for (let iteration = 0; iteration < 8; iteration++) { const factor = 1 + c.radialK1 * (xx * xx + yy * yy); if (Math.abs(factor) < .001) break; xx = xd / factor; yy = yd / factor; }
      nx = 2 * (c.fx * xx + c.cx) / c.width - 1; ny = 1 - 2 * (c.fy * yy + c.cy) / c.height;
    }
    camera.updateMatrixWorld(true); raycaster.setFromCamera(new THREE.Vector2(nx, ny), camera);
    const targets = mode === "measured" ? [...markerRoot.children, ...(cameraRoot.visible ? cameraRoot.children : [])] : [...packageEntries.values()].filter(entry => entry.model.visible).map(entry => entry.model);
    const hit = raycaster.intersectObjects(targets, true).find(intersection => intersection.object.visible);
    let selection: StageSelection | null = null;
    if (hit) { let object: THREE.Object3D | null = hit.object; while (object && !selection) { if (object.userData.stageSelection) selection = object.userData.stageSelection as StageSelection; object = object.parent; } }
    if (selection?.kind === "camera") { selectedId = selection.id; refreshHighlights(); }
    else select(selection?.packageId || selection?.id || null, { focus: false });
    options.onSelect?.(selection?.packageId || selection?.id || null, selection);
  }
  const onPointerDown = (event: PointerEvent) => {
    if (event.isPrimary) pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: event.button !== 0 };
    else { if (pointer) pointer.moved = true; leaveCamera(); } // A second touch starts a gesture, not a pick.
  };
  const onPointerMove = (event: PointerEvent) => {
    if (pointer?.id !== event.pointerId) return;
    const distance = Math.hypot(event.clientX - pointer.x, event.clientY - pointer.y);
    if (distance > 5) pointer.moved = true;
    if (distance > 0) leaveCamera(); // Drop calibrated projection before OrbitControls rotates or pans.
  };
  const onPointerUp = (event: PointerEvent) => { if (pointer?.id === event.pointerId && !pointer.moved) raySelection(event); pointer = null; };
  const onPointerCancel = () => { pointer = null; };
  const onWheel = () => leaveCamera();
  const onLost = (event: Event) => { event.preventDefault(); contextLost = true; controls.enabled = false; if (raf) cancelAnimationFrame(raf); raf = 0; options.onContextChange?.("lost"); notifyView(); };
  const onRestored = () => { if (disposed) return; contextLost = false; controls.enabled = true; renderer.shadowMap.needsUpdate = true; for (const entry of packageEntries.values()) if (entry.texture) entry.texture.needsUpdate = true; options.onContextChange?.("restored"); resize(); notifyView(); };
  const onVisibility = () => { if (document.visibilityState === "visible") resize(); };
  controls.addEventListener("change", requestRender);
  canvas.addEventListener("pointerdown", onPointerDown, true); canvas.addEventListener("pointermove", onPointerMove, true); canvas.addEventListener("pointerup", onPointerUp); canvas.addEventListener("pointercancel", onPointerCancel); canvas.addEventListener("wheel", onWheel, { capture: true, passive: true });
  canvas.addEventListener("webglcontextlost", onLost); canvas.addEventListener("webglcontextrestored", onRestored);
  window.addEventListener("resize", resize); document.addEventListener("visibilitychange", onVisibility);
  const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null; observer?.observe(canvas);
  resize();

  return {
    setPackages,
    setMode(nextMode, packageId) { checkAlive(); must(["shelf", "product", "measured"].includes(nextMode), "未知的三维展示模式。"); mode = nextMode; if (packageId !== undefined) selectedId = packageId; applyMode(); },
    select,
    setHighlights(ids) { checkAlive(); highlighted.clear(); ids.forEach(id => highlighted.add(id)); refreshHighlights(); },
    setMeasuredScene,
    setPointCloud: setMeasuredScene,
    viewCamera,
    setCamerasVisible(visible) { checkAlive(); showCameras = visible; cameraRoot.visible = visible && !activeCamera; requestRender(); },
    setTexturesVisible(visible) { checkAlive(); texturesVisible = visible; packageEntries.forEach(applyMaterialView); requestRender(); },
    setWireframe(visible) { checkAlive(); wireframe = visible; packageEntries.forEach(applyMaterialView); requestRender(); },
    setView(nextView) { checkAlive(); must(["isometric", "front", "top"].includes(nextView), "未知视图方向。"); view = nextView; fit(currentBounds(), nextView); },
    reset() { checkAlive(); view = mode === "measured" ? "front" : "isometric"; fit(currentBounds(), view); },
    fitAll() { checkAlive(); fit(mode === "measured" ? allMeasuredBounds : currentBounds(), view); },
    zoom(factor) { checkAlive(); must(Number.isFinite(factor) && factor > 0, "缩放因子无效。"); leaveCamera(); const delta = camera.position.clone().sub(controls.target), distance = clamp(delta.length() * factor, controls.minDistance, controls.maxDistance); camera.position.copy(controls.target).addScaledVector(delta.normalize(), distance); controls.update(); requestRender(); },
    async exportSelectedGLB(): Promise<GLBExportResult> {
      checkAlive(); must(mode !== "measured", "实测点云不是包装模型，请在单品或展示货架模式导出。");
      const id = selectedId, entry = id ? packageEntries.get(id) : undefined; must(entry, "请先选择一个展示包装模型。");
      await pendingTextures; checkAlive(); must(packageEntries.get(entry.spec.id) === entry, "展示分页已变化，请重新选择后导出。");
      must(!(entry.spec.frontTexture || generatedLabelContent(entry.spec)) || entry.textureState === "loaded", entry.error || "正面贴图或示意标签尚未成功生成，请完成加载后导出。");
      const object = makeExportObject(entry.model, entry.spec, entry.texture || undefined);
      try {
        const exporter = new GLTFExporter(); const buffer = await exporter.parseAsync(object, { binary: true, onlyVisible: true, maxTextureSize, includeCustomExtensions: false });
        must(buffer instanceof ArrayBuffer, "GLB 导出未生成二进制文件。");
        const provenance = plain(object.userData.shelfpilot) as Provenance;
        return { blob: new Blob([buffer], { type: "model/gltf-binary" }), filename: `shelfpilot-display-${entry.spec.id.replace(/[^a-zA-Z0-9_-]/g, "-").slice(0, 80) || "package"}.glb`, provenance };
      } finally { disposeTree(object); }
    },
    getState: state,
    requestRender,
    dispose() {
      if (disposed) return; disposed = true; loadingVersion++; loadController?.abort(); if (raf) cancelAnimationFrame(raf); raf = 0;
      observer?.disconnect(); window.removeEventListener("resize", resize); document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("pointerdown", onPointerDown, true); canvas.removeEventListener("pointermove", onPointerMove, true); canvas.removeEventListener("pointerup", onPointerUp); canvas.removeEventListener("pointercancel", onPointerCancel); canvas.removeEventListener("wheel", onWheel, true);
      canvas.removeEventListener("webglcontextlost", onLost); canvas.removeEventListener("webglcontextrestored", onRestored); controls.removeEventListener("change", requestRender); controls.dispose();
      for (const entry of packageEntries.values()) entry.texture?.dispose(); packageEntries.clear();
      disposeTree(display); disposeTree(measured); keyLight.shadow.map?.dispose(); renderer.renderLists.dispose(); renderer.dispose(); canvas.style.touchAction = previousTouchAction;
      // Do not force context loss here: React StrictMode may immediately reuse this same canvas.
    },
  };
}
