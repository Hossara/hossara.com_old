<script lang="ts" setup>
import {definePageMeta, onMounted} from "#imports"
import {useHead} from "#head"
import {useNuxtApp, useState} from "#app";
import axios from "axios";

// Page Settings
definePageMeta({ layout: "surface", name: "Projects" })
useHead({ title: "My Projects | Hossein Araghi" })

const loading = useState("loading", () => true)
const projects = useState("projects", () => [])

onMounted(() => axios.get(useNuxtApp().$api("/projects"))
    .then(value => projects.value = value.data)
    .catch(reason => alert(reason))
    .finally(() => loading.value = false))

</script>

<template>
  <div id="projects" class="d-flex justify-content-center align-items-center text-white" data-page>
    <LoadingWidget v-if="loading"/>

    <p class="mb-0" v-else-if="projects.length === 0">No Projects Found!</p>

    <div class="row m-0 w-100 justify-content-center" v-else>
      <ProjectsCard v-for="project in projects" :key="projects" :project="project"/>
    </div>
  </div>
</template>

<style lang="sass" scoped>
#projects
  height: 100%
  overflow: hidden

  > div
    height: 100%
    max-width: 1600px
    border-radius: 15px
    overflow-y: scroll
</style>