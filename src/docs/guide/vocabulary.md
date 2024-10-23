---
title: Creating your own Vocabulary
---

# Creating your own Vocabulary

::: tip Info

To use the Vocabulary tool you need to first
[register with describo.cloud.](/docs/guide/register.html) Two months of free access will be
provided upon registration.

:::

Whilst RO-Crate is primarily composed around schema.org definitions, it does
[draw on other Ontologies (or vocabularies)](https://www.researchobject.org/ro-crate/specification/1.1/metadata.html#additional-metadata-standards)
as required. For example, Object and Collection as defined in Portland Common Data Model are mapped
into the namespace as RepositoryObject and RepositoryCollection respectively. The point of this is
to say that we can create our own custom Vocabularies whilst still conforming to the RO Crate
specification.

The Vocabulary tool in Describo helps you do this and this documentation will show you how.

<ImageComponent src="/images/guide-vocabulary/vocab1.webp"></ImageComponent>

## Vocabulary Controls

The first thing you'll notice is that there is a set of controls along the very top to:

-   Open the Vocabulary definition in your browser: view the HTML rendering of the Vocabulary.
-   Load the Vocabulary into Describo: load the generated profile into Describo.
-   Save Vocabular.
-   Trash Icon: this deletes the Vocabulary.

## Define your Vocabulary

The first step in creating a new Vocabulary is to define it!

On the `Initialise` tab we can define the Vocab metadata including:

-   giving it a name,
-   providing a description about it,
-   setting a version, and,
-   defining keywords.
-   The toggle "Enable Entity Timestamps" allows us to turn timestamping on and off. If set to true,
    Describo will add two extra fields to each entity: "hasCreationDate and hasModificationDate"
    which track the date of creation and last modification respectively for every entity. This is
    useful in the context of a cultural collection manager where you want to track dates related to
    entity creation and modification.

## Known Ontologies

To ease the process of creating a new Vocabulary, and to benefit from the work of previous efforts,
Describo offers lookups into classes and properties defined in MODS, PREMIS-3, RiC-O, and SKOS.

## Class Definitions

The next step in creating your Vocabulary is defining the classes (entities) that you wish to
describe. In the image following you'll see that a number of classes are already defined (e.g.
Thing, Person, Event et. al.). These are required by the RO-Crate spec in order to produce a valid
RO-Crate. As such, these cannot be removed.

To create a new class we can just type the name into the input box ("Add a class to your
Vocabulary") and if there is a match in one of the known ontologies, that can be selected. If not,
pressing enter creates the new class. In the image we are about to create a new class `TKLabel`.

<ImageComponent src="/images/guide-vocabulary/vocab2.webp"></ImageComponent>

When the class is created, we can see that the identifier is set to `#TKLabel`. This signifies that
the definition of the class is internal to the Vocabulary. Further, we can (and should) provide a
description so others know what this class stands for.

The definition can be `override` or `inherit`. If you wish to have a tightly controlled set of
properties for a given class, then set this to `inherit` and the define the exact properties you
wish on the Properties tab.

Finally, you can specify the parent class hierarchy.

<ImageComponent src="/images/guide-vocabulary/vocab3.webp"></ImageComponent>

## Property Definitions

Classes (entities) have properties. On the Properties tab we can specify what those properties are
and what type of data they can contain. Consider the following image:

<ImageComponent src="/images/guide-vocabulary/vocab4.webp"></ImageComponent>

In it we can see that the `TKLabel` class has been selected and it has 5 properties defined for it:
`alternateName,description,identifier,potentialAction,sameAs`. When defining this class I know that
I'm only interested in defining the @id as the URL of a TK Label and the name as its name. These
other properties, which were inherited from the parent class of Thing, are not required. So, I can
remove all of them.

::: tip info

Remember to set the class definition to `override` **before** altering the properties.

:::

<ImageComponent src="/images/guide-vocabulary/vocab5.webp"></ImageComponent>

At this stage I've created a new class, defined some metadata for it, and decided what properties it
should have (nothing other than @id, @type and name). But I can't use it in my descriptions as I
haven't linked it to something.

Since I want to create a dataset of TKLabels, it makes sense to link these from the root dataset. In
order to do that, I need to tell Describo how to do that. Consider the following image.

<ImageComponent src="/images/guide-vocabulary/vocab6.webp"></ImageComponent>

In the image the `Dataset` class is selected and we can see a number of properties that can be
defined. In the middle there is a property `hasPart`. Let's alter that so that we can add an entity
of type `TKLabel` to that property.

<ImageComponent src="/images/guide-vocabulary/vocab7.webp"></ImageComponent>

Expanding the property definition shows us what we can do and there's a lot going on so let's go
through this step by step.

-   A property has metadata: an `identifier`, a `name`, a `description` or a `label` to show in
    place of the name.
-   A property can be `required`.
-   A property can have `multiple` values.
-   A property can be shown by Describo as `readonly`.
-   A property can be `hidden` from biew by Describo.
-   A property can have specific data attached to it.
-   In this image we see that hasPart allows entities of @type `CreativeWork`, `URL`, `File` and
    `Dataset`. Let's say we can also add entities of @type `TKLabel`.

Now, whenever an entity of @type Dataset is being edited, the hasPart property will allows us to
define entities of type TKLabel!

In the next image we can see this in action on the Describe tab. Notice that the hasPart property
has a button for adding a TKLabel and in the dropdown, we're defining a TKLabel called
TKAttribution.

<ImageComponent src="/images/guide-vocabulary/vocab8.webp"></ImageComponent>

Before we move onto Layouts its worth pointing about some other capabilities of properties. We'll
use the TKLabel class for this example. Let's say we need to add a property called `something`.
Consider the following image:

<ImageComponent src="/images/guide-vocabulary/vocab9.webp"></ImageComponent>

When we create a new property, the data it can accept is set automatically to Text. When we display
the property configuration, we can change that to other primitive types. Notice the dropdown saying
we can add date types like Boolean, Date and TextArea?

Underneath the dropdown, there is a blue box containing more configuration options. In the case of a
Text field we can provide constraints on the type of data that the field will accept. In the case of
a text field that can include a minimum or maximum length, a regular expression that must be
satisfied or even some date formats (e.g. YYYY-MM-DD, YYYY-MM)

<ImageComponent src="/images/guide-vocabulary/vocab10.webp"></ImageComponent>
