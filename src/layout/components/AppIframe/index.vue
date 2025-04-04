<template>
    <div class="app-iframe">
        <iframe :src="src" />
    </div>
</template>

<script>
export default {
    name: 'AppIframe',
    props: {
        src: {
            type: String
        }
    },
}
</script>

<style lang="scss" scoped>
    .app-iframe {
        height: var(--main-height);
        padding: 20px;
        box-sizing: border-box;
        overflow: hidden;

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    }
</style>