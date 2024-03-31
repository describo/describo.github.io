---
title: profile structure
---

# Profile Structure

The structure of a profile is as follows:

```JSON
{
    "metadata":  {},
    "context": {},
    "layouts": {},
    "localisation": {},
    "resolve": [],
    "classes": {},
    "lookup": {},
}
```

## Metadata

The metadata section is used to describe the profile. There are 4 properties you must provide:

-   `name`: A short name for this profile. This may be provided in the UI so it should make sense to
    a user.
-   `description`: A short description for this profile.
-   `version`: A version number.
-   `warnMissingProperty`: true or false: Whether or not the UI should warn when data is found in an
    RO-crate but a definition for is not found in the profile.
-   `keywords`: An array of keywords to enable lookups of this profile.

## Context

The context section allows you to provide a context for this profile. Although optional, it is
highly recommended that you provide a context that suits the profile you have created. Describo will
then disable the context editor and emit crates with this context in it.

See [All about contexts](./contexts.md) for more information.

## Layouts

This section defines how to group properties and display them in tabs.

See [Layouts for a detailed account of these sections.](./layouts.md)

## Localisation

The localisation sections allows you to translate classes (e.g. Author) and primitives (e.g. Text,
Date etc) into your own language.

See [All about localisation](./localisation.md) for more information.

## Resolve

The resolve section allows you to specify that entities linked from linking type entities (e.g.
Relationships and Actions - Create, Move, Update etc.) are to be displayed as well.

See [All about resolve](./resolve.md) for more information.

## Classes

This section contains class definitions users can use in their descriptions.

See [Classes and Inputs for a detailed account of this section.](./classes-and-inputs.md)

## Lookup

This section defines datasources to be used as lookup endpoints for pre-described data. Consider a
country definition. Rather than asking a user to create an entity of type Country and define all the
relevant properties to adequately describe it, you could just provide a lookup to a pre defined
Country definition that they can inject into the crate.

See [Lookups for a detailed account of this section.](./lookups.md)
