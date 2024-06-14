---
title: "5 Minute beginner tutorial: Describo and Research Object Crates (RO-Crate)"
aside: false
---

# Beginner Tutorial: Describo and Research Object Crates (RO-Crate)

Hi :wave:,

In this five minute tutorial you'll get to know Describo and how to use it to work with and describe
your data.

<p>
    The best way to get to know the feature set of Describo is via the
    <LinkComponent link="/tour.html" target="_blank">product tour</LinkComponent>.
    This will walk you through all of the capabilities and how to use them. Once you
    are done, <LinkComponent link="/desktop.html" target="_blank">download Describo</LinkComponent>
    to your computer and read on.
</p>

## Introduction

Describo started life as a tool to describe data with metadata conforming to the RO-Crate
specification. If you are reading this you probably know what that is; but just in case:

::: tip info

The RO-Crate specification describes "a method of aggregating and describing research data with
associated metadata".
[https://www.researchobject.org/ro-crate/1.1/introduction.html](https://www.researchobject.org/ro-crate/1.1/introduction.html)

:::

In simpler terms, a complementary definition could be:

::: tip info

A method of describing content with a metadata file in the same folder; think an index that lives
with the content.

:::

In this 5 minute tutorial, you will start describing your data as RO-Crates (which is applicable
whether you are using it as a researcher or not!).

## Audience: about you

You have data that you want to work with.

You might want to describe it or just understand what's there. Maybe it's research data or maybe
it's a folder on your company fileshare. You could be a researcher or you could be an analyst
working with lengthy policy documents.

Whoever you are and whatever your use case, Describo has modes of operation that can help you do
your job quickly and efficiently.

Specifically, Describo creates a file in your folder called `ro-crate-metadata.json` and that's
where all of your efforts are stored. Think of this as like an index to the folder. It's up to you
how detailed that index is. You can describe all of the people, places and organisations related the
content or just create a simple description for reference in future. Either way, Describo will guide
you in the creation, and management, of that index.

When you select a mode, specific optimisations will be enabled in order to adjust Describo for
different use cases. Regardless of which mode you select and how you use it, the outcome will be a
standards compliant and interoperable description of your data.

## Get Started working with your data

<p>
    If you've not yet installed Describo, do that now.
    <LinkComponent link="/desktop.html" target="_blank">Get Describo - free download.</LinkComponent>
</p>

When you open the application you will see the dashboard.

<ImageComponent src="/images/five-minute-tutorial/desktop1.webp" />

To get an overview and orientate yourself press the
<span class="text-sm bg-blue-500 text-white py-1 px-2 rounded">Help</span> button in the navigation
bar.

<ImageComponent src="/images/five-minute-tutorial/desktop2.webp" />

Start by selecting a mode (go with `Data Description` for now) and a folder of content to work with.
When you select the folder, you will be taken to the workspace. The `Describe` tab will be loaded.

On the left you will see a file browser showing the content of your folder. In the middle will be
the metadata editor. And on the right will be a file preview section.

Notice those properties in red? License, author, description etc? That's to show you what the mode
thinks you should be describing. Leaving those blank doesn't stop anything working but if you have
that information, then it's good if you provide it. Indeed, the power of Describo lies in it's
ability to guide you in creating an index to your data. Both by telling you what information to
provide and what type of data is expected at any point.

<ImageComponent src="/images/five-minute-tutorial/desktop3.webp" />

If you select a file in the file browser, it will be added to the index and a preview will be
displayed.

<ImageComponent src="/images/five-minute-tutorial/desktop4.webp" />

You can now start editing the metadata (creating the index to your content).

-   The buttons guide you in what you can do. Try pressing
    <span class="text-sm bg-blue-500 text-white py-1 px-2 rounded">+ TextArea</span> next to
    `Description`. A free text box will appear for you to type into. You can keep adding those by
    pressing the button again and again in order to create highly detailed descriptions.
-   Now try pressing <span class="text-sm bg-blue-500 text-white py-1 px-2 rounded">+ URL</span>
    next to `Keywords`. Type in your name. You'll see feedback saying that a URL is expected. Delete
    that and put `https://describo.github.io` instead. Press enter or click the
    <span class="text-sm bg-green-500 text-white py-1 px-2 rounded"><FontAwesomeIcon :icon="faCheck" /></span>
    button. You should see that an entity of type 'URL' has been created and associated as a
    keyword.

The buttons tell you what type of data is expected. If you add something and change your mind, you
can delete / unlink it and do it again. Be sure to check out what you can describe in the individual
sections (tabs) as well.

## Useful information

For those so inclined, you might want to read the following documentation from the specification
itself in order to get a better understanding of what Describo is helping you do.

-   [Root data entity](https://www.researchobject.org/ro-crate/1.1/root-data-entity.html)
-   [Contextual entities](https://www.researchobject.org/ro-crate/1.1/contextual-entities.html)
-   [Data entities](https://www.researchobject.org/ro-crate/1.1/data-entities.html)

## And that's an RO-Crate!

Well done, you created an RO-Crate by describing your data in a standard, spec compliant way!

<font-awesome-icon :icon="faChampagneGlasses" class="text-6xl text-yellow-500"/>

### Useful links where you can learn more

(this is just for reference, you won't be tested on this)

-   [RO-Crate specification](https://www.researchobject.org/ro-crate/specification.html)
-   [JSON-LD](https://json-ld.org/)
-   [schema.org](https://schema.org/)

<Disqus />

<script setup>
   import { faCheck, faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
</script>
