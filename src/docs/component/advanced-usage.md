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
```

If you connect to the component via a reference, you will get access to an object with the following
properties:

-   `cm`: the internal CrateManager instance that the component uses to manipulate the data;
-   `pm`: the internal ProfileManager instance; makes handling profiles/schema.org classes easy;
-   `state`: the internal state manager instance with controls to navigate back and forth and patch
    the current state;
-   `refresh`: a method to tell the current entity to refresh its display;
-   `setCurrentEntity({ id })`: a method to set the enity to display;
-   `setTab(tabName)`: a method to display the selected tab;
-   `toggleReverseLinkBrowser`: a method to open / close the reverse link browser.

Following are some examples of how you can use these methods.

## jsdoc docs

You should also consult the documentation for Crate Manager (cm), Profile Manager (pm) and Editor
State (state) @
[https://describo.github.io/crate-builder-component/](https://describo.github.io/crate-builder-component/)

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

## Add a fully resolved file or folder path to the crate

As the component is embdeded into another application, it's likely the outer application will want
to add files and folders to the crate. This can be done easily with cm from your application.

```JS
cm.addFile('/a/b/c/file.txt')
```

This will create the full path hierarchy of the file, starting from the root dataset and connected
via hasPart (as required by the spec) with the folders as type Dataset and finally linking the file.

```JS
cm.addFolder('/a/b/c')
```

As described above but with only the folder paths.

## Interact with the internal editor state

The component maintains an internal editor state that has the history of paths taken through the
crate. You can access that via `state.editorState`, e.g.:

```JS
// navigate back and forward through the history
state.editorState.back()
state.editorState.forward()
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
