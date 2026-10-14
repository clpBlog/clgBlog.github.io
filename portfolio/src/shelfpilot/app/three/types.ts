/**
 * Rendering contracts. Display packaging and measured geometry use separate scenes.
 * Every display dimension is nominal: no physical measurement or SKU verification is implied.
 */
export type Vec2 = readonly [number, number];
export type Vec3 = readonly [number, number, number];
export type QuadPixels = readonly [Vec2, Vec2, Vec2, Vec2]; // TL, TR, BR, BL in the original image.
export type BBoxPixels = readonly [number, number, number, number]; // left, top, right, bottom.
export type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };
export type Provenance = Record<string, JsonValue>;
export type PackageKind = "box" | "bottle" | "tube" | "pouch";
export type StageMode = "shelf" | "product" | "measured";
export type StageView = "isometric" | "front" | "top";

export interface DisplayDimensions {
  width: number;
  height: number;
  depth: number;
  unit: "display";
}

export interface FrontTextureSpec {
  /** Same-origin source image or same-origin prepared crop. No third-party image fetches. */
  url: string;
  imageId?: string;
  imageWidth?: number;
  imageHeight?: number;
  bboxPixels?: BBoxPixels;
  /** An optional observed front-face quadrilateral. Original occlusions are preserved. */
  quadPixels?: QuadPixels;
  provenance?: Provenance;
}

export interface PackageSpec {
  id: string;
  name: string;
  kind: PackageKind;
  dimensions: DisplayDimensions;
  frontTexture?: FrontTextureSpec | null;
  bodyColor?: string;
  capColor?: string;
  /** Source and extra contain evidence or UI metadata; neither changes geometry placement. */
  source?: Provenance;
  extra?: Provenance;
  provenance?: Provenance;
}

export type MeasuredPoint = readonly [number, number, number, number, number, number];
export interface MeasuredCamera {
  id: string;
  label?: string;
  asset_id?: string;
  width: number;
  height: number;
  fx: number;
  fy: number;
  cx: number;
  cy: number;
  /** Either supply these measured camera axes, or COLMAP world-to-camera R/t below. */
  center?: Vec3;
  right?: Vec3;
  down?: Vec3;
  forward?: Vec3;
  R?: readonly [Vec3, Vec3, Vec3];
  t?: Vec3;
  camera_model?: string;
  camera_params?: readonly number[];
  radial_k1?: number;
  imageUrl?: string;
  provenance?: Provenance;
}

export interface MeasuredMarker {
  id: string;
  label: string;
  position: Vec3;
  packageId?: string;
  /** A position association is evidence, not package dimensions or a measured surface. */
  provenance?: Provenance;
}

export interface MeasuredScene {
  id?: string;
  points: readonly MeasuredPoint[];
  cameras: readonly MeasuredCamera[];
  markers?: readonly MeasuredMarker[];
  coordinateFrame?: { id?: string; unit: "arbitrary"; metric_scale_known: false };
  provenance?: Provenance;
}

export interface StageSelection { id: string; kind: "package" | "marker" | "camera"; packageId?: string }
export interface TextureLoadReport { loaded: string[]; failed: Array<{ id: string; message: string }> }
export interface StageState {
  mode: StageMode;
  selectedId: string | null;
  cameraId: string | null;
  view: StageView;
  context: "ready" | "lost" | "disposed";
}
export interface StageOptions {
  background?: string;
  pixelRatioCap?: number;
  /** Bound unique textured packages per renderer; metadata pagination lives in the UI. */
  maxPackages?: number;
  maxTextureSize?: number;
  onSelect?: (id: string | null, selection: StageSelection | null) => void;
  onError?: (message: string) => void;
  onContextChange?: (state: "lost" | "restored") => void;
  onViewChange?: (state: StageState) => void;
}
export interface GLBExportResult { blob: Blob; filename: string; provenance: Provenance }

export interface ThreeStage {
  setPackages(packages: readonly PackageSpec[]): Promise<TextureLoadReport>;
  setMode(mode: StageMode, packageId?: string): void;
  select(id: string | null, options?: { focus?: boolean }): void;
  setHighlights(ids: readonly string[]): void;
  setMeasuredScene(scene: MeasuredScene | null): void;
  /** Alias accepting the same explicit data object, for point-cloud adapters. */
  setPointCloud(scene: MeasuredScene | null): void;
  viewCamera(id: string): boolean;
  setCamerasVisible(visible: boolean): void;
  setTexturesVisible(visible: boolean): void;
  setWireframe(visible: boolean): void;
  setView(view: StageView): void;
  reset(): void;
  fitAll(): void;
  zoom(factor: number): void;
  exportSelectedGLB(): Promise<GLBExportResult>;
  getState(): StageState;
  requestRender(): void;
  dispose(): void;
}
