<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => (route.meta.title as string) || '功能页')
const desc = computed(
  () => (route.meta.desc as string) || '该模块为港弃宝后台占位页，可按业务继续扩展。',
)
</script>

<template>
  <div class="placeholder-page card">
    <div class="placeholder-icon">◎</div>
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
    <p class="hint">当前为演示骨架，数据接口接入后可替换为真实列表与表单。</p>
  </div>
</template>
