---
title: usage and configuration
aside: false
---

# Component usage and configuration

[[toc]]

::: tip

Be sure to also read the [next page about Data Validation](./validation).

:::

## Basic Usage - pass in crate and profile

In it's most basic form, the component is plugged in as:

```JS
<describo-crate-builder
    :crate="data.crate"
    :profile="data.profile"
    />
</describo-crate-builder>
```

Pass in the crate file and optionally a profile.

## Full Usage

```JS
<describo-crate-builder
    :crate="data.crate"
    :profile="data.profile"
    :lookup="lookup"
    :entityId="data.entityId"
    :enable-context-editor="true"
    :enable-crate-preview="true"
    :enable-browse-entities="true"
    :enable-template-save="true"
    :enable-internal-routing="true"
    :enable-reverse-link-browser="true"
    :purge-unlinked-entities="true"
    :readonly="false"
    :webcomponent="false"
    :tabLocation="'left'"
    :resetTabOnEntityChange="true"
    :resetTabOnProfileChange="true"
    :showControls="true"
    @ready="ready"
    @error="handleErrors"
    @warning="handleWarnings"
    @navigation="handleNavigation"
    @save:crate="saveCrate"
    @save:entity:template="saveTemplate"
    />
</describo-crate-builder>
```

## Properties

::: tip

All properties are reactive. If you change them in the outer application they will update inside the
component.

:::

-   `crate`: The RO Crate data. Note - this is the JSON object `not` a path to a file to be loaded.
    Your app needs to do the loading.
-   `profile`: The profile. Note - this is the JSON object `not` a path to a file to be loaded. Your
    app needs to do the loading.
-   `entityId`: Setting this property to an `@id` inside the crate will trigger the component to
    load that entity.
-   `lookup`: Pass in an instance of a class the component can use to lookup entity templates,
    datapacks or entities. The signature of the class must be:

```JS
export class Lookup {
    constructor() {
    }
    entityTemplates({ type, filter, limit = 5 }) {
        // code to lookup entity templates in *YOUR* system
    }
    dataPacks({ query, fields, datapack, queryString}) {
        // code to lookup data in a datapack somehow
    },
    entities({ query, fields, datapack, queryString}) {
        // code to lookup entities somehow
    }
}
```

::: info

> What is the difference between datapack lookups and entity lookups?
>
> A datapack is a bundle of JSON-LD data that has typically been curated by a specialist who has
> expertise in that area. Consider a datapack of countries. The data in the pack is likely to be
> correct as it has not been user generated.
>
> On the other hand, entity lookups support lookups to repositories where user generated metadata
> has been deposited. In this case, if a user creates an entry for a country, their 'version' of the
> country would overwrite the datapack version if they are both stored in the same index.
>
> By separating these two lookups the application providing the lookups can route the queries to the
> different indexes based on the type of query being requested.

:::

::: tip

See
[https://github.com/describo/crate-builder-component/blob/master/src/app/lookup.js](https://github.com/describo/crate-builder-component/blob/master/src/app/lookup.js)
for an example. In fact, you probably want to start from there.

:::

-   `enable-context-editor`: true | false: `(default: true)` : enable / disable the context editor
    control
-   `enable-crate-preview`: true | false: `(default: true)` : enable / disable the crate preview
    control
-   `enable-browse-entities`: true | false: `(default: true)` : enable / disable the browse entities
    control
-   `enable-template-save`: true | false: `(default: false)` : enable / disable the entity and crate
    template saving controls
-   `enableInternalRouting`: true | false: `(default: false)`: enable / disable the internal router
    which updates the location whenever an entity is selected. If no router is found (ie inside a
    web component or just not used), routing is turned off anyway. Most likely you want to leave the
    component to deal with this or listen out for the `navigation` event and handle it yourself if
    the component can't.
-   `enableReverseLinkBrowser`: true : false: `(default: true)`: enable / disable the reverse link
    browser. If enabled, it can be shown as a right sidebar as required.
-   `purgeUnlinkedEntities`: true : false: `(default: true)`: purge unlinked entities from the crate
    before emitting the crate for saving
-   `readonly`: true | false: `(default: false)` : if set to true all of the controls to edit that
    the data are turned off. The crate is set into a mode where it is readonly.
-   `webComponent`: true | false: `(default: false)` : Setting this to true alters the behaviour of
    some components when the crate builder is used as a web component.
-   `tabLocation`: left | top | right | bottom: `(default: left)` : Specify where the tabs are shown
    when profiles define grouping.
-   `resetTabOnEntityChange`: true | false: `(default: true)` : When true, if a layout is applied
    and the entity changes, the UI will navigate to the about tab. If false, that doesn't happen.
-   `resetTabOnProfileChange`: true | false: `(default: true)` : When true, if a layout is applied
    and the profile changes, the UI will navigate to the about tab. If false, that doesn't happen if
    there is a matching tab. Otherwise it will go back to the about tab.
-   `showControls`: true | false: `(default: true)` : Show or hide the controls bar. Useful if you
    want to provision those controls in your own application.
-   `showControls`: true | false: `(default: true)` : Show or hide the controls bar. Useful if you
    want to provision those controls in your own application.
-   `language`: en | hu `(default: en)` : Sets the component's localization to the given language.
    Currently English (en) and Hungarian (hu) are supported.

## Events

-   `@ready`: When you pass a crate into the component the internal data view first needs to be
    created. This takes longer as the size of the crate grows. Further, downloading large crates in
    your app to pass into the component can also be slow. So, if you want to put a loading indicator
    over the top of the component when you first start the download to when the crate is ready to be
    used, listen for this event to cancel the indicator.
-   `@error`: If the component fails to load the crate it will emit an error message with more
    information. You should listen for this event and handle it accordingly in your application. It
    emits an object with one property, `errors`.
-   `@warning`: If the component needs to warn you about issues with the data it will emit this
    event. It emits an object with one property, `warnings`.
-   `@navigation`: The component emits a navigation event whenever an entity is selected. The output
    is an object with `@id`, `@type` and `name` properties which your app can use to enable
    navigation (back, forward).
-   `@save:crate`: whenever the crate changes internally, this event will be emitted with the full
    crate for your app to save or handle in some way
-   `@save:entity:template`: this event emits an entity template for re-use within this crate or
    others. It's up to your app to save it and make it available to the crate-builder via the
    `lookup` interface defined above.

### Warnings and errors

You should listen for these events and handle them accordingly. Warnings do not stop the data
component from rendering the crate but errors do. The structure is as follows:

In both cases, the object keys are the type of error and the value is an object with two properties:
a `description` of the error and the entity id's that caused it in the `data` property.

-   Warnings

```JSON
{
    "invalidIdentifier": {
        "description": "The entity identifier (@id) has spaces in it that should be encoded. Describo will do this to pass the validate test but the data must be corrected manually.",
        "data": [
          "#Erakor, Lelepa",
          "#South Efate",
          "#geo_Erakor, Lelepa"
        ]
    },
    ...
}
```

-   Errors

```JSON
{
  "invalidIdentifier": {
    "description": "The entity identifier (@id) is not valid. See https://github.com/describo/crate-builder-component/blob/master/README.identifiers.md for more information",
    "data": []
  },
  "missingTypeDefinition": {
    "description": "The entity does not have a defined type (@type).",
    "data": []
  },
  ...
}
```
