<script lang="ts" setup>
import {definePageMeta} from "#imports";
import {useHead} from "#head";

// Page Settings
definePageMeta({ layout: "surface", name: "About me" })
useHead({ title: "About me | Hossein Araghi" })
</script>

<template>
  <div id="about" class="d-flex justify-content-center align-items-center" data-page>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <p>
        Hi, I'm <span>Hossein Araghi</span> a <span>Software Engineer</span>. I started programming professionally in <span>2016</span> with <span>c and java</span>. My speciality is <span>Java based languages & kotlin</span>. Also i can develop user interfaces with <span>Vue.js 3 & Flutter</span>. You can read more about my specialities in <span>My Experiences</span> & <span>My Projects</span> page.
      </p>
      <div class="d-flex justify-content-start align-items-center w-100">
        <RoundedButtonSmall @click="$router.push('/experiences')">My Experiences</RoundedButtonSmall>
        <RoundedButtonSmall @click="$router.push('/projects')">My projects</RoundedButtonSmall>
      </div>
    </div>
  </div>
</template>

<style scoped src="../assets/sass/pages/about.sass" lang="sass"></style>