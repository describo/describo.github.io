---
title: Crate Manager
aside: false
---

# Crate Manager

[[toc]]

The component has a built in RO-Crate manager that knows how to work with and manipulate the data
based on actions within the component. As this is now available to users of the component it's worth
noting that it can be used in your application without using the component.

## Initialisation and usage

```JS

import { CrateManager } from "@describo/crate-builder-component/src/crate-builder/CrateManager/crate-manager.js";

let crate = {
    '@context': [...],
    '@graph': [...]
}
const cm = new CrateManager({ crate });
```

```JS
// get the root dataset
let rd = cm.getRootDataset()
```

```JS
// get an entity
let e = cm.getEntity({ id: './' })
```

```JS
// get an iterable to all entities
let es = cm.getEntities()
for (let e of es) {
    // do something with e
}
```

```JS
// add an entity
let e = cm.addEntity({ '@id': ..., '@type': ..., ... })
```

And much more. See the
[API documentation for more information and examples](https://describo.github.io/crate-builder-component)

## How does it compare to ro-crate-js

There is an NPM package for manipulating RO-Crates called `ro-crate-js`. `CrateManager` does the
same as that package but in a very different way.

::: tip

<div class="flex flex-rows space-x-4 justify items-center">
    <div>
    <i class="text-green-600 fa-solid fa-check fa-3x"></i>
    </div>
    <div>
        CrateManager is licensed with the permissive MIT licence.
    </div>
</div>

:::

::: danger

<div class="flex flex-rows space-x-4 justify items-center">
    <div>
    <i class="text-red-600 fa-solid fa-xmark fa-3x"></i>
    </div>
    <div>
        ro-crate-js is licensed with the GPLv3 which may impact where you can use it.
    </div>
</div>

:::

See the API documentation
([https://describo.github.io/crate-builder-component](https://describo.github.io/crate-builder-component))
for what you can do and whether it fits your needs.

As at January 2024, Crate Manager is significantly smalller than the ro-crate-js library.

| library      | Lines of Code | %   |
| ------------ | ------------- | --- |
| CrateManager | 798           | 69  |
| ro-crate-js^ | 1164          | 100 |

^The ro crate schema was removed from the defaults file for this count.
