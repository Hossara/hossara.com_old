<script lang="ts" setup>
const website_links = [
  { title : "Home", url : "/" },
  { title : "About me", url : "/about" },
  { title : "Portfolio", url : "/portfolio" },
  { title : "contact me", url : "/contact" }
]
</script>

<template>
  <header class="d-flex align-items-center justify-content-center">
    <div class="desktop d-flex justify-content-between align-items-center">
      <img src="~/assets/img/brand/logo.svg" alt="Hossara.dev" rel="preload">
      <div class="d-flex justify-content-center align-items-center">
        <NuxtLink v-for="link in website_links" :key="link" :to="link.url" active-class="ac">
          <span>{{ link.title }}</span>
          <div></div>
        </NuxtLink>
      </div>
    </div>

    <div class="mobile d-none justify-content-between align-items-center">
      <img src="~/assets/img/brand/logo.svg" alt="Hossara.dev" rel="preload"/>
      <img src="~/assets/img/icons/icon_burger_white.svg" alt="menu" rel="preload"/>
    </div>
  </header>
</template>

<style scoped lang="sass" src="../../assets/sass/layout/header.sass"></style>