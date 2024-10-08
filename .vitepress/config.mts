import { defineConfig } from "vitepress";
import { sidebar } from "../sidebar-menu.js";

const GTAG = process.env.NODE_ENV !== "development" ? "G-GC2FXLTHYR" : undefined;

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Describo",
    appearance: false,
    base: "/",
    srcDir: "./src",
    outDir: "./docs",
    sitemap: {
        hostname: "https://describo.github.io",
    },
    description:
        "Describo is an ecosystem of tools, software components and services to create and manage linked open data in the form of Research Object Crates.",
    head: [
        [
            "meta",
            {
                name: "title",
                content: "Describo: JSON-LD tools, software and services to manage RO-Crates.",
            },
        ],
        [
            "meta",
            {
                name: "keywords",
                content:
                    "Describo, Research Object, Research-Object Crate, RO-Crate, rocrate, metadata, jsonld, editor, VueJS component, RO-Crate editor, JSON Linked Data, jsonld, json-ld, Linked Data, content transcription, AI, Generative AI, Conversational AI",
            },
        ],
        [
            "meta",
            {
                name: "author",
                content: "Dr Marco La Rosa (https://marcolarosa.github.io/)",
            },
        ],
        ["script", { async: "", src: `https://js.stripe.com/v3/buy-button.js` }],
        ["script", { async: "", src: `https://www.googletagmanager.com/gtag/js?id=${GTAG}` }],
        [
            "script",
            {},
            `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${GTAG}');`,
        ],
        [
            "script",
            { type: "application/ld+json" },
            `{
                "@context": "https://schema.org/",
                "@id": "https://describo.github.io/documentation",
                "@type": "WebSite",
                "name": "Describo: JSON-LD tools, software and services to manage RO-Crates.",
                "mainEntityOfPage": "https://describo.github.io/",
                "author": {
                    "@id": "https://marcolarosa.github.io/",
                    "@type": "Person",
                    "name": "Dr Marco La Rosa",
                    "email": "m@lr.id.au",
                    "sameAs": { "@id": "https://orcid.org/0000-0001-5383-6993" }
                },
                "description": "Describo is an ecosystem of tools, software components and services to create and manage linked open data in the form of Research Object Crates.",
                "keywords": [
                    "Describo",
                    "Research Object",
                    "RO-Crate",
                    "rocrate",
                    "metadata",
                    "jsonld",
                    "editor",
                    "vue component",
                    "RO-Crate editor",
                    "content transcription",
                    "AI",
                    "Generative AI",
                    "Conversational AI"
                ]
            }`,
        ],
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "./images/logos/describo-logo-small.webp",
        nav: [
            {
                text: "Docs",
                link: "/docs/guide/five-minute-tutorial",
            },
            {
                text: "Product Tour",
                link: "/tour",
            },
            {
                text: "Pricing",
                link: "/pricing",
            },
            {
                text: "Issues",
                link: "https://github.com/describo/describo.github.io/issues/new/choose",
            },
            {
                text: "Announcements",
                link: "https://github.com/orgs/describo/discussions/categories/announcements",
            },
        ],
        sidebar,
        socialLinks: [{ icon: "github", link: "https://github.com/describo" }],
        lastUpdated: {
            text: "Updated at",
            formatOptions: {
                dateStyle: "full",
                timeStyle: "medium",
            },
        },

        search: {
            provider: "local",
        },
    },
});
