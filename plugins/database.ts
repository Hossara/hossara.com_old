import {defineNuxtPlugin} from "#app"

export default defineNuxtPlugin(() =>
{
    const url = 'mongodb://localhost:27017'

    return {
        provide: {
        }
    }
})