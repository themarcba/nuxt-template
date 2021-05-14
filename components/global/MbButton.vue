<template>
  <nuxt-link v-if="isNuxtLink" :to="to" :class="elementClass">
    <slot />
  </nuxt-link>

  <a v-else-if="isAnchor" :href="href" :class="elementClass">
    <slot />
  </a>

  <button v-else :class="elementClass" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    // Secondary buttons have only an outlined border
    secondary: { type: Boolean, default: false },

    // If if color should not be the accent color,
    // it can be either of success, danger, warning, info
    success: { type: Boolean, default: false },
    danger: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    info: { type: Boolean, default: false },

    // If the element should be a <nuxt-link>
    to: { type: Object, default: null },

    // If the element should be an <a>
    href: { type: String, default: '' },
  },
  computed: {
    isNuxtLink() {
      return Boolean(this.to)
    },
    isAnchor() {
      return Boolean(this.href)
    },
    elementColor() {
      if (this.success) return 'success'
      if (this.danger) return 'danger'
      if (this.warning) return 'warning'
      if (this.info) return 'info'
      else return 'accent'
    },
    elementClass() {
      const shared = [
        'rounded-md',
        'py-2',
        'px-4',
        'font-bold',
        'border-2',
        'border-with',
        'transition-colors',
        'duration-300',
        'ease-linear',
        'inline-block',
      ]
      const color = this.elementColor
      if (this.secondary) {
        return [
          ...shared,
          `text-${color}`,
          `border-${color}`,
          `bg-transparent`,
          `hover:bg-${color}`,
          `hover:text-accentContrast`,
        ]
      } else {
        return [
          ...shared,
          `border-${color}`,
          `bg-${color}`,
          `text-accentContrast`,
          `hover:bg-transparent`,
          `hover:text-${color}`,
        ]
      }
    },
  },
  methods: {
    handleClick(ev) {
      this.$emit('click', ev)
    },
  },
}
</script>

<style></style>
