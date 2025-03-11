<template>
    <el-button>
        <svg-icon :icon="i" v-if="i" />
        <span v-text="t" v-if="t" />
        <slot v-else />
    </el-button>
</template>

<script>
export default {
    name: 'EasyButton',
    props: {
        i: {
            type: String
        },
        t: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.el-button {
    svg:first-child:not(:last-child) {
        margin-right: 5px;
    }
}
</style>