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
    // A link can be boxed in order to align better with buttons
    boxed: { type: Boolean, default: false },
    inverted: { type: Boolean, default: false },

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
      const color = this.elementColor
      const classes = [
        `inline-block`,
        `font-bold`,
        `text-${color}`,
        `border-b-2`,
        `transition-border`,
        `duration-300`,
        `ease-linear`,
      ]
      if (this.boxed) classes.push(`my-2`, `mx-4`)
      if (this.inverted)
        classes.push(`border-transparent`, `hover:border-${color}`)
      else classes.push(`border-${color}`, `hover:border-transparent`)
      return classes
    },
  },
  methods: {
    handleClick(ev) {
      this.$emit('click', ev)
    },
  },
}
</script>
