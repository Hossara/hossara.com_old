<script lang="ts" setup>
import {Projects} from "~/interfaces"

defineProps<{
  project: Projects
}>()
</script>

<template>
  <div class="productCards col-sm-3">
    <div class="inner d-flex flex-column justify-content-center align-items-center">
      <h2>{{ project.title }}</h2>

      <p class="ps_time" v-if="project.time.length === 0">{{ project.time[0] }}</p>
      <p class="ps_time" v-else>{{ project.time[0] }} - {{ project.time[1] }}</p>

      <p class="ps_upper">Position : </p>
      <p class="">{{ project.position }}</p>

      <p class="ps_upper">Developed with : </p>
      <p class="ps_stack">{{ project.tech_stack }}</p>

      <p class="ps_upper">Links : </p>
      <div class="d-flex justify-content-center align-items-center">
        <a v-for="link in project.links" :key="link" target="_blank"
           :href="link.url" class="fa" :class="`fa-${link.type}`"></a>
      </div>
    </div>
  </div>
</template>

<style src="../assets/sass/widget/projectsCard.sass" lang="sass" scoped></style>