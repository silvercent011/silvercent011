import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    rootDir: './',
    target: 'static',
    css: ["~/assets/css/tailwind.css"],
    build: {
        followSymlinks: false,
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
});
