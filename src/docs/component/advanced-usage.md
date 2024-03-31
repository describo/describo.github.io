---
title: Advanced Usage
aside: false
---

# Advanced Usage

[[toc]]

The component was explicitly designed to be simple to get started with. At a minimum, you can pass
in an RO-crate and the component will display it and make all of schema.org available for
description.

However, in anything but the simplest application, it's highly likely the component will be
interacting with components in the application and need to update relative to changes outside
itself. For this reason, the component exposes the internal CrateManager and some other methods for
the application to effect the internal state of the component itself.

## Usage and setup

Consider the following HTML and JS snippets.

```html
<DescriboCrateBuilder :crate="crate" ref="describo" />
```

```JS
import { ref } from 'vue'
import DescriboCrateBuilder from ...


const describo = ref()

// console.log(describo.value)
// {
//    cm: function(),
//    refresh: function(),
//    setCurrentEntity: function({ id }),
//    setTab: function(tabName)
// }
```

If you connect to the component via a reference, you will get access to an object with the following
properties:

-   cm: the internal CrateManager instance that the component uses to manipulate the data;
-   refresh: a method to tell the current entity to refresh its display;
-   setCurrentEntity({ id }): a method to set the enity to display;
-   setTab(tabName): a method to display the selected tab.

Following are some examples of how you can use these methods.

## Add data to the crate; modify the root dataset and refresh the display

::: warning NOTE!

Be sure to call `refresh()` after you've manipulated the internal crate state if your changes affect
the currently displayed entity. If you don't, you won't see the changes in the UI.

:::

::: tip NOTE

When you manipulate the internal crate state from outside, the `@save` event won't fire so it's up
to you to pull the latest crate from the component - via `cm.exportCrate()` - and save it when you
are ready to. The `@save` event only fires from user interactions in the describo component.

:::

```JS
const { cm, refresh } = describo.value;
cm.setProperty({ id: "./", property: "author", value: 1 });
cm.setProperty({ id: "./", property: "babies", value: 1 });
let e = cm.addEntity({ "@id": "#person", "@type": "Person", name: "a person" });
cm.linkEntity({
    id: "./",
    property: "contributor",
    value: { "@id": e["@id"] },
});
refresh();
```

## Change the tab being displayed

This assumes you've loaded a profile with tabbed grouping.

```JS
const { setTab } = describo.value;
setTab("numbers");
```

::: warning NOTE!

It's up to the application to know what tab to display. The component doesn't check this.

:::

## Set the current entity

```JS
const let { setCurrentEntity } = describo.value;
setCurrentEntity({ id: "#person" });
```

::: warning NOTE!

It's up to the application to know that the entity exists. The component doesn't check this.

:::
