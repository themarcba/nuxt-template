<template>
  <font-awesome-icon :icon="[iconType, icon]" />
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'regular' },
    icon: { type: String, required: true },
  },
  computed: {
    iconType() {
      const iconTypeMap = {
        solid: 'fas',
        regular: 'far',
        brand: 'fab',
      }
      return iconTypeMap[this.type]
    },
  },
}
</script>