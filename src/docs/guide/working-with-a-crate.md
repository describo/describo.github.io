---
title: Working with an RO-Crate
aside: true
---

# Working with a folder of data

When you select a folder, if there's a file `ro-crate-metadata.json` the content will be loaded into
the application. If there isn't, a skeleton file will be created and loaded. The main index will
then be shown. The view is divided into three sections: left is the file manager; in the middle is
the metadata editor and on the right is the file preview.

<ImageComponent src="/images/guide-working-with-a-crate/desktop1.webp" />

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

## Verifying your work

::: tip info

-   You will need to [register](/docs/guide/register.html) and
    [purchase credits to use the Assistant.](/docs/guide/purchase-credits.html)

:::

<div class="my-6">
An important part of any project is verifying your work. On the Describe tab, in the left panel
where the file browser is, there is another tab Verify. Select it and press the button
<Button>Start the assistant</Button>. When you do, the assistant will read the RO-Crate spec and
your metadata. When it's ready, you can query your data for correctness against the spec.
</div>

<div class="flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0 my-6">
    <ImageComponent src="/images/guide-working-with-a-crate/dataset15.webp"></ImageComponent>
    <ImageComponent src="/images/guide-working-with-a-crate/dataset16.webp"></ImageComponent>
</div>

<div class="my-6">
In the following image we pressed the button <Button>Check root dataset</Button> and then in the
message view we see the question (in the blue box) and the assistant's response (in green). In this
way, you can direct the assistant to check your work.
</div>

<ImageComponent src="/images/guide-working-with-a-crate/dataset17.webp"></ImageComponent>

<Disqus />
