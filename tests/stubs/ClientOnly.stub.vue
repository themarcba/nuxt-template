<template>
  <div>
    <slot v-bind="$attrs" v-on="$listeners" />
  </div>
</template>
