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

const fake_projects = useState("fakeProjects", () =>
[
  {
    title: "CS50x Iran",
    tech_stack: "Spring boot, kotlin, vue.js 3",
    position: "Software Engineer",
    time: ["DEC 2022", "OCT 2022"],
    links: [
      { type: "link", url: "https://google.com" },
      { type: "link", url: "https://google.com" },
      { type: "github", url: "https://google.com" }
    ]
  },
  {
    title: "CS50x Iran",
    tech_stack: "Spring boot, kotlin, vue.js 3, Nuxt3 RC, Mongodb, Sass",
    position: "Developer",
    time: ["DEC 2022", "OCT 2022"],
    links: [
      { type: "link", url: "https://google.com" },
      { type: "link", url: "https://google.com" },
      { type: "github", url: "https://google.com" }
    ]
  },
  {
    title: "CS50x Iran",
    tech_stack: "Spring boot, kotlin, vue.js 3, Nuxt3 RC, Mongodb, Sass",
    position: "Developer",
    time: ["DEC 2022", "OCT 2022"],
    links: [
      { type: "link", url: "https://google.com" },
      { type: "link", url: "https://google.com" },
      { type: "github", url: "https://google.com" }
    ]
  },
  {
    title: "CS50x Iran",
    tech_stack: "Spring boot, kotlin, vue.js 3, Nuxt3 RC, Mongodb, Sass",
    position: "Developer",
    time: ["DEC 2022", "OCT 2022"],
    links: [
      { type: "link", url: "https://google.com" },
      { type: "link", url: "https://google.com" },
      { type: "github", url: "https://google.com" }
    ]
  },
  {
    title: "CS50x Iran",
    tech_stack: "Spring boot, kotlin, vue.js 3, Nuxt3 RC, Mongodb, Sass",
    position: "Developer",
    time: ["DEC 2022", "OCT 2022"],
    links: [
      { type: "link", url: "https://google.com" },
      { type: "link", url: "https://google.com" },
      { type: "github", url: "https://google.com" }
    ]
  },
  {
    title: "CS50x Iran",
    tech_stack: "Spring boot, kotlin, vue.js 3, Nuxt3 RC, Mongodb, Sass",
    position: "Developer",
    time: ["DEC 2022", "OCT 2022"],
    links: [
      { type: "link", url: "https://google.com" },
      { type: "link", url: "https://google.com" },
      { type: "github", url: "https://google.com" }
    ]
  },
  {
    title: "CS50x Iran",
    tech_stack: "Spring boot, kotlin, vue.js 3, Nuxt3 RC, Mongodb, Sass",
    position: "Developer",
    time: ["DEC 2022", "OCT 2022"],
    links: [
      { type: "link", url: "https://google.com" },
      { type: "link", url: "https://google.com" },
      { type: "github", url: "https://google.com" }
    ]
  },
  {
    title: "CS50x Iran",
    tech_stack: "Spring boot, kotlin, vue.js 3, Nuxt3 RC, Mongodb, Sass",
    position: "Developer",
    time: ["DEC 2022", "OCT 2022"],
    links: [
      { type: "link", url: "https://google.com" },
      { type: "link", url: "https://google.com" },
      { type: "github", url: "https://google.com" }
    ]
  },
])
</script>

<template>
  <div id="projects" class="d-flex justify-content-center align-items-center text-white" data-page>
<!--    <LoadingWidget v-if="loading"/>

    <p class="mb-0" v-else-if="projects.length === 0">No Projects Found!</p>

    <p v-else>hiiiia</p>-->

    <div class="row m-0">
      <ProjectsCard v-for="project in fake_projects" :key="projects" :project="project"/>
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