<template>
  <WaterMark :show="watermark">
    <component :is="component" />
  </WaterMark>
  <Settings v-model="showSettings" />
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'
import { mapState, mapWritableState } from 'pinia'
import { dashToCamel } from '@/utils'

import WaterMark from "@/components/WaterMark"
import Settings from "@/layout/components/Settings"

export default {
  name: "Layout",
  components: { WaterMark, Settings },
  computed: {
    ...mapState(useSettingsStore, ["layout", "watermark"]),
    ...mapWritableState(useAppStore, ["showSettings"]),
    component() {
      return require(`@/layout/layouts/${dashToCamel(this.layout)}`).default
    }
  }
}
</script>
