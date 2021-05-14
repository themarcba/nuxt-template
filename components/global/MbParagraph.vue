<template>
  <p :class="elementClasses" class="my-4">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    secondary: { type: Boolean, default: false },
  },
  computed: {
    elementClasses() {
      return this.secondary ? 'text-secondary' : 'text-primary'
    },
  },
}
</script>
