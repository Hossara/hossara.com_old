import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "font-awesome/css/font-awesome.min.css",
    ],
    vite: {
        logLevel: "error"
    },
    nitro: {
        plugins: ["~/server/index.ts"],
    },
})
