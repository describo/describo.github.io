---
title: Layouts
aside: false
---

**This documentation is valid for the crate-builder-component from v0.40.0.**

# Layouts

The `layouts` section defines how to group properties.

The structure of the layouts section is as follows:

```JSON
    "layouts": [
        {
            "appliesTo": ["Dataset"],
            "about": { "label": "About", "description": "", order: 0 },
            "source": { "label": "Original Source Information", "description": "", order: 1 },
            "who": { "label": "Who", "description": "", order: 2 },
            "permissions": {
                "label": "Permissions",
                "description": "",
                order: 3
            },
            "overflow": {
                "label": "Other",
                order: 4
            }
        },
        {
            "appliesTo": ["Language"],
            "about": { "label": "About", "description": "", order: 0 },
            "source": { "label": "More information", "description": "", order: 1 },
            "overflow": {
                "label": "Other",
                order: 2
            }
        }
    ],
```

Layouts is an array of objects.

The keys (properties) can be anything you want but some keys are special:
`appliesTo, about and overflow`. About is the tab where the entity `@id`, `@type` and `name` will be
shown. AppliesTo defines which entities this layout should be applied to. And overflow is where
properties in the data that are not defined in the profile will be shown.

In the example above we have two layouts.

1. The first layout applies to entities of type Dataset. It has 5 groups (about, source, who,
   permissions and overflow); each has a label and could have a description.
2. The second layout applies to entities of type Language. It has 3 groups (about, source and
   overflow); each has a label and could also have a description.

In each layout you must define an `order` so that the tabs are organised in the order you want.

## Layout selection for entities

When describo loads an entity, it compares the entity `@type` as an array with the appliesTo array,
and, if there is any overlap, the layout will be applied. So, the first layout above would be
applied to the following entities:

```JS
@type = ['Dataset']
@type = ['Dataset', 'RepositoryCollection']
@type = ['RepositoryCollection', 'Dataset']
@type = ['Dataset', 'Organisation']
```

If multiple layouts match (for example: `@type` = ['Dataset', 'Language']), then the first matching
layout will be applied (in this case layout 1).

## Assigning properties to layout groups within the property definition

Adding properties to groups is done in the property definition. Consider a profile with the
following definition of a Dataset:

```JS
classes: {
   Dataset: {
       inputs: [
         {
            id: 'A'
            group: 'about',
         },
         {
            id: 'B''
            group: 'about',
         },
       ]
    }
}
```

In this example, both properties would be shown in the `about` tab and their order would be as
defined in the profile; that is, A would be shown before B.

## Assigning properties to layout groups within the layout itself

You can also define a properties array on the layout itself and use that to put properties into
groups and define the order.

Consider the following profile snippet:

```JS
    "layouts": [
        {
            "appliesTo": ["Dataset"],
            "about": { "label": "About", "description": "", "properties": [ "contributor", "http://schema.org/author" ], order: 0 },
            "overflow": {
                "label": "Other",
                order: 4
            }
        },
    ],
    classes: {
        CreativeWork: {
            ...
            inputs: [
                { id: 'http://schema.org/contributor', ...}
            ]
        },
        Dataset: {
            ...
            subClassOf: ['CreativeWork'],
            inputs: [
                { id: 'http://schema.org/author', ...}
                { id: 'http://schema.org/participant',group: 'about', ... }
            ]
        }
    }
```

In the example above the `about` layout has an extra property: `properties` which is an array of
property names and / or ids. In addition, the Dataset class definition is a `subClassOf`
CreativeWork; which is also defined in the profile.

When Describo encounters a profile like this, it will handle Datasets as follows:

-   It will load all `profile inputs` from the class (Dataset) and any parent classes (CreativeWork)
-   It will then create the layout and assign the inputs to the defined group (in this case, it will
    use the `properties` definition in the layout to group the inputs)
-   Finally, it will order the inputs by the `properties` array.

Note that the `participant` input on Dataset is not part of the properties array but it still ends
up in the right group.
