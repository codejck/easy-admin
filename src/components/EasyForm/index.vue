<template>
    <el-form :model="modelValue" ref="form-ref">
        <template v-for="item in formItems">
            <el-form-item v-bind="item">
                <template #default="slotProps">
                    <slot-renderer v-if="item['default']" :slots="item['default']" :slot-props="slotProps" />
                </template>
                <template #label="slotProps">
                    <slot-renderer v-if="item['label']" :slots="item['label']" :slot-props="slotProps" />
                </template>
                <template #error="slotProps">
                    <slot-renderer v-if="item['error']" :slots="item['error']" :slot-props="slotProps" />
                </template>
            </el-form-item>
        </template>
        <slot />
    </el-form>
</template>

<script>
import { merge } from 'lodash'
import SlotRenderer from '@/components/SlotRenderer'

export default {
    name: 'EasyForm',
    components: { SlotRenderer },
    props: {
        modelValue: {
            type: Object,
            default: {}
        },
        items: {
            type: Array,
            default: []
        }
    },
    mounted() {
        const formRef = this.$refs['form-ref']
        for (const key in formRef) this[key] = formRef?.[key]
    },
    computed: {
        formItems() {
            return this.items.map(item => {
                if (typeof item.default !== 'object') return item
                return {
                    ...item,
                    default: [].concat(item.default).map(slot => {
                        return merge({}, slot, {
                            props: {
                                modelValue: this.modelValue[item.prop],
                                'onUpdate:modelValue': (val) => {
                                    this.modelValue[item.prop] = val
                                }
                            }
                        })
                    })
                }
            })
        }
    }
}
</script>