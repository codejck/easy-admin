<template>
    <div class="system-logo-container">
        <slot name="logo">
            <router-link to="/home">
                <svg-icon icon="logo" />
            </router-link>
        </slot>
        <h1 :class="{ collapse }">{{ $t('system.title') }}</h1>
    </div>
</template>

<script>
export default {
    name: 'SystemLogo',
    props: {
        color: {
            type: String,
            default: 'var(--el-color-primary)'
        },
        background: {
            type: String,
            default: ''
        },
        collapse: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.system-logo-container {
    background: v-bind(background);
    color: v-bind(color);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        outline: none;
    }

    svg {
        width: 28px;
        height: 28px;
        flex-shrink: 0;
        color: v-bind(color);
        outline: none;
        cursor: pointer;
    }

    h1 {
        width: 90px;
        padding-left: 8px;
        box-sizing: border-box;
        font-weight: 600;
        font-size: 14px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        text-align: end;
        white-space: nowrap;
        overflow: hidden;
        transition: width 0.28s, padding-left 0.28s, transform 0.28s;
        cursor: pointer;

        &.collapse {
            width: 0;
            padding-left: 0;
            transform: scaleX(0);
        }
    }
}
</style>