---
title: Themes
aside: false
---

# Themes

You can override all of the default styles in the application with anything from tailwind. To do
this, provide your own styles after you import the component into your application.

```JS

// Wire it up in your app init

import { createApp } from "vue";
import App from "./App.vue";
import DescriboCrateBuilder from "../crate-builder/index.js";
import "./override-styles.css"; // <-- override the styling in this file.
...
```

## override-styles.css

You can get the override-styles.css file from:
[https://github.com/describo/crate-builder-component/blob/revise-internals/src/app/override-styles.css](https://github.com/describo/crate-builder-component/blob/revise-internals/src/app/override-styles.css).

All of the available css prop's are shown following:

```css
/*

    In all cases you have the full breadth of tailwindcss (https://tailwindcss.com/docs/installation)
    at your disposal.

    For example, to colour the property names red and make them larger:

    .describo-property-name {
        @apply text-red-600 text-2xl
    }

*/


/**************************************
*    Target all properties
**************************************/
.describo-property {
    /* use this to target the whole area of each property */
}
.describo-property-name {
    /* use this to target the property name */
}
.describo-property-value {
    /* use this to target the value of a property */
}
.describo-property-help {
    /* use this to target the help text of a property */
}
.describo-property-help-more {
    /* use this to target the expanded help text of a property */
}
.describo-property-background {
    /* use this to target the background of all properties */
}
.describo-property-heading {
    /* target the label of all properties except core: '@id', '@type' and 'name' */

}
.describo-property-value-readonly {
    /* target properties that are set to readonly */
}
.describo-property-type-entity {
    /* use this to target the autocomplete dropdown when adding an entity */

}


/**************************************
*    Target specific properties
**************************************/
.describo-property-name-id {
    /* specifically target the @id property */
}
.describo-property-name-type {
    /* specifically target the @type property */
}
.describo-property-name-name {
    /* specifically target the name property */
}
.describo-property-name-{property name} {
    /* target a specific, named property */
}


/**************************************
*    Target specific property types
**************************************/
.describo-property-type-datetime {}
.describo-property-type-date {}
.describo-property-type-select {}
.describo-property-type-geo {}
.describo-property-type-number {}
.describo-property-type-map {}
.describo-property-type-value {}
.describo-property-type-time {}
.describo-property-type-text {}
.describo-property-type-url {}


/**************************************
*    Target item links
**************************************/
.describo-render-item-link {
    /* target the whole of an item link */
}


/**************************************
*    Target tab labels
**************************************/
.describo-tab-label {
    /* use this to target the tab label */
}
.describo-tab-description {
    /* use this to target the tab description */
}

```
