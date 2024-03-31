---
title: Classes and Inputs
outline: deep
---

# Classes and Inputs

## Classes

This section contains class definitions users can use in their descriptions. The section is an
object and the keys are the `@type`. It provides the definition of what can and can't be described
to the UI.

The overall structure of a class definition is as follows:

```JSON
"classes": {
    "Dataset": {
        "definition": "override",
        "subClassOf": [],
        "inputs": [
            ... the properties a user can associate to this class
        ]
    }
}
```

Each class definition has three properties that are all required:

-   `definition`: `override` or `inherit`. If set to `inherit`, Describo will enable the user to add
    properties from the class hierarchy defined in schema.org if a matching class exists. So for
    example, if you define a Dataset class (which also exists in schema.org), then inherit will
    automatically populate all of the schema.org properties into this definition for you (including
    up the parent class chain all the way back to Thing).

    If set to override, the user will only be able to use the properties defined in the inputs to
    this entity definition. That is, if you want the user to have a limited set of properties to
    use, set this to `override`.

    If you wish to define properties additional to those defined in schema.org then define them in
    the inputs array.

    If you describe a class that is not defined in schema.org and the definition is set to inherit,
    then the parent hierarchy will be set to Thing so that the class inherits a minimum
    configuration from schema.org.

-   `subClassOf`: An array of classes that this class is a subclass of.

-   `inputs`: An array of objects that define the properties the user can define for this class. All
    of these properties will be rendered in the UI as placeholders. That will give you a UI that
    looks like a traditional form with entries for all of the things the user can define.

## Inputs

Each input in the `inputs` array for a class has the following structure:

```JSON
{
    "id": "https://schema.org/name",
    "name": "name",
    "label": "Title",
    "help": "The name of this dataset",
    "required": true,
    "multiple": false,
    "hide": "false",
    "readonly": "false",
    "type": ["Text"]
},
```

-   `id`: a URL which describes the property
-   `name`: the name of the property
-   `label`: the label to use for this property in the UI. If this is not defined, the name will be
    used.
-   `help`: Text explaining what this property is about.
-   `required`: Whether this property is required to have a value and be defined. This will display
    in the UI but it does not stop the user from saving the crate if the property does not have a
    value.
-   `multiple`: true || false. Whether the value for this property is a singleton or an array of
    values.
-   `hide`: true || false (default: false). Whether the property should be hidden.
-   `readonly`: true || false (default: false). Whether the property should be shown but made
    readonly.
-   `group`: If a layout is defined, this defines the group to which the property is added.
-   `type`: An array of data types or entities that can be the value for this input.

Properties can link to entities:

```JSON
{
    "id": "https://schema.org/author",
    "name": "author",
    "label": "Author",
    "help": "The author of this dataset",
    "required": true,
    "multiple": false,
    "type": ["Person", "Organization"]
},
```

In this example the profile tells the UI that the value of the author property can be an entity of
type Person or Organization. The UI will then guide the user in the creation of those entities or
linking an entity either existing in the crate or looked up from a datasource elsewhere.

Please see the [detailed documentation on types](./types.md)

### name property

The name property on all entities is handled as a special case in Describo so you don't need to
define it in the profile. Indeed, it will not be used.

### input definitions

Any inputs defined in the profile will automatically be rendered to the screen. This is true whether
the definition is set to `override` or `inherit`. So, if you want a set of properties rendered by
default (ie show a row for each property as a guide to the user) then define those properties in the
inputs of the relevant type.

## ANY Class

When defining what a property can link to, you can select from a given set of types like Text or
Number (see the types documentation linked above). Anything else will be treated as an entity. For
example, specifying `type: ['Text', 'Person', 'Organisation']` allows the user to attach some
textual content or link an entity of type Person or Organisation. However, what if the user should
be able to attach an entity of any type?

The `ANY` class is a special indicator to Describo to give the user the ability to attach an entity
of any type at that point. This is required for things like actions and relationships (see
[the documentation for resolve](./resolve.md)) where you are trying to describe structures between
groups of entities.

Example:

```JSON
{
    ...
    "name": "relationship",
    ...
    "type": ["ANY"]
},
```
