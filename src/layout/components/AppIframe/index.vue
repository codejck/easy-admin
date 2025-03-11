<template>
    <div class="app-iframe" :style="{ height: `calc(100vh - ${!tabFullscreen * headerHeight + showTabs * tabsHeight}px)` }">
        <iframe :src="src" />
    </div>
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

export default {
    name: 'AppIframe',
    props: {
        src: {
            type: String
        }
    },
    computed: {
        ...mapState(useAppStore, ["tabFullscreen"]),
        ...mapState(useSettingsStore, ["headerHeight", "tabsHeight", "showTabs"])
    }
}
</script>

<style lang="scss" scoped>
    .app-iframe {
        padding: 20px;
        box-sizing: border-box;
        overflow: hidden;

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    }
</style>