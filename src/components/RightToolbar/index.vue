<template>
    <el-button-group class="right-toolbar">
        <!-- 搜索 -->
        <el-tooltip :content="$t(`toolTip.${showSearch ? 'showSearchBar' : 'hiddenSearchBar'}`)" placement="top"
            effect="light" :hide-after="0" v-if="showSearch !== undefined">
            <easy-button :i="`zoom-${showSearch ? 'out' : 'in'}`" @click="showSearch = !showSearch" />
        </el-tooltip>
        <!-- 列设置 -->
        <el-tooltip :content="$t('toolTip.columnSetting')" placement="top" effect="light" v-if="columns.length">
            <easy-button v-popover="$refs['popoverRef']" i="filter">
                <el-popover ref="popoverRef" trigger="click" :hide-after="0" virtual-triggering
                    :popper-style="{ padding: '8px' }">
                    <el-scrollbar max-height="320px">
                        <VueDraggable v-model="columns" :animation="150" ghostClass="ghost" handle=".handle-drag">
                            <template v-for="{ label, hidden }, i in columns">
                                <el-checkbox :label="label" :modelValue="!hidden" v-show="label"
                                    @change="handleChange(i, $event)">
                                    <svg-icon icon="drag" class="handle-drag" />
                                    <span>{{ label }}</span>
                                </el-checkbox>
                            </template>
                        </VueDraggable>
                    </el-scrollbar>
                </el-popover>
            </easy-button>
        </el-tooltip>
        <!-- 刷新 -->
        <el-tooltip :content="$t('toolTip.refresh')" placement="top" effect="light" v-if="$attrs.onRefresh">
            <easy-button i="refresh" v-on-click-rotate v-prevent-reclick="500" @click="$emit('refresh')" />
        </el-tooltip>
    </el-button-group>
</template>

<script setup name="RightToolbar">
import { defineModel } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'

const showSearch = defineModel('showSearch', { type: Boolean })
const columns = defineModel('columns', { type: Array })

const handleChange = (index, val) => {
    columns.value = columns.value.map((column, i) => {
        return {
            ...column,
            hidden: i === index ? !val : column.hidden
        }
    })
}
</script>

<style lang="scss" scoped>
.right-toolbar {
    margin-left: auto;

    .el-button {
        width: 36px;
        height: 24px;
    }
}

.el-checkbox {
    width: 100%;
    padding-left: 10px;
    margin-right: 0;
    border-radius: 2px;
    box-sizing: border-box;
    overflow: hidden;

    &::v-deep .el-checkbox__label {
        display: flex;
        gap: 6px;
    }

    &:hover {
        background: var(--el-color-info-light-9);
    }

    &.is-checked:hover {
        background: var(--el-color-primary-light-9);
    }
}
</style>