<template>
    <el-menu :default-active="$route.path" :collapse="collapse" :unique-opened="uniqueOpened">
        <template v-for="route in data" :key="route.path">
            <MenuItem  :item="route" v-show="route.meta && !route.meta.hidden">
                <template #default="{ meta }">
                    <slot :meta="meta" />
                </template>
            </MenuItem>
        </template>
    </el-menu>
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

import MenuItem from "./MenuItem"

export default {
    name: 'Menu',
    components: { MenuItem },
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    computed: {
        ...mapState(useAppStore, ["collapse"]),
        ...mapState(useSettingsStore, ["sidebarWidth", "uniqueOpened"])
    }
}
</script>

<style lang="scss" scoped>
.el-menu {
    width: v-bind('sidebarWidth + "px"');
}
</style>
