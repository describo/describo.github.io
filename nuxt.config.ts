// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    devtools: { enabled: false },
    modules: ["@nuxtjs/tailwindcss"],
    css: ["@fortawesome/fontawesome-svg-core/styles.css", "@/assets/styles.css"],
    ssr: true,
    build: {
        transpile: [
            "@fortawesome/vue-fontawesome",
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/free-regular-svg-icons",
            "@fortawesome/free-brands-svg-icons",
        ],
    },
    app: {
        head: {
            bodyAttrs: {
                class: "bg-slate-200",
            },
            meta: [
                {
                    name: "title",
                    content: "Describo: JSON-LD tools, software and services to manage RO-Crates.",
                },
                {
                    name: "description",
                    content:
                        "Describo is an ecosystem of tools, software components and services to create and manage linked open data in the form of Research Object Crates.",
                },
                {
                    name: "author",
                    content: "Dr Marco La Rosa (https://marcolarosa.github.io/)",
                },
                {
                    name: "keywords",
                    content:
                        "Describo, Research Object, Research-Object Crate, RO-Crate, rocrate, metadata, jsonld, editor, VueJS component, RO-Crate editor, JSON Linked Data, jsonld, json-ld, Linked Data",
                },
                {
                    name: "google-site-verification",
                    content: "icbbBfDR_SV3H2TUsnfzMhcfeAISzEh59CQZJdqsgsc",
                },
            ],
        },
    },
    vite: {
        build: {
            outDir: "docs",
        },
    },
});
