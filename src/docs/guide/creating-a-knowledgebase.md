---
title: Creating a knowledge base
aside: true
---

# Creating a knowledge base

## Saving entities for re-use

Often times, you will carefully craft an entity definition that will be useful elsewhere. An obvious
example is when you define yourself as an author. In that case, your entity definition will have
your name and a URL as your unique identifier (e.g. an ORCID) and you can save that definition as a
template for re-use in other work.

In the following image we can see what will be saved as a template. By setting depth to 1 linked
entities will be resolved and included. Note that in both cases (depth 0 or 1) only properties will
be included. Dangling references to other entities in this metadata will not be included.

<ImageComponent src="/images/guide-knowledgebase/template1.webp" />

Then, when describing content, you will be presented with matching templates. Note the middle entry
under the section title "Associate an entity from saved templates".

<ImageComponent src="/images/guide-knowledgebase/template2.webp" />

## Loading an RO-Crate

You can also load entities from an RO-Crate into your personal knowledge base. Perhaps you've
created a dataset as described in the [TKLabels article](/docs/articles/creating-a-dataset.html).

Notice the highlighted section in the following screenshot? That's where we manage our saved
templates. In the screenshot you can see that there are two templates: one describing the Describo
organisation and one describing me as a Person.

<ImageComponent src="/images/guide-knowledgebase/dataset18.webp"></ImageComponent>

<div class="my-6">
Press the button <Button>Load templates from another dataset</Button>. A sidebar will open where you
can select a folder containing an RO-Crate. Select the folder where you created the RO-Crate dataset
you want to load data from. Describo will load the RO-Crate metadata and show you the entity types it contains. In this
case we are ingesting all of the TKLabel entities (20 of them).
</div>

<ImageComponent src="/images/guide-knowledgebase/dataset19.webp"></ImageComponent>

When it's done, those entities will now be loaded into your personal datastore. In the following
screenshot we can see the TKlabel entities are now also available.

<ImageComponent src="/images/guide-knowledgebase/dataset20.webp"></ImageComponent>

When you create a [Vocabulary](/docs/guide/vocabulary.html) that specifies that a property with a
`TKLabel` entity as its value, Describo will offer you these entities as selections to choose from.
