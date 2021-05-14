<template>
  <div class="flex-1">
    <mb-button :to="{ name: 'index' }">
      <mb-icon icon="chevron-left" type="solid" /> Back to home
    </mb-button>

    <div class="jokes flex flex-col items-center">
      <mb-heading accent>Jokes</mb-heading>

      <mb-button @click="fetchJokes">Fetch jokes</mb-button>
      <div v-show="!jokes.length" class="my-4">Loading jokes...</div>
      <div v-show="jokes.length">
        <mb-box v-for="joke in jokes" :key="joke.id" class="m-6">
          <mb-heading :level="2">{{ joke.setup }}</mb-heading>
          <mb-heading :level="3">{{ joke.punchline }}</mb-heading>
        </mb-box>
      </div>
    </div>
  </div>
</template>

<script>
import MbHeading from '~/components/global/MbHeading.vue'
export default {
  components: { MbHeading },
  data({ $axios }) {
    return {
      jokes: [],
    }
  },

  created() {
    this.fetchJokes()
  },

  methods: {
    async fetchJokes() {
      this.jokes = []
      const { data } = await this.$axios.get(
        'https://official-joke-api.appspot.com/random_ten'
      )
      this.jokes = data
    },
  },
}
</script>

<style></style>
