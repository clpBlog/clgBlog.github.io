import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

export type MenuItem = {
  key: string
  label: string
  icon: string
  path?: string
  children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    key: 'home',
    label: '首页',
    icon: 'home',
    path: '/home',
  },
  {
    key: 'twin',
    label: '数字孪生',
    icon: 'globe',
    children: [
      {
        key: 'kowloon',
        label: '九龙城3D回收站',
        icon: 'map',
        path: '/twin/kowloon',
      },
    ],
  },
  {
    key: 'recycle',
    label: '回收管理',
    icon: 'box',
    children: [
      {
        key: 'stations',
        label: '回收站列表',
        icon: 'pin',
        path: '/recycle/stations',
      },
      {
        key: 'clearance',
        label: '清运订单',
        icon: 'list',
        path: '/recycle/clearance',
      },
      {
        key: 'orders',
        label: '回收工单',
        icon: 'list',
        path: '/recycle/orders',
      },
      { key: 'cargo-preflight', label: '拍照验货预检', icon: 'box', path: '/recycle/cargo-preflight' },
      { key: 'cargo-models', label: '三维模型库', icon: 'box', path: '/recycle/models' },
      { key: 'cargo-model-play', label: '装载动画回放', icon: 'box', path: '/recycle/models/play' },
    ],
  },
  {
    key: 'analytics',
    label: '数据中心',
    icon: 'chart',
    path: '/analytics',
  },
  {
    key: 'system',
    label: '系统管理',
    icon: 'settings',
    path: '/system',
  },
  {
    key: 'about',
    label: '关于',
    icon: 'info',
    path: '/about',
  },
]

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layouts/AdminLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: { title: '首页', affix: true },
      },
      {
        path: 'twin/kowloon',
        name: 'kowloon-twin',
        component: () => import('../views/KowloonTwin.vue'),
        meta: { title: '九龙城3D回收站', fullscreen: true },
      },
      {
        path: 'recycle/stations',
        name: 'stations',
        component: () => import('../views/Stations.vue'),
        meta: { title: '回收站列表' },
      },
      {
        path: 'recycle/clearance',
        name: 'clearance-orders',
        component: () => import('../views/ClearanceOrders.vue'),
        meta: { title: '清运订单' },
      },
      {
        path: 'recycle/orders',
        name: 'orders',
        component: () => import('../views/Placeholder.vue'),
        meta: {
          title: '回收工单',
          desc: '查看预约上门、大件清运与异常处理工单',
        },
      },
      {
        path: 'recycle/cargo-preflight', name: 'cargo-preflight',
        component: () => import('../views/CargoPreflight.vue'), meta: { title: '拍照验货预检' },
      },
      {
        path: 'recycle/models/play', name: 'cargo-model-play',
        component: () => import('../views/ModelPlayback.vue'), meta: { title: '装载动画回放' },
      },
      {
        path: 'recycle/models', name: 'cargo-models',
        component: () => import('../views/ModelGallery.vue'), meta: { title: '三维模型库' },
      },
      {
        path: 'recycle/models/:id', name: 'cargo-model-detail',
        component: () => import('../views/ModelDetail.vue'), meta: { title: '三维模型详情' },
      },
      {
        path: 'analytics',
        name: 'analytics',
        component: () => import('../views/Placeholder.vue'),
        meta: {
          title: '数据中心',
          desc: '回收量、积分发放、站点利用率等运营指标',
        },
      },
      {
        path: 'system',
        name: 'system',
        component: () => import('../views/Placeholder.vue'),
        meta: {
          title: '系统管理',
          desc: '账号权限、字典配置与系统参数',
        },
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: { title: '关于' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  const title = (to.meta.title as string) || '港弃宝'
  document.title = `${title} · 港弃宝管理系统`
})

export default router
