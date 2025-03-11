<template>
    <component ref="captcha-ref" :is="component" v-bind="$attrs" />
</template>

<script>
export default {
    name: 'Captcha',
    expose: ['open', 'refresh'],
    props: {
        type: {
            type: String,
            default: 'pick'
        },
    },
    computed: {
        component() {
            let type = this.type.charAt(0).toUpperCase() + this.type.slice(1)
            return require(`./components/${type}`).default
        }
    },
    methods: {
        open() {
            this.$refs['captcha-ref'].open()
        },
        refresh() {
            this.$refs['captcha-ref'].refresh()
        }
    }
}
</script>