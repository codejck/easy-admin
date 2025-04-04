<template>
    <el-table class="easy-table" :tooltip-options="{ showAfter: 600 }" border @selection-change="handleSelect">
        <template v-for="(column, index) in columns" :key="index">
            <el-table-column v-bind="{ ...defaultTableColumn, ...column }" v-if="!column.hidden">
                <template #default="slotProps">
                    <slot-renderer v-if="column['default']" :slots="column['default']" :slot-props="slotProps" />
                </template>
                <template #header="slotProps">
                    <slot-renderer v-if="column['header']" :slots="column['header']" :slot-props="slotProps" />
                </template>
                <template #filter-icon="slotProps">
                    <slot-renderer v-if="column['filter-icon']" :slots="column['filter-icon']"
                        :slot-props="slotProps" />
                </template>
            </el-table-column>
        </template>
        <template #append>
            <slot name="append" />
        </template>
        <template #empty>
            <slot name="empty" />
        </template>
    </el-table>
</template>

<script>
import { removeIf } from '@/utils'
import { printTable } from "@/utils/print"
import { omit } from 'lodash'

import SlotRenderer from '@/components/SlotRenderer'

export default {
    name: 'EasyTable',
    components: { SlotRenderer },
    props: {
        columns: {
            type: Array,
            default: []
        },
    },
    data() {
        return {
            selections: [],
            defaultTableColumn: {
                'align': 'center',
                'show-overflow-tooltip': ''
            }
        }
    },
    created() {
        let slots = this.$slots.default?.() || []
        if (slots[0]?.type?.description === 'v-fgt') {
            slots = slots[0].children
        }
        // 移除已经存在的列
        removeIf(this.columns, ({ __v_isVNode }) => __v_isVNode)
        // 获取插槽里的列
        let slotsMap = slots.map(({ props, children, __v_isVNode }) => {
            return { ...props, ...omit(children, ['_']), __v_isVNode }
        })
        // 添加插槽里的列
        this.columns.unshift(...slotsMap)
    },
    computed: {
        single() {
            return this.selections.length === 1
        }
    },
    methods: {
        handleSelect(selections) {
            this.selections = selections
        },
        print(options) {
            let { isHead = true, isSelected = true } = options || {}
            let data = isSelected && this.selections.length ? this.selections : this.$attrs.data
            let columns = this.columns.filter(column => !column.hidden && column.noPrint !== true)
            printTable(data, columns, { isHead })
        }
    }
}
</script>

<style lang="scss" scoped>
.easy-table {
    width: auto;

    :deep(.el-table__header-wrapper),
    :deep(.el-table__fixed-header-wrapper) {
        th {
            word-break: break-word;
            background-color: var(--el-fill-color-lighter);
            height: 40px;
            font-size: 13px;
        }
    }
}
</style>