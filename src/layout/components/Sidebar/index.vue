<template>
    <div :class="['sidebar-container', sidebarStyle, { 'dark-sidebar': darkSidebar }]">
        <slot name="header" />
        <el-scrollbar>
            <slot />
        </el-scrollbar>
        <slot name="footer" />
    </div>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

export default {
    name: 'Sidebar',
    computed: {
        ...mapState(useSettingsStore, ['sidebarItemHeight', 'sidebarStyle', 'darkSidebar'])
    }
}
</script>

<style lang="scss" scoped>
    .sidebar-container {
        height: 100%;
        background: var(--sidebar-menu-bg);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: width 0.28s;

        :deep(.el-menu) {
            --el-menu-bg-color: var(--sidebar-menu-bg);
            --el-menu-border-color: var(--sidebar-menu-bg);
            --el-menu-item-height: v-bind('`${sidebarItemHeight}px`');
            --el-menu-sub-item-height: v-bind('`${sidebarItemHeight - 6}px`');

            span {
                max-width: 100%;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>
