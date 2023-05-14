import "element-plus/theme-chalk/index.css";
import "./assets/tailwind.css";
import "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";
import ShellComponent from "./components/Shell.component.vue";
import WebEditorComponent from "./components/WebEditor.component.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import ElementPlus from "element-plus";
import { createApp } from "vue";
import App from "./App.vue";

const routes = [
    {
        path: "/",
        name: "root",
        component: ShellComponent,
        children: [
            { name: "web", path: "web", component: ShellComponent },
            { name: "desktop", path: "desktop", component: ShellComponent },
            { name: "component", path: "component", component: ShellComponent },
            { name: "profile", path: "profile", component: ShellComponent },
            { name: "datapacks", path: "datapacks", component: ShellComponent },
        ],
    },
    {
        name: "app",
        path: "/app",
        component: WebEditorComponent,
    },
];

const router = createRouter({
    history: createWebHashHistory("/"),
    routes,
});

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
