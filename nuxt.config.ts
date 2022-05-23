import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    target: 'static',
    css: ["~/assets/css/tailwind.css"],
    build: {
        publicPath: './nuxt',
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
