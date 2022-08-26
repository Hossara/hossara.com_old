<script lang="ts" setup>

import {useHead} from "#imports";
import {useRoute} from "#app";
const route = useRoute()

useHead({
  titleTemplate: () => {
    return route.name ? route.meta.name as string : 'Hossein Araghi'
  }
})
</script>

<template>
  <Head>
    <Title></Title>
  </Head>
  <NuxtLayout name="surface">
    <NuxtPage/>
  </NuxtLayout>
</template>
<style lang="sass">
// FONTS
@font-face
  font-family: Inter
  font-weight: 400
  src: url("./assets/fonts/Inter-Regular.ttf")
  font-display: swap

@font-face
  font-family: Inter
  font-weight: 500
  src: url("./assets/fonts/Inter-Medium.ttf")
  font-display: swap
</style>
<style src="./assets/sass/public/style.sass"></style>
<style src="./assets/sass/public/_default.sass"></style>