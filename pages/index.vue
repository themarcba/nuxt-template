<template>
  <main class="flex items-center justify-center flex-1">
    <section>
      <mb-heading accent>Nuxt Template</mb-heading>
      <mb-heading :level="2">
        Nuxt + Tailwind + FontAwesome + Google Fonts
      </mb-heading>

      <mb-paragraph>
        Everything with some predefined components for the most important tasks.
      </mb-paragraph>
      <mb-button :to="{ name: 'demo' }">
        Check out the demo <mb-icon icon="chevron-right" type="solid" />
      </mb-button>
      <mb-link href="https://github.com/themarcba/nuxt-template" boxed inverted>
        Check out the repository
        <mb-icon icon="github" type="brand" />
      </mb-link>
    </section>
  </main>
</template>

<style>
.test {
  align-items: center;
  justify-content: center;
}
</style>
