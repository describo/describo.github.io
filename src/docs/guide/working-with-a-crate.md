---
title: Working with an RO-Crate
aside: false
---

# Working with a folder of data

When you select a folder, if there's a file `ro-crate-metadata.json` the content will be loaded into
the application. If there isn't, a skeleton file will be created and loaded. The main index will
then be shown. The view is divided into three sections: left is the file manager; in the middle is
the metadata editor and on the right is the file preview.

<ImageComponent src="/images/tour/desktop3.webp" />

<p>
<LinkComponent link="/docs/guide/five-minute-tutorial.html">See the five minute tutorial for a quick overview and then come back when you're done.</LinkComponent>
</p>

## Navigation bar

In the navigation bar you'll see:

-   the current folder;
-   the currently applied profile (certain modes will automatically load a suitable profile for you
    but you can change it if you like);
-   links to report issues with the application and view context sensitive help (they open up in
    your browser);
-   a control to set a licence on your content;
-   a control to save the metadata you've created;
-   a control to access the application settings.

<ImageComponent src="/images/guide-working-with-a-crate/navigation.webp" />

## Main editor window

The main editor window has a controls bar along the top. On it there are:

-   controls to navigate through the entities. Pressing the
    <span class="text-sm bg-blue-500 text-white py-1 px-2 rounded"><FontAwesomeIcon icon="fas fa-home" /></span>
    button takes you back to the main index.
-   add properties to the current entity;
-   edit the context;
-   preview the crate data;
-   browse the entities in the crate;
-   view the linkages to the current entity.

<ImageComponent src="/images/guide-working-with-a-crate/controls.webp" />

## Saving entities for re-use

Often times, you will carefully craft an entity definition that will be useful elsewhere. An obvious
example is when you define yourself as an author. In that case, your entity definition will have
your name and a URL as your unique identifier (e.g. an ORCID) and you can save that definition as a
template for re-use in other folders that you work on.

In the following image we can see what will be saved as a template. By setting depth to 1 linked
entities will be resolved and included. Note that in both cases (depth 0 or 1) only properties will
be included. Dangling references to other entities in this metadata will not be included.

<ImageComponent src="/images/guide-working-with-a-crate/template1.webp" />

Then, when describing content, you will be presented with matching templates. Note the middle entry
under the section title "Associate an entity from saved templates".

<ImageComponent src="/images/guide-working-with-a-crate/template2.webp" />

<Disqus />
