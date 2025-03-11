<template>
    <el-watermark :font="{ color: mode === 'light' ? '#00000026' : '#ffffff26' }"
        :content="show ? $t('system.watermark') : null" :zIndex="9999">
        <slot />
    </el-watermark>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

export default {
    name: 'WaterMark',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapState(useSettingsStore, ["mode"])
    },
}
</script>
