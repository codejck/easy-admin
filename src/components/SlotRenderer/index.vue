<template>
    <template v-if="typeof slots === 'function'" v-for="slot in [].concat(slots(slotProps))">
        <component :is="slot" v-if="slot.__v_isVNode" />
        <slot-renderer :slots="slot" v-else />
    </template>
    <template v-else-if="typeof slots === 'object'" v-for="slot in [].concat(slots)">
        <component :is="slot.name" v-bind="slot.props">
            <template v-for="(_slot, name) in slot.slots" #[name]="slotProps">
                <slot-renderer :slots="_slot" :slot-props="slotProps" />
            </template>
        </component>
    </template>
    <template v-else>
        {{ slots }}
    </template>
</template>

<script>
export default {
    name: 'SlotRenderer',
    props: {
        slots: {
            type: null,
            default: []
        },
        slotProps: {
            type: Object
        }
    }
}
</script>