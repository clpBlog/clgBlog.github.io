<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter, RouterView } from 'vue-router'
import { menuItems, type MenuItem } from '../router'

type TabItem = {
  path: string
  title: string
  affix?: boolean
}

const route = useRoute()
const router = useRouter()

const isMobile = ref(
  typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches,
)
/** 桌面默认展开；手机默认收起抽屉 */
const collapsed = ref(isMobile.value)
const openKeys = ref<string[]>(['twin', 'recycle'])
const tabs = ref<TabItem[]>([{ path: '/home', title: '首页', affix: true }])

const activePath = computed(() => route.path)
const pageTitle = computed(() => (route.meta.title as string) || '首页')
const isFullscreen = computed(() => Boolean(route.meta.fullscreen))
/** 手机端：侧栏作为抽屉，collapsed=true 表示收起 */
const mobileDrawerOpen = computed(() => isMobile.value && !collapsed.value)

const greeting = computed(() => {
  const h = new Date().getHours()
  if (h < 6) return '夜深了'
  if (h < 12) return '早上好'
  if (h < 14) return '中午好'
  if (h < 18) return '下午好'
  return '晚上好'
})

function syncViewport() {
  const mobile = window.matchMedia('(max-width: 768px)').matches
  if (mobile !== isMobile.value) {
    isMobile.value = mobile
    // 切到手机默认收起；切回桌面恢复展开
    collapsed.value = mobile
  }
}

function toggleSider() {
  collapsed.value = !collapsed.value
}

function closeMobileSider() {
  if (isMobile.value) collapsed.value = true
}

function toggleMenu(key: string) {
  if (openKeys.value.includes(key)) {
    openKeys.value = openKeys.value.filter((k) => k !== key)
  } else {
    openKeys.value = [...openKeys.value, key]
  }
}

function navigate(item: MenuItem) {
  if (!item.path) return
  router.push(item.path)
  closeMobileSider()
}

function pathMatches(itemPath: string | undefined, current: string) {
  if (!itemPath) return false
  if (itemPath === '/recycle/models') {
    return current === itemPath || /^\/recycle\/models\/[0-9a-f-]{36}$/i.test(current)
  }
  return current === itemPath || current.startsWith(`${itemPath}/`)
}

function isActive(item: MenuItem): boolean {
  if (item.path) return pathMatches(item.path, activePath.value)
  return Boolean(item.children?.some((c) => pathMatches(c.path, activePath.value)))
}

function ensureTab(path: string, title: string, affix?: boolean) {
  if (!tabs.value.find((t) => t.path === path)) {
    tabs.value.push({ path, title, affix })
  }
}

function closeTab(path: string, e?: Event) {
  e?.stopPropagation()
  const idx = tabs.value.findIndex((t) => t.path === path)
  if (idx < 0 || tabs.value[idx].affix) return
  tabs.value.splice(idx, 1)
  if (activePath.value === path) {
    const next = tabs.value[idx - 1] || tabs.value[0]
    router.push(next.path)
  }
}

watch(
  () => route.fullPath,
  () => {
    const title = (route.meta.title as string) || '未命名'
    ensureTab(route.path, title, Boolean(route.meta.affix))
    for (const item of menuItems) {
      if (item.children?.some((c) => pathMatches(c.path, route.path)) && !openKeys.value.includes(item.key)) {
        openKeys.value = [...openKeys.value, item.key]
      }
    }
    closeMobileSider()
  },
  { immediate: true },
)

onMounted(() => {
  document.documentElement.classList.add('admin-mode')
  syncViewport()
  window.addEventListener('resize', syncViewport)
})

onUnmounted(() => {
  document.documentElement.classList.remove('admin-mode')
  window.removeEventListener('resize', syncViewport)
})
</script>

