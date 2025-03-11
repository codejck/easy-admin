<template>
  <div id="mode-switch" @click="toggleMode">
    <svg-icon icon="light" :style="{ transform: mode === 'light' ? 'scale(1) rotate(360deg)' : 'scale(0)' }" />
    <svg-icon icon="dark" :style="{ transform: mode === 'light' ? 'rotate(360deg) scale(0)' : '' }" />
  </div>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapWritableState } from 'pinia'

export default {
  name: "ModeSwitch",
  computed: {
    ...mapWritableState(useSettingsStore, ["mode"])
  },
  methods: {
    toggleMode() {
      this.mode = this.mode === "light" ? "dark" : "light"
    }
  }
}
</script>

<style lang="scss" scoped>
  #mode-switch {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid rgba(128, 128, 128, 0.6);
    background: rgba(168, 168, 168, 0.18);
    display: grid;
    place-items: center;
    user-select: none;
    cursor: pointer;

    &:hover {
      border-color: rgba(128, 128, 128, 1);
    }

    svg {
      width: 14px;
      height: 14px;
      grid-column: 1 / 1;
      grid-row: 1 / 1;
      color: var(--navbar-icon-fill-color);
      transition: transform 500ms;
    }
  }
</style>
