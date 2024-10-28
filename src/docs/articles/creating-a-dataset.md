---
title: Defining a vocabulary and creating a dataset
outline: [2, 3]
---

# Defining a vocabulary and using it to create a dataset

Describo is built around RO-Crate which primarily uses schema.org. But what do you do if you need to
describe things that are not defined by schema.org? And how can you stand on the shoulders of the
many Ontologies that came before?

This article will show you, step by step, how to:

-   create a Vocabulary for describing Traditional Knowledge Labels;
-   use the Vocabulary to create the dataset of `TKLabel` entity definitions;
-   use the Generative AI Assistant to verify the data you created against the RO-Crate spec;

And when you’re done, you can load the dataset into your personal knowledgebase in Describo for use
in your other projects.

::: tip info

-   You will need access to the Vocabulary tool in Describo so be sure to
    [register](/docs/guide/register.html) which will give you two months of free access to the tool.

-   In order to perform the verification steps you will need to
    [purchase credits to use the Assistant.](/docs/guide/purchase-credits.html)

-   [Detailed documentation for the Vocabulary tool is available here.](/docs/guide/vocabulary.html).

:::

::: warning info

Tradtional Knowledge Labels should only be applied by Indigenous knowledge holders. This article and
dataset is to show how one can use Describo to do their work. It is the responsibility of the user
to ensure that they have the appropriate permissions to use the dataset, and any data that they
describe with it.

:::

::: warning info

This article does not go into detail about every little feature. It is designed as a step by step
how to that is supposed to be read in conjunction with
[the detailed documentation for the Vocabulary tool.](/docs/guide/vocabulary.html)

:::

## Get this dataset

