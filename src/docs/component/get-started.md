---
title: Get started
aside: false
---

# Get started with the component

[[toc]]

## Install the package

```JS
npm install --save @describo/crate-builder-component
```

## Install the dependencies: Fontawesome free icons and element-plus

```bash
npm install --save element-plus \
    @fortawesome/fontawesome-free \
    @fortawesome/fontawesome-svg-core
```

## Vite users

Vite requires some extra configuration in order to use this component.

-   vite.config.js

```JS
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        // ...
    ],
    optimizeDeps: {
        include: ["element-plus", "@describo/crate-builder-component", "ajv", "dayjs" ],
    },
});
```

## Tailwind CSS dependency

The component uses [tailwindcss](https://tailwindcss.com/) and in order for the CSS to be processed
correctly, you need to
[`setup your app for tailwind`](https://tailwindcss.com/docs/installation/using-postcss) and add a
`tailwind.config.js` that looks like:

```JS
module.exports = {
    future: {},
    content: [
        "./src/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
        "./node_modules/@describo/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
};
```

The last line in the config (`"./node_modules/@describo/\**/*.vue",`) is the important part. Here
we're telling tailwind to process css in the component .vue files. Without that, the styling in the
component won't be used. Other than this, ensure you set up tailwind for your environment as per
_their_ documentation.

## Vue Router Dependency

The app can handle updating the route with the current active entity or that capability can be
completely disabled (ie you want to do it yourself or maybe you're using the webcomponent build).

## Wire it up as a plugin

Plug it into your Vue app. It will look something like the following - note that `you` configure
tailwind, fontawesome and element-plus css your app:

```JS
import "./tailwind.css";
import "element-plus/dist/index.css";
import "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";

import { createApp } from "vue";
import App from "./App.vue";
import DescriboCrateBuilder from "@describo/crate-builder-component";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory("/"),
    routes: [
        {
            path: "/",
            name: "root",
            component: App,
        },
    ],
});

const app = createApp(App);
app.use(router);
app.use(DescriboCrateBuilder);
app.mount("#app");
```

## Wire it up by direct import where you want to use it

You can also just import it at the point you need. Note that you still need to setup tailwind,
fontawesome and element-plus as shown above.

```JS
<script setup>
import DescriboCrateBuilder from "@describo/crate-builder-component/src/crate-builder/Shell.component.vue";
</script>

<template>
    <DescriboCrateBuilder... />
</template>
```
