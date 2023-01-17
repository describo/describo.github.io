import "element-plus/theme-chalk/index.css";
import "./assets/tailwind.css";
import "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";

import ElementPlus from "element-plus";
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