Although this article steps you through creating this dataset, feel free to download it from
[https://github.com/describo/dataset-TKLabels/archive/refs/tags/v1.0.zip](https://github.com/describo/dataset-TKLabels/archive/refs/tags/v1.0.zip)
and get started using it! As the Vocabulary is distributed with the dataset, you'll get that too.

## Definitions

-   A `class` defines a type of `entity`. For example, defining a class `TKLabel` will enable you to
    create entities whose type is `TKLabel`.

## Licensing your work

Too often, licensing your work is an afterthought. With Describo, licensing your data and metadata
is a first class action with an easy to use interface.

<div class="my-6">
Start Describo and select a folder to work in. We'll start by creating the data and metadata
licenses. Look in the navigation bar for a button named
<Button>Set Licence</Button>. The following two images show the license
creation dialog. In the first we're defining the data license (CC-BY-SA 4.0) and in the second, the
metadata license (CC0 Public Domain).
</div>

<div class="flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0 my-6">
    <ImageComponent src="/images/articles/creating-a-dataset/dataset1.webp"></ImageComponent>
    <ImageComponent src="/images/articles/creating-a-dataset/dataset3.webp"></ImageComponent>
</div>

After we've created the licenses we see that the root dataset has the CC-BY-SA license whilst the
root descriptor has the CC0 license.

<div class="flex flex-col space-y-1 md:flex-row md:space-x-1 my-6">
    <ImageComponent src="/images/articles/creating-a-dataset/dataset2.webp"></ImageComponent>
    <ImageComponent src="/images/articles/creating-a-dataset/dataset4.webp"></ImageComponent>
</div>

## Creating the Vocabulary

### Setup

Navigate to the vocabulary tool. On this page you can define the Vocabulary metadata like name,
description and version.

<ImageComponent src="/images/articles/creating-a-dataset/dataset5.webp"></ImageComponent>

### Classes

Navigate to the classes tab.

To create a new class, type the name into the input next to `Add a class to your vocabulary`. As you
type, Describo will lookup the Ontologies known to it. If you find a definition that matches what
you want to describe, select it. Otherwise, type in the class name you want and press enter to
select it.

In this case, create the class `TKLabel` (remember to press enter). Note that it's capitalised and
singular. Also note that we've set the definition to `override`. This means that the class
definition will define the properties so Describo will not traverse the inheritance hierarchy to
determine which properties to show.

Also note that the class hierarchy can be changed here. By default, any class added (from either an
Ontology or invented by you) will be subclassed to Thing. You can change that here and the class can
have multiple parent classes.

<ImageComponent src="/images/articles/creating-a-dataset/dataset6.webp"></ImageComponent>

### Properties - TKLabel class

Navigate to the properties tab and select the `TKLabel` class.

Upon selection you will see the properties from the hierarchy (inherited from the default parent
Thing). This happens when the class definition is first created even though you set the definition
to override.

Go ahead and delete all of those properties. In this example, we just need to define the `@id` and
`name` properties which Describo always makes available.

<div class="flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0 my-6">
    <ImageComponent src="/images/articles/creating-a-dataset/dataset7.webp"></ImageComponent>
    <ImageComponent src="/images/articles/creating-a-dataset/dataset8.webp"></ImageComponent>
</div>

### Properties - Dataset

In order to use the TKLabel class, we need to say `where` it can be used. In this Vocabulary we'll
edit the `hasPart` property on Dataset to specify that we can add TKLabel entities at that point. In
the following image we've loaded the Dataset class on the properties tab and expanded the hasPart
property.

Notice the select where we can see TKLabel as an option? Describo allows you to associate anything
you've defined at any point in the hierarchy. By Selecting TKLabel in the select box we see that the
hasPart property on Dataset will now allow TKLabel entities to be created and associated.

<div class="flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0 my-6">
    <ImageComponent src="/images/articles/creating-a-dataset/dataset9.webp"></ImageComponent>
    <ImageComponent src="/images/articles/creating-a-dataset/dataset10.webp"></ImageComponent>
</div>

<div class="my-2">
Before we leave, let's just check the Vocabulary. Press the button labelled <Button>Open the
Vocabulary definition in your browser</Button>. When you do, a new window will open with the Vocab
presented as HTML.
</div>

<ImageComponent src="/images/articles/creating-a-dataset/dataset11.webp"></ImageComponent>

<div class="my-6">
And finally, be sure to press the button named <Button>Save Vocabulary</Button> to not only save it,
but also load it into Describo for use.
</div>

## Using your Vocabulary

Navigate from the Vocabulary section back to the Describe section.

The Describo metadata editor will show in the middle pane. Go to the `Content` tab.

In the following image we can see the `hasPart` property and the ability to add entities of type
CreativeWork, URL, File, Dataset and our new class `TKLabel`. By pressing the TKLabel button we can
start creating the TKLabel definitions.

<ImageComponent src="/images/articles/creating-a-dataset/dataset12.webp"></ImageComponent>

However, since there are 20 of them, let's use the Bulk Add control. In the next image we see a
dropdown where we've set the @type to TKLabel and defined 6 of the labels using the URL as the value
of the @id property and the name as the value of the name property.

<ImageComponent src="/images/articles/creating-a-dataset/dataset13.webp"></ImageComponent>

<div class="my-6">
When we <Button>Create these entities</Button> we get:
</div>

<ImageComponent src="/images/articles/creating-a-dataset/dataset14.webp"></ImageComponent>

And so we can continue to create all of the other TK Labels.

Don't forget to add the other metadata like a description and define yourself as an author!

## Verifying your work

::: tip info

You will need credits to use the Assistant for this part.

:::

<div class="my-6">
An important part of any project is verifying your work. On the Describe tab, in the left panel
where the file browser is, there is another tab Verify. Select it and press the button
<Button>Start the assistant</Button>. When you do, the assistant will read the RO-Crate spec and
your metadata. When it's ready, you can query your data for correctness against the spec.
</div>

<div class="flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0 my-6">
    <ImageComponent src="/images/articles/creating-a-dataset/dataset15.webp"></ImageComponent>
    <ImageComponent src="/images/articles/creating-a-dataset/dataset16.webp"></ImageComponent>
</div>

<div class="my-6">
In the following image we pressed the button <Button>Check root dataset</Button> and then in the
message view we see the question (in the blue box) and the assistant's response (in green). In this
way, you can direct the assistant to check your work.
</div>

<ImageComponent src="/images/articles/creating-a-dataset/dataset17.webp"></ImageComponent>

## Using your dataset

<div class="my-6">
You've now created a dataset that you can use in other work. The question is how do we make it
available for lookups in other projects? Firstly, save your work by pressing <Button>Save
Metadata</Button> and then go back to the dashboard.
</div>

Notice the highlighted section in the following screenshot. That's where we manage our saved
templates (which are like our very own personal knowledge base). In the screenshot you can see that
there are two templates: one describing the Describo organisation and one describing me as a Person.

<ImageComponent src="/images/articles/creating-a-dataset/dataset18.webp"></ImageComponent>

<div class="my-6">
Press the button <Button>Load templates from another dataset</Button>. A sidebar will open where you
can select a folder containing an RO-Crate. Select the folder where you just created the TKLabels
dataset. Describo will load the RO-Crate metadata and show you the entity types it contains. In this
case we want to ingest all of the TKLabel entities (20 of them) so select that and press
<Button>Load</Button>.
</div>

<ImageComponent src="/images/articles/creating-a-dataset/dataset19.webp"></ImageComponent>

When it's done, those entities will now be loaded into your personal datastore.

<ImageComponent src="/images/articles/creating-a-dataset/dataset20.webp"></ImageComponent>

## Next Steps

If you've made it here then you've created your own TKLabels dataset and loaded it into Describo for
future use. In your next project, you can create a Vocabulary where you might define a property on
File entities called `hasTkLabel` and specify that it should have a TKLabel associated. Then,
Describo will offer these as lookups for you to use when describing your files!

<Disqus />
