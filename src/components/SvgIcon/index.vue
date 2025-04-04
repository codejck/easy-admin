<template>
  <div v-if="isExternal" style="externalIconStyle" :class="[className, 'svg-external-icon']" />
  <svg v-else :class="className" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true,
      default: ''
    },
    className: {
      type: String,
      default: 'svg-icon'
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.icon)
    },
    externalIconStyle() {
      return {
        'mask': `url(${this.icon}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.icon}) no-repeat 50% 50%`
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  color: currentColor;
  overflow: hidden;
  outline: none;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
