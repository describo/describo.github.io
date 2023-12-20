import "element-plus/theme-chalk/index.css";
import "./assets/tailwind.css";
import "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";
import ShellComponent from "./components/Shell.component.vue";
import WebComponent from "./components/pages/DescriboWeb.component.vue";
import DesktopComponent from "./components/pages/DescriboDesktop.component.vue";
import CrateBuilderComponent from "./components/pages/DescriboCrateBuilder.component.vue";
import ProfileComponent from "./components/pages/DescriboProfile.component.vue";
import DataPackComponent from "./components/pages/DescriboDataPacks.component.vue";
import TutorialComponent from "./components/pages/Tutorial.component.vue";
import UsersComponent from "./components/pages/Users.component.vue";
import AboutComponent from "./components/pages/About.component.vue";
import LearnComponent from "./components/pages/Documentation.component.vue";
import FaqsComponent from "./components/pages/Faqs.component.vue";
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
    { name: "learn", path: "/learn", component: LearnComponent },
    { name: "faqs", path: "/faqs", component: FaqsComponent },
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
