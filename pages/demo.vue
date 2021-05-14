<template>
  <main class="m-4">
    <mb-button :to="{ name: 'index' }">
      <mb-icon icon="chevron-left" type="solid" /> Back to home
    </mb-button>

    <mb-heading :level="1">Heading 1</mb-heading>
    <mb-heading :level="2">Heading 2</mb-heading>
    <mb-heading :level="3">Heading 3</mb-heading>
    <mb-heading :level="4">Heading 4</mb-heading>

    <mb-heading :level="2" class="mt-8">Sans-Serif Text</mb-heading>
    <mb-paragraph class="font-sans">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </mb-paragraph>

    <mb-heading :level="2" class="font-serif">
      Serif And Secondary-Colored Text
    </mb-heading>
    <mb-paragraph secondary class="font-serif">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </mb-paragraph>

    <mb-box class="my-6">
      <mb-heading accent>Box</mb-heading>
      <mb-paragraph>This is a box. Just for fun!</mb-paragraph>
    </mb-box>

    <mb-heading :level="2" class="mt-8">Buttons</mb-heading>
    <mb-heading :level="3" class="mt-8">"Real" Buttons</mb-heading>
    <mb-paragraph>(Click to increment this number: {{ count }})</mb-paragraph>
    <div class="my-2">
      <mb-button @click="count += 1">Primary accent</mb-button>
      <mb-button secondary @click="count += 1">Secondary accent</mb-button>
    </div>
    <div class="my-2">
      <mb-button success @click="count += 1">Primary success</mb-button>
      <mb-button success secondary @click="count += 1">
        Secondary success
      </mb-button>
    </div>
    <div class="my-2">
      <mb-button danger @click="count += 1">Primary danger</mb-button>
      <mb-button danger secondary @click="count += 1">
        Secondary danger
      </mb-button>
    </div>
    <div class="my-2">
      <mb-button warning @click="count += 1">Primary warning</mb-button>
      <mb-button warning secondary @click="count += 1">
        Secondary warning
      </mb-button>
    </div>
    <div class="my-2">
      <mb-button info @click="count += 1">Primary info</mb-button>
      <mb-button info secondary @click="count += 1"> Secondary info </mb-button>
    </div>

    <mb-heading :level="3" class="mt-8">
      Nuxt Links that look like real buttons
    </mb-heading>
    <mb-paragraph>They redirect you to another page on the site.</mb-paragraph>
    <mb-button :to="{ name: 'other' }">Nuxt-Link Button</mb-button>
    <mb-button :to="{ name: 'other' }" secondary> Nuxt-Link Button </mb-button>

    <mb-heading :level="3" class="mt-8">
      Anchors that look like real buttons
    </mb-heading>
    <mb-paragraph>They redirect you to another site.</mb-paragraph>
    <mb-button href="https://marc.dev">Anchor Button</mb-button>
    <mb-button href="https://marc.dev" secondary> Anchor Button </mb-button>

    <mb-heading :level="2" class="mt-8">Links</mb-heading>

    Link that can be <mb-link :to="{ name: 'other' }">embedded</mb-link> in
    regular text.

    <mb-heading :level="3" class="mt-8">Boxed</mb-heading>
    <mb-paragraph>
      They can also be "boxed", to align better with the buttons
    </mb-paragraph>
    <mb-button :to="{ name: 'other' }">Register</mb-button>
    <mb-button :to="{ name: 'other' }" secondary>Log in</mb-button>
    <mb-link :to="{ name: 'other' }" boxed>Forgot password</mb-link>

    <mb-heading :level="3" class="mt-8">Inverted</mb-heading>
    <mb-paragraph>
      They can also be "inverted". This means that the underline is not
      regularly visible, but appears on hover.
    </mb-paragraph>
    <mb-button :to="{ name: 'other' }">Register</mb-button>
    <mb-button :to="{ name: 'other' }" secondary>Log in</mb-button>
    <mb-link :to="{ name: 'other' }" boxed inverted>Forgot password</mb-link>

    <mb-heading :level="3" class="mt-8">Colors</mb-heading>
    <mb-link :to="{ name: 'other' }" boxed success>Success link</mb-link>
    <mb-link :to="{ name: 'other' }" boxed danger>Danger link</mb-link>
    <mb-link :to="{ name: 'other' }" boxed warning>Warning link</mb-link>
    <mb-link :to="{ name: 'other' }" boxed info>Info link</mb-link>
  </main>
</template>

<script>
export default {
  props: {
    level: { type: Number, default: 1 },
  },
  data() {
    return {
      count: 0,
    }
  },
}
</script>

<style></style>
