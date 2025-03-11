<template>
    <el-table class="easy-table" :tooltip-options="{ showAfter: 600 }" border>
        <template v-for="(column, index) in tableColumns" :key="index">
            <component :is="column" v-if="!column.props.hidden" />
        </template>
        <template #append>
            <slot name="append" />
        </template>
        <template #empty>
            <slot name="empty" />
        </template>
    </el-table>
</template>

<script lang="jsx">
import { removeIf } from '@/utils'

export default {
    name: 'EasyTable',
    props: {
        columns: {
            type: Array,
            default: []
        },
    },
    data() {
        return {
            defaultTableColumn: {
                'align': 'center',
                'show-overflow-tooltip': ''
            }
        }
    },
    created() {
        let slots = this.$slots.default?.() || []
        // 移除已经存在的列
        removeIf(this.columns, ({ isSlot }) => isSlot)
        let slotsMap = slots.map(({ props, children }) => ({ ...props, ...children, isSlot: true }))
        // 添加插槽里的列
        this.columns.unshift(...slotsMap)
    },
    computed: {
        tableColumns() {
            return this.columns.map(column => {
                return (
                    <el-table-column {...this.defaultTableColumn} {...column}>
                        {
                            ['default', 'header', 'filter-icon'].reduce((acc, slotName) => {
                                if (typeof column[slotName] === 'function') {
                                    acc[slotName] = slotProps => column[slotName](slotProps)
                                }
                                return acc
                            }, {})
                        }
                    </el-table-column>
                )
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.easy-table {
    width: auto;

    &::v-deep {

        .el-table__header-wrapper,
        .el-table__fixed-header-wrapper {
            th {
                word-break: break-word;
                background-color: var(--el-fill-color-lighter);
                height: 40px;
                font-size: 13px;
            }
        }
    }
}
</style>