<template>
  <div
    class="admin-layout"
    :class="{ collapsed, fullscreen: isFullscreen, 'is-mobile': isMobile }"
  >
    <button
      v-if="mobileDrawerOpen"
      type="button"
      class="sider-mask"
      aria-label="关闭菜单"
      @click="closeMobileSider"
    />

    <aside class="admin-sider">
      <div class="brand-row">
        <router-link to="/home" class="brand" @click="closeMobileSider">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <defs>
                <linearGradient id="gqb" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#646cff" />
                  <stop offset="100%" stop-color="#8b5cf6" />
                </linearGradient>
              </defs>
              <path
                fill="url(#gqb)"
                d="M16 2 L28 9.5 V22.5 L16 30 L4 22.5 V9.5 Z"
                opacity="0.92"
              />
              <path fill="#fff" d="M11 18.2 L14.2 21.4 L21.5 12.8 L19.8 11.2 L14.1 18.1 L12.6 16.6 Z" />
            </svg>
          </span>
          <span v-show="!collapsed || isMobile" class="brand-text">港弃宝管理系统</span>
        </router-link>
        <button
          v-if="isMobile"
          type="button"
          class="sider-close"
          aria-label="关闭侧栏"
          @click="closeMobileSider"
        >
          ×
        </button>
      </div>

      <nav class="menu">
        <template v-for="item in menuItems" :key="item.key">
          <button
            v-if="!item.children"
            type="button"
            class="menu-item"
            :class="{ active: isActive(item) }"
            @click="navigate(item)"
          >
            <span class="menu-ico" :data-icon="item.icon" />
            <span v-show="!collapsed || isMobile" class="menu-label">{{ item.label }}</span>
          </button>

          <div v-else class="menu-group" :class="{ open: openKeys.includes(item.key), active: isActive(item) }">
            <button type="button" class="menu-item parent" @click="toggleMenu(item.key)">
              <span class="menu-ico" :data-icon="item.icon" />
              <span v-show="!collapsed || isMobile" class="menu-label">{{ item.label }}</span>
              <span v-show="!collapsed || isMobile" class="chevron" />
            </button>
            <div v-show="(!collapsed || isMobile) && openKeys.includes(item.key)" class="submenu">
              <button
                v-for="child in item.children"
                :key="child.key"
                type="button"
                class="menu-item child"
                :class="{ active: activePath === child.path }"
                @click="navigate(child)"
              >
                <span class="dot" />
                <span class="menu-label">{{ child.label }}</span>
              </button>
            </div>
          </div>
        </template>
      </nav>
    </aside>

    <div class="admin-main">
      <header class="admin-header">
        <div class="header-left">
          <button
            type="button"
            class="icon-btn"
            :title="collapsed ? '展开菜单' : '折叠菜单'"
            @click="toggleSider"
          >
            <span class="ico-collapse" />
          </button>
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <span>港弃宝</span>
            <span class="sep">/</span>
            <span class="current">{{ pageTitle }}</span>
          </nav>
        </div>
        <div class="header-right">
          <span class="greet">{{ greeting }}，管理员</span>
          <button type="button" class="user-chip">
            <span class="avatar">港</span>
            <span>GangQiBao</span>
          </button>
        </div>
      </header>

      <div class="tab-bar">
        <button
          v-for="tab in tabs"
          :key="tab.path"
          type="button"
          class="tab"
          :class="{ active: activePath === tab.path }"
          @click="router.push(tab.path)"
          @click.middle="closeTab(tab.path)"
        >
          <i class="tab-dot" />
          <span>{{ tab.title }}</span>
          <span
            v-if="!tab.affix"
            class="tab-close"
            @click="closeTab(tab.path, $event)"
          >×</span>
        </button>
      </div>

      <main class="admin-content" :class="{ 'no-pad': isFullscreen }">
        <RouterView v-slot="{ Component }">
          <KeepAlive :include="['Home']">
            <component :is="Component" />
          </KeepAlive>
        </RouterView>
      </main>
    </div>
  </div>
</template>
