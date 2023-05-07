import "element-plus/theme-chalk/index.css";
import "./assets/tailwind.css";
import "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";
import ShellComponent from "./components/Shell.component.vue";
import { createRouter, createWebHistory } from "vue-router";

import ElementPlus from "element-plus";
import { createApp } from "vue";
import App from "./App.vue";

const routes = [
    {
        path: "/",
        name: "root",
        component: ShellComponent,
        children: [
            { name: "desktop", path: "desktop", component: ShellComponent },
            { name: "component", path: "component", component: ShellComponent },
            { name: "profile", path: "profile", component: ShellComponent },
            { name: "datapacks", path: "datapacks", component: ShellComponent },
        ],
    },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
