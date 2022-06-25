<script lang="ts" setup>
import {definePageMeta} from "#imports";

definePageMeta({
  key: (route) => route.name = "About"
})
</script>

<template>
  <div id="about" data-page class="d-flex flex-column justify-content-start align-items-center">
    <div class="pf_pic"></div>
    <h4>
      Hi, I'm <span>Hossein Araghi</span> a <span>Full Stack Mobile & Web Developer</span> and my specialty is <span>JVM</span>. I’m <span>young</span> and full of <span>energy</span> and <span>trying my best</span> to build my <span>future</span> as best as i can. Now I’m <span>Founder & CEO of YasTech Team</span> and <span>member of the scientific team in CS50x Iran</span>. Also i Frontend developer at Vida Creative Agancy.
    </h4>
  </div>
</template>

<style scoped src="../assets/sass/pages/about.sass"></style>