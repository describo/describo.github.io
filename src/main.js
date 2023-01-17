import "./assets/tailwind.css";
import "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
