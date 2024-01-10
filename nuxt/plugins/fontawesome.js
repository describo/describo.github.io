// For Nuxt 3
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faUsersRectangle as fasUsersRectangle,
    faStar as fasStar,
    faUser as fasUser,
    faCode as fasCode,
    faChevronLeft as fasChevronLeft,
    faChevronRight as fasChevronRight,
    faCircleInfo as fasCircleInfo,
    faBullhorn as fasBullhorn,
} from "@fortawesome/free-solid-svg-icons";

import { faWindows, faApple, faLinux, faGithub } from "@fortawesome/free-brands-svg-icons";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
    fasUsersRectangle,
    fasStar,
    fasUser,
    fasCode,
    fasChevronLeft,
    fasChevronRight,
    fasCircleInfo,
    fasBullhorn,
    faWindows,
    faApple,
    faLinux,
    faGithub
);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
