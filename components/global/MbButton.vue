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
    colorSpecificClasses() {
      let classes = []
      if (this.secondary) {
        if (this.success) {
          classes = ['text-success', 'border-success', 'hover:bg-success']
        } else if (this.danger) {
          classes = ['text-danger', 'border-danger', 'hover:bg-danger']
        } else if (this.warning) {
          classes = ['text-warning', 'border-warning', 'hover:bg-warning']
        } else if (this.info) {
          classes = ['text-info', 'border-info', 'hover:bg-info']
        } else {
          classes = ['text-accent', 'border-accent', 'hover:bg-accent']
        }
      } else if (!this.secondary) {
        if (this.success) {
          classes = ['border-success', 'bg-success', 'hover:text-success']
        } else if (this.danger) {
          classes = ['border-danger', 'bg-danger', 'hover:text-danger']
        } else if (this.warning) {
          classes = ['border-warning', 'bg-warning', 'hover:text-warning']
        } else if (this.info) {
          classes = ['border-info', 'bg-info', 'hover:text-info']
        } else {
          classes = ['border-accent', 'bg-accent', 'hover:text-accent']
        }
      }
      return classes
    },
    elementClass() {
      const shared = [
        'mx-1',
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
      if (this.secondary) {
        return [
          ...shared,
          ...this.colorSpecificClasses,
          'hover:text-accentContrast',
        ]
      } else {
        return [
          ...shared,
          ...this.colorSpecificClasses,
          'hover:bg-transparent',
          'text-accentContrast',
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
