<template>
    <el-dropdown class="lang-select" trigger="click">
        <svg-icon icon="translate" aria-hidden />
        <template #dropdown>
            <el-dropdown-menu>
                <template v-for="(val, key) in $tm('settings.subTitle.language.options')" :key="key">
                    <el-dropdown-item @click="language = key" 
                        :class="{ 'primary-color': language === key }"
                        style="justify-content: space-between">
                        {{ val }}
                        <svg-icon icon="right" style="margin-left: 5px" v-if="language === key" />
                    </el-dropdown-item>
                </template>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapWritableState } from 'pinia'

export default {
    name: 'LangSwitch',
    computed: {
        ...mapWritableState(useSettingsStore, ['language'])
    }
}
</script>

<style lang="scss" scoped>
    .lang-select {
        svg {
            width: 18px;
            height: 18px;
            color: var(--navbar-icon-fill-color);
            outline: none;
            cursor: pointer;
        }
    }
</style>