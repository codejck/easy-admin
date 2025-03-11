<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <Transition mode="out-in" :name="route.meta?.transition || pageAnimateType || ''">
        <keep-alive :include="cachesTabs" v-if="!isRefresh">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </Transition>
    </router-view>
    <back-top />
  </section>
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'
import { useTabsStore } from '@/store/modules/tabs'
import { mapState, mapWritableState } from 'pinia'

export default {
  name: "AppMain",
  computed: {
    ...mapWritableState(useAppStore, ["isRefresh"]),
    ...mapState(useSettingsStore, ["pageAnimateType"]),
    ...mapState(useTabsStore, ["cachesTabs"]),
  },
  watch: {
    isRefresh(newVal) {
      if (newVal) {
        // 延迟刷新，避免刷新时页面闪烁
        let t = 0
        setTimeout(() => {
          this.$nextTick(() => {
            this.isRefresh = false
          })
        }, t)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-main {
    width: 100%;
    height: 100%;
    background: var(--base-bg);
  }
</style>