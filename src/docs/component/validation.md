---
title: validation
---

# Data Validation

Data validation is extremely important. When using this component with data created in your
application, it's recommended that you pass your data through the helpers this component uses to
ensure that you data won't be rejected by the component. Or worse, cause unexpected behaviour.

## Validate entity @id

This is so important that it has its [own page explaining it](/docs/component/identifiers).

```JS
import { validateId } from "@describo/crate-builder-component/src/crate-builder/CrateManager/validate-identifier.js"

const { isValid } = validateId({ id: "LICENCE.md", type: 'File' })
```

::: tip

See
[https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/validate-identifier.spec.js](https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/validate-identifier.spec.js)
for examples of how to use this method.

:::

::: info

Checkout the code:
[https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/validate-identifier.js#L4](https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/validate-identifier.js#L4)

:::

## Validate a profile

Included in this bundle is a method you can use in your own application to validate the profile. You
should validate your profile `before` passing it to the component.

```JS
import validateProfile from "@describo/crate-builder-component/src/crate-builder/helpers.js"

const profile = { ... }
if (profile) {
    let result = validateProfile(profile);
    if (!result.valid) console.log("Profile errors", { ...result });
}
```

::: info

Checkout the code:
[https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/helpers.js#L4](https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/helpers.js#L4)

:::

## Validate acceptable URL's

This method will tell you if a URL is valid in describo's eyes. A valid url is anything starting
with `http, https, ftp, ftps` and all `arcp` identifiers.

```JS
import { isURL } from "@describo/crate-builder-component/src/crate-builder/CrateManager/lib.js"

let url = `a url to check`
const isValid = isURL(url)
```

::: info

Checkout the code:
[https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/lib.js#L16](https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/lib.js#L16)

:::

## Normalise an entity

There are a lot of ways an entity definition can cause problems. This method fixes those as much as
it can and throws errors for things that can't be fixed. The method is heavily commented to explain
what it does and why so look there for more information.

::: warning

Describo aims to enforce a strict interpretation of the RO Crate spec. That means, `SHOULD` is
typically treated as `MUST`. This is especially important when creating DATASET entities outside of
describo. They `MUST` end in a trailing slash. This method does that for you. If you don't do this
yourself, you will lose data when the component reads your crate.

:::

```JS
import { normalise } from "@describo/crate-builder-component/src/crate-builder/CrateManager/lib.js"

let entity = { ... an entity definition ... }

// pass in the entity and some identifier to use and
//   you get back an entity with:
//  * a valid @id
//  * an @type array
//  * a name based on @id if not defined.
entity = normalise(entity, i)
```

::: tip

See
[https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/lib.spec.js](https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/lib.spec.js)
for examples of how to use this method.

:::

::: info

Checkout the code:
[https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/lib.js#L37](https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/lib.js#L37)

:::

## Normalise entity @type

Used by the normalise method you probably don't need to use this directly but you can if you want.

```JS
import { normaliseEntityType } from "@describo/crate-builder-component/src/crate-builder/CrateManager/lib.js"

let entity = { ... an entity definition ... }
entity = normaliseEntityType({ entity })
```

::: info

Checkout the code:
[https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/lib.js#L77](https://github.com/describo/crate-builder-component/blob/master/src/crate-builder/CrateManager/lib.js#L77)

:::
