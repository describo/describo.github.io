import "element-plus/theme-chalk/index.css";
import "./assets/tailwind.css";
import "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";
import ShellComponent from "./components/Shell.component.vue";
import WebComponent from "./components/DescriboWeb.component.vue";
import DesktopComponent from "./components/DescriboDesktop.component.vue";
import CrateBuilderComponent from "./components/DescriboCrateBuilder.component.vue";
import ProfileComponent from "./components/DescriboProfile.component.vue";
import DataPackComponent from "./components/DescriboDataPacks.component.vue";
import TutorialComponent from "./components/Tutorial.component.vue";
import UsersComponent from "./components/Users.component.vue";
import AboutComponent from "./components/About.component.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import ElementPlus from "element-plus";
import { createApp } from "vue";
import App from "./App.vue";

const routes = [
    {
        path: "/",
        name: "root",
        component: ShellComponent,
    },
    { name: "users", path: "/describo-users", component: UsersComponent },
    { name: "web", path: "/web", component: WebComponent },
    { name: "desktop", path: "/desktop", component: DesktopComponent },
    { name: "component", path: "/component", component: CrateBuilderComponent },
    { name: "profile", path: "/profile", component: ProfileComponent },
    { name: "datapacks", path: "/datapacks", component: DataPackComponent },
    { name: "tutorial", path: "/tutorial", component: TutorialComponent },
    { name: "about", path: "/about", component: AboutComponent },
];

const router = createRouter({
    history: createWebHashHistory("/"),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 };
    },
});

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
