---
title: Data Types
---

# Data Types

The types property tells Describo what type of data can be provided for a property. It can be an
array of classes like `["Person", "Organisation"]` or simple data types like
`["Text", "Number", "Date"]`. It can also include the special `ANY` type to indicate that an entity
of any type can be attached at that location.

The simple data types you can define for a type are as follows:

## Text

-   `Text`: a simple text box

```JSON
{
    "id": "...",
    "name": "...",
    ...
    "type": ["Text"]
},
```

Constraints can be defined for this type:

-   `minLength`: minimum required length for value
-   `maxLength`: maximum allowed length for value
-   `regex`: a regular expression the value has to match
-   `dateFormat`: one or many (array) of possible date formats to be matched: see:
    [Day.js formats](https://day.js.org/docs/en/display/format). In some cases a date picker can be
    difficult to use and an ISO String is not what is required. Use this constraint to get something
    that looks like a date but without the limitations of the date picker.

::: info

Examples at
[https://github.com/describo/crate-builder-component/blob/master/src/examples/profile/profile-with-constraints.json](https://github.com/describo/crate-builder-component/blob/master/src/examples/profile/profile-with-constraints.json)

:::

## TextArea

-   `TextArea`: a text area box that expands to the size of its content

```JSON
{
    "id": "...",
    "name": "...",
    ...
    "type": ["TextArea"]
},
```

Constraints can be defined for this type:

-   `minLength`: minimum required length for value
-   `maxLength`: maximum allowed length for value
-   `regex`: a regular expression the value has to matched

::: info

Examples at
[https://github.com/describo/crate-builder-component/blob/master/src/examples/profile/profile-with-constraints.json](https://github.com/describo/crate-builder-component/blob/master/src/examples/profile/profile-with-constraints.json)

:::

## Boolean

::: info

From version 0.60.0

:::

-   `Boolean`: A switch to input true or false.

```JSON
{
    "id": "...",
    "name": "...",
    ...
    "type": ["Boolean"]
},
```

::: tip

Note that this primitive stores JS 'true' && 'false' not 'True' && 'False' as described in
schema.org. This is valid in the JSON-LD file and though it doesn't strictly conform to schema.org,
the intent is clear and unambiguous.

:::

## Number

-   `Number`: A number input

```JSON
{
    "id": "...",
    "name": "...",
    ...
    "type": ["Number"]
},
```

Constraints can be defined for this type:

-   `minValue`: minimum possible value to be entered
-   `maxValue`: maximum possible value to be entered
-   `numberType`: one or many (array) of "any", "long", "int", "float", "double". It maybe an array
    to allow specifying any of the possible numberType values

::: info

Examples at
[https://github.com/describo/crate-builder-component/blob/master/src/examples/profile/profile-with-constraints.json](https://github.com/describo/crate-builder-component/blob/master/src/examples/profile/profile-with-constraints.json)

:::

## Date, DateTime, Time

-   `Date`: A date input
-   `DateTime`: A date time input
-   `Time`: A time input

```JSON
{
    "id": "...",
    "name": "...",
    ...
    "type": ["Date", "DateTime", "Time" ]
},
```

## Geo

-   `Geo`: A geo selection input; allows selecting an area or a single point

```JSON
{
    "id": "...",
    "name": "...",
    ...
    "type": ["Geo"]
},
```

## URL

-   `URL`: Allows the user to input a URL

```JSON
{
    "id": "...",
    "name": "...",
    ...
    "type": ["URL"]
},
```

Returns:

```JSON
{ @id: ${URL}, @type: 'URL', name: ${URL} }
```

Will report an error if the user types in something that doesn't look like a URL. Accepted protocols
are: 'http', 'https', 'ftp', 'ftps', 'arcp'.

## Select, SelectURL, SelectObject

-   `Select`: A control where the user can select from a number of predefined options:

```JSON
{
    "id": "...",
    "name": "...",
    ...
    "type": ["Select"],
    "values": [
        "Yes = in copyright",
        "No - out of copyright",
    ]
},
```

-   `SelectURL`: A control where the user can select from a number of predefined URLs and get back a
    URL object:

```JSON
{
    "id": "...",
    "name": "...",
    ...
    "type": ["SelectURL"],
    "values": [
        "http://schema.org",
    ]
},
```

-   `SelectObject`: A control where the user can select from a number of complete objects defined in
    the profile:

```JSON
{
    "id": "...",
    "name": "...",
    ...
    "type": ["SelectObject"],
    "values": [
       { "@id": "http://schema.org/Person", "@type": "rdfs:Class", name: 'Person', description: 'It's people!" },
       { "@id": "http://schema.org/Organization", "@type": "rdfs:Class", name: 'Organization', description: 'It's not people!" },
    ]
},
```

returns the selected object as defined and links it into the graph.

::: tip

If you need to define objects in your profile as pre-created bits of configuration to inject, then
you are likely better off creating a datapack and just wiring up lookups from the Describo component
to the service hosting the pack. We recommend elastic search as it's easy to run and manage, and
Describo will emit an elastic query for you to send to the server.

:::

## Value

-   `Value`: A control where a specified value is set for a property

```JSON
{
    "id": "...",
    "name": "...",
    ...
    "type": "Value",
    "value": "red"
}
```
