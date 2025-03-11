<template>
  <state-404 />
</template>

<script>
export default {
  name: '404',
  components: {
    'state-404': require('@/views/404/index.vue').default
  }
}
</script>
