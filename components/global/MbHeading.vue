<template>
  <h1 v-if="level === 1" :class="elementClasses"><slot /></h1>
  <h2 v-else-if="level === 2" :class="elementClasses"><slot /></h2>
  <h3 v-else-if="level === 3" :class="elementClasses"><slot /></h3>
  <h4 v-else-if="level === 4" :class="elementClasses"><slot /></h4>
  <h5 v-else :class="elementClasses"><slot /></h5>
</template>

<script>
export default {
  props: {
    level: { type: Number, default: 1 },
    accent: { type: Boolean, default: false },
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
  },
  computed: {
    elementClasses() {
      const shared = ['font-bold']
      if (this.accent) shared.push('text-accent')
      else if (this.primary) shared.push('text-primary')
      else if (this.secondary) shared.push('text-secondary')
      if (this.level === 1) return [...shared, 'text-2xl']
      if (this.level === 2) return [...shared, 'text-xl']
      if (this.level === 3) return [...shared, 'text-lg']
      if (this.level === 4) return [...shared, 'text-base']
      else return shared
    },
  },
}
</script>
