<template>
    <svg-icon className="screen" icon="screen" @click="handleClick" />
</template>

<script>
export default {
    name: 'DataScreen',
    methods: {
        handleClick() {
            window.open('localhost:8088')
        }
    }
}
</script>

<style scoped>
    .screen {
        width: 18px;
        height: 18px;
        color: var(--navbar-icon-fill-color);
        cursor: pointer;
    }
</style>