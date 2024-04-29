---
title: Working with an RO-Crate
aside: false
---

# Working with an RO-Crate

When you select a folder, if there's a file 'ro-crate-metadata.json' the content will be loaded into
the application. If there isn't, a skeleton crate file will be created and loaded. The root dataset
will then be shown. The view is divided into three sections: left is the file manager; in the middle
is the metadata editor and on the right is the file preview.

<ImageComponent src="/images/tour/desktop3.webp" />

## Navigation bar

In the navigation bar the current folder is shown along with controls to apply a profile, save the
current the work and access the settings.

![](/images/tutorial-working-with-a-crate/desktop2.webp)

## Main editor window

The main editor window has a controls bar along the top. On it there are controls to navigate
through the entities in the crate; add properties to the current entity; edit the context; preview
the crate data; browse the entities in the crate; and view the linkages to the current entity.

<ImageComponent src="/images/tutorial-working-with-a-crate/desktop3.webp" />

### Navigating to an entity

The main editor window which displays the properties defined for this entity. Selecting an entity
(e.g. select the File entity shown) navigates to that entity.

<ImageComponent src="/images/tutorial-working-with-a-crate/desktop4.webp" />

### Adding properties to an entity

When adding properties, a dialog opens with all of the properties that can be defined for the
current entity. The list is filterable and each property shows the type of data that can be added,
e.g. abstract accepts Text. Multiple properties can be added before closing the dialog.

<ImageComponent src="/images/tour/desktop5.webp" />

### Creating a new entity

Selecting the 'Thing' button allows defining a new entity of type 'Thing'. The control also looks
for other entities of type Thing in the current crate and elsewhere, and if there are any, they will
be available for selection.

<ImageComponent src="/images/tour/desktop6.webp" />

## File handling and preview

Selecting a a file entity navigates to it and displays a preview of it if possible. Note that the
file size, encoding and file hash is automatically set by Describo. The encoding and hash are
determined by the excellent <a href="https://www.itforarchivists.com/" target="_blank">Siegfried
tool.</a>

<ImageComponent src="/images/tour/desktop4.webp" />

---
