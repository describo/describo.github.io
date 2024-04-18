---
title: Associations
aside: false
---

# Associations

JSON-LD is built around the idea that an entity is related to another via a property association.
For example:

```JS
[
    {
        '@id': '#A',
        '@type': 'Dataset',
        author: { "@id": '#B'}
    },
    {
        '@id': '#B',
        '@type': 'Person',
        '@reverse': {
            author: { "@id": '#A'}
        }
    }
]
```

In this example we see that entity `#A` has an association to `#B` via the `author` property. We
also see that `#B` has a reverse relationship back to `#A` via `@reverse.author`. But what if we
wanted to explicitly code the relationship from `#B` to `#A`? Maybe we want the property to be
called `isAuthorOf`.

We would them get:

```JS
[
    {
        '@id': '#A',
        '@type': 'Dataset',
        author: { "@id": '#B'}
       '@reverse': {
            isAuthorOf: { "@id": '#B'}
        }
    },
    {
        '@id': '#B',
        '@type': 'Person',
        isAuthorOf: { "@id": '#A'}
        '@reverse': {
            author: { "@id": '#A'}
        }
    }
]
```

Now, when inspecting the `#B` entity, we clearly see that `#B` `is the author of` `#A`. Whilst we
still have the reverse associations, semantically, we've defined a descriptive, forward looking
association via the `isAuthorOf` property.

To support this, you can define the associations you want in the profile, viz:

```JS
{
    "metadata": {
        ...
    },
    "propertyAssociations": [
        {
            "property": "keywords",
            "propertyId": "https://schema.org/keywords",
            "inverse": { "property": "isKeywordOf", "propertyId": "https://schema.org/isKeywordOf" }
        },
        {
            "property": "hasMember",
            "propertyId": "https://schema.org/hasMember",
            "inverse": {
                "property": "isMemberOf",
                "propertyId": "https://schema.org/isMemberOf"
            }
        }
    ],
    "classes": {
        ...
    }
}
```

In this example we are define two associations:

1. In the first we are saying that `keywords` has an inverse association of `isKeywordOf`.
2. In the second we are saying that `hasMember` has an inverse association of `isMemberOf`

In both cases we also define the propertyId - this is important so that the context can be
automatically updated as associations are added.

With this data structure, whenever either end of the association is created, the inverse will also
be created.

So, defining a `keyword association on #A` will result in an `isKeywordOf association on #B`.
Further, it works both ways. Defining `isKeywordOf on #A` results in `keywords on #B`. You don't
need to redefine it the other way; describo will do that for you.

Finally, this is agnostic to the entity type. Whenever that property matches, the inverse will also
be created.
