
import { withBasePath } from '../../lib/app-path.mjs';
import type { MeasuredScene, PackageSpec, Vec3 } from '../three/types';

export type Store = { id: string; name: string; address?: string; workspace_id: string; is_default?: boolean; created_at?: string };
export type StoreList = { stores: Store[]; current_store_id?: string; default_store_id?: string; limits?: { stores: number } };
export type ShelfLocation = {zone:'left'|'right'|'back'|'island'|'unknown';order:number|null;label:string;evidence:string};
export type CabinetPose = {x:number;z:number;rotation:number};
export type ShelfCoverage={kind:'full'|'partial'|'unknown';range:number[]|null;total_levels:number|null;evidence:string};
export type ShelfAppearance={height_class:'unknown'|'counter'|'half'|'full';material:'unknown'|'white_laminate'|'wood'|'metal'|'glass_door'|'mixed';depth_class:'unknown'|'shallow'|'standard'|'deep';body_color:string|null;bays:number;has_kickplate:boolean|null;has_header_light:boolean|null;evidence:string};
export type ShelfSegment={asset_id:string;crop:number[];boards:number[];range:number[];evidence:string};
export type ShelfGroup = {id:string;name:string;asset_id:string;crop:number[];boards:number[];details:string[];overrides:Array<{observation_id:string;bbox:number[];kind:string;pose:string}>;links:Array<{source:string;target:string}>;views?:Array<{asset_id:string;source_crop:number[];target_crop:number[]}>;location?:ShelfLocation;manual_placement?:CabinetPose;coverage?:ShelfCoverage;appearance?:ShelfAppearance;segments?:ShelfSegment[];geometry_manual?:boolean};
export type LayoutReview = {
  strategy?:string;status?:'reviewed'|'degraded';summary?:string;
  calls?:{attempted:number;succeeded:number;max:number};
  candidates?:Array<{id:string;role:string;status:string;shelf_count?:number;issues:string[]}>;
  selected_candidate?:string;selected_reason?:string;issues?:string[];
  judge?:{status:string;reason:string};outcome?:'applied'|'retained';
  coverage?:{previous:number;next:number;lost:number;gained:number};completed_at?:string;
};
export type ShelfLayout = {schema_version:'shelf-layout/1';shelves:ShelfGroup[];photo_roles?:Array<{asset_id:string;role:string;reason:string}>;uncertainty?:string;provenance?:{method:string;model?:string;generated_at?:string;review?:LayoutReview}};
export type PharmacyTemplate = {schema_version:'pharmacy-template/1';name?:string;width:number;depth:number;height:number;origin:Vec3;entrance:Vec3;positioned_count:number;pending_count:number;manual_count?:number;pending_shelves:Array<{id:string;reason:string}>;staging:null|{min:Vec3;max:Vec3};metric_scale_known:false;method:'photo_relative_template';unit:'display'};
export type SpatialPlacement = {
  id: string; observation_id: string; asset_id?: string; model_id?: string; name?: string | null;
  position_status: string; position_3d: Vec3 | null; map_id?: string | null;
  shelf_id?:string;shelf_name?:string;shelf_level?:number;canonical_id?:string;alias?:boolean;linked_observation_ids?:string[];
  spatial_evidence?: { method?: string; reason?: string; support_points?: number; support_views?: number; uncertainty_radius?: number; unit?: string; metric_scale_known?: boolean; candidate_points?: number };
  dimensions?: {width: number; height: number; depth: number};
  surface?: { center: Vec3; normal: Vec3; corners: Vec3[]; kind?: string } | null;
  spec?: PackageSpec | null;
  photo_display?:boolean;photo_position?:Vec3|null;photo_dimensions?:{width:number;height:number};
  rotation_y?:number;layout_status?:'positioned'|'pending';
};
export type SpatialData = {
  layout?:ShelfLayout;
  status: string; approximate?: boolean; map_id?: string | null; geometry_kind?: string; metric_scale_known?: boolean;
  scene?: (MeasuredScene & {pharmacy?:PharmacyTemplate;shelves?: Array<{id:string;name?:string;asset_id:string;image_url:string;origin:Vec3;width:number;height:number;depth:number;levels:number;boards?:number[];reviewed?:boolean;crop?:number[];photo_display?:boolean;coverage?:ShelfCoverage;coverage_label?:string;appearance?:Partial<ShelfAppearance>;missing_ranges?:number[][];photo_panels?:Array<{asset_id:string;image_url:string;source_crop:number[];target_crop:number[]}>;detail_asset_ids?:string[];location?:ShelfLocation;rotation_y?:number;scale_factor?:number;layout_status?:'positioned'|'pending';layout_reason?:string}>}) | null;
  placements: SpatialPlacement[]; quality?: Record<string, unknown> | null;
  summary?: { located: number; estimated?: number; unresolved: number }; recognition_configured?: boolean;
  provenance?: Record<string, unknown>;
};

/** Prefer measured spatial when a COLMAP map is imported; otherwise photo-plane approximation. */
export function spatialPathForScan(scanId: string, hasImportedMap: boolean): string {
  return hasImportedMap ? `/api/scans/${scanId}/spatial` : `/api/scans/${scanId}/spatial?mode=approximate`;
}

export function isMeasuredSpatial(data: SpatialData | null | undefined): boolean {
  return !!data && (data.geometry_kind === 'sparse_multiview' || (!!data.scene?.points?.length && !data.approximate && !data.scene?.shelves?.length));
}

const SPATIAL_REASONS: Record<string, string> = {
  photo_group_unconfirmed:'此照片尚未归入货架，保留原图待整理。',
  detail_position_unconfirmed:'请把特写关联到主图货位，或在主图标注位置。',
  shelf_support_unconfirmed:'包装下方的层板位置尚未确认。',
  observation_rejected: '该观察已驳回，不参与三维定位。',
  photo_not_registered: '这张照片未进入当前重建地图，无法用多视图定位。',
  photo_not_available: '对应照片不可用，无法估计位置。',
  unsupported_camera_model: '相机模型不受支持，无法投影定位。',
  invalid_bbox: '包装框坐标无效。',
  placement_changed_requires_rescan: '货位已登记变更，需复扫后再定位。',
  insufficient_multiview_points: '框内多视图特征点不足，无法可靠定位。',
  ambiguous_depth_layers: '框内前后深度层混淆，已放弃定位以免错位。',
  insufficient_depth_inliers: '深度一致的支撑点不足。',
  insufficient_region_coverage: '支撑点未充分覆盖包装框。',
  diffuse_depth_support: '支撑点深度过于分散。',
  nonplanar_or_degenerate_support: '支撑点无法拟合可用正面片。',
  missing_coordinate_frame: '地图缺少坐标系。',
  missing_feature_tracks: '地图缺少多视图轨迹，无法关联药品位置。',
  single_package_region_required: '需要单个包装区域才能估计货位；价签或多盒陈列不会自动定位。',
};

export function spatialReasonText(reason: string | null | undefined): string | null {
  if (!reason) return null;
  return SPATIAL_REASONS[reason] || reason;
}

export function scopedURL(path: string, storeId: string): string {
  const url = new URL(path, window.location.origin);
  if (url.origin !== window.location.origin || !['http:', 'https:'].includes(url.protocol)) throw new Error('服务器返回了无效的资源地址。');
  if (storeId) url.searchParams.set('store', storeId);
  return withBasePath(url.pathname) + url.search;
}
