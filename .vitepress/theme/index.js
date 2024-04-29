import "./tailwind.postcss";
import {
    faCircleInfo,
    faLightbulb,
    faArrowUpRightFromSquare,
    faPersonChalkboard,
    faUsers,
    faCode,
    faBookOpenReader,
    faStar,
    faDownload,
    faRoute,
    faChevronLeft,
    faChevronRight,
    faChampagneGlasses,
    faBug,
    faCircleQuestion,
    faCheck,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faWindows, faApple, faLinux } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCircleInfo);
library.add(faLightbulb);
library.add(faArrowUpRightFromSquare);
library.add(faPersonChalkboard);
library.add(faBookOpenReader);
library.add(faStar);
library.add(faCode);
library.add(faUsers);
library.add(faDownload);
library.add(faRoute);
library.add(faWindows);
library.add(faLinux);
library.add(faApple);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faChampagneGlasses);
library.add(faBug);
library.add(faCircleQuestion);
library.add(faCheck);
library.add(faXmark);

import DefaultTheme from "vitepress/dist/client/theme-default/index.js";
import MyLayout from "./MyLayout.vue";

// register components globally
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import CardComponent from "../../src/vue-components/Card.vue";
import FeatureComponent from "../../src/vue-components/Feature.vue";
import FooterComponent from "../../src/vue-components/Footer.vue";
import ImageComponent from "../../src/vue-components/Image.vue";
import InfoPanelComponent from "../../src/vue-components/InfoPanel.vue";
import LinkComponent from "../../src/vue-components/Link.vue";
import StackComponent from "../../src/vue-components/Stack.vue";
import TipComponent from "../../src/vue-components/Tip.vue";

import { onMounted, watch, nextTick } from "vue";
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";

import "./index.css";

export default {
    ...DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app }) {
        app.component("CardComponent", CardComponent);
        app.component("FeatureComponent", FeatureComponent);
        app.component("FooterComponent", FooterComponent);
        app.component("ImageComponent", ImageComponent);
        app.component("InfoPanelComponent", InfoPanelComponent);
        app.component("LinkComponent", LinkComponent);
        app.component("StackComponent", StackComponent);
        app.component("TipComponent", TipComponent);
        app.component("FontAwesomeIcon", FontAwesomeIcon);
    },
    setup() {
        const route = useRoute();
        const initZoom = () => {
            mediumZoom("[data-zoomable]", { margin: 20, background: "#fff" });
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    },
};
