---
title: Lookups
aside: false
---

# Lookups

This section defines datasources to be used as lookup endpoints for pre-described data. Consider a
language definition. Rather than asking a user to create an entity of type Language and define all
the relevant properties to adequately describe it, you could just provide a lookup to a pre defined
Language definition that they can inject into the crate.

The overall structure of the lookup section is as follows:

```JSON
"lookup": {
    "Language": {
        "fields": [
            "@id",
            "name",
            "alternateName",
            "iso639-3",
            "austlangCode",
            "glottologCode",
            "languageCode"
        ],
        "datapacks": [
            "https://raw.githubusercontent.com/describo/data-packs/master/data-packs/languages/glottolog-language-data-pack.json",
            "https://raw.githubusercontent.com/describo/data-packs/master/data-packs/languages/austlang-language-data-pack.json"
        ]
    }
}
```

The lookup object is keyed on the name of the Entity for which data lookups are required. In this
case we're definining lookups for entities of type Language.

Each lookup definition has two properties that are both required:

-   `fields`: an array of strings defining the properties on which to perform a lookup. The describo
    component will assemble an Elastic Search query based on these properties that your environment
    can then execute against your elastic search instance. In that case, it is assumed that the
    datapack data has already been loaded into elastic search within your environment.
-   `datapacks`: an array of URL's to accessible data sources serving JSON-LD snippets to be used
    for the lookup. This can be empty and the assumption is that your lookup service will have the
    relevant data for the lookup. That said, if the lookup data is public, putting it online and
    definining it here allows any user of this profile to also benefit from that dataset as the
    Describo application will dynamically load the dataset for use.

Lookups are specifically described in the documentation for the
[Crate Builder Component.](/docs/component/usage-and-configuration.html)
