---
title: Transforming Content
outline: [2, 3]
---

::: tip Info

The tools in this section require a [registration with describo.cloud](/docs/guide/register.html)
and credits for the assistant, text extraction and named entity recognition capabilities.

:::

# Transforming Content

For projects dealing with digitised content, a common requirement is the ability to perform bulk
transformations on the raw data. This can include converting images into formats suitable for
display on the web (e.g. creating thumbnails; JPEG images to webp) as well as performing content
extraction (e.g. performing named entity recognition and extracting themes, topics and subjects).
The Describo Transform section provides tools to enable this work.

When you open the transform section, you will see a file browser in the left panel. Select the files
and folders that you want to process. Describo will traverse the folder structure looking for images
and text files (specifically, jpg, png, txt and html files). If any are found they will be selected
and added to the context.

Then, controls will be shown in the right hand panel to process the different file types. In the
following image we can see the credits available for the assistant, text extraction and entity
recognition functions followed by controls to handle processing the different file types discovered.

<ImageComponent src="/images/guide-transform/transform1.webp"></ImageComponent>

## Image Processing tasks

### Create Image Thumbnails and Webformats.

Setting this toggle to true will enable the production of thumbnails and webformats. You can also
adjust the size of the thumbnail here with an actual sized preview displayed to the right.

::: tip Info

-   Thumbnails are named as the source file and stored in a folder named `thumbnails` adjacent to
    the image.
-   Webformats are named as the source file (with a different extention) and stored in a folder
    named `webformats` adjacent to the image.

:::

When a jpeg image is encountered, a webp is produced. The jpg is required to send the contents for
text extraction and the webp format is for display on the web. All other formats produce webp only.
Webp is supported by all browsers and is their format of choice for web content delivery.

::: warning info

Why can't I select TIFF images as my source for transformations?

Typically, when a manuscript or other content is digitised, the digitisation service will create
TIFF images as archival quality representations and JPEG as dissemination quality representations.
Accordingly, implementing the conversion of TIFF to JPEG in Describo was considered a redundant and
unnecessary capability.

:::

### Extract Text

Enabling this will perform text extraction on each image.

::: tip Info

-   The extracted text is written to a HTML file named as the source file and stored in a folder
    `transcriptions` adjacent to the source image.

:::

#### Perform named entity recognition

If enabled, the extracted text will also be run through the named entity recognition tool. When
named entity recognition runs, the HTML transcription file is marked up with data attributes and the
marked up entities are set as unconfirmed. In the transcribe section there are controls to review
and markup the discovered entities as confirmed.

#### Automatically confirm recognised entities

Enabling this will automatically confirm all named entities. In addition to marking them up in the
HTML transcription file, the entities will be written into the metadata file against the original
source file.

So, for example, if a person named "Jane Doe" is discovered, an entity of type person will be
automatically created and associated to the source file via the "mentions" property.

#### Perform topic, theme and subject extraction

If enabled, the assistant will analyse the text and output the top 3 topics, themes and subjects;
writing them into the metadata against that file.

## Text file processing tasks

### Perform named entity recognition

If enabled, the text will be run through the named entity recognition tool. In these cases, as
Describo does not alter the original file, the data cannot be marked up there. Furthermore, it
doesn't make sense to produce a linked HTML version of that content so in these cases the entities
will be written into the metadata file and linked to the source file.

### Perform topic, theme and subject extraction

If enabled, the assistant will analyse the text and output the top 3 topics, themes and subjects;
writing them into the metadata against that file.

::: info Question

Why are PDF and Microsoft Word documents not available for processing?

By definition, these formats are multiple pages long so processing them as one large blob of text
would just result in a metadata entry with potentially thousands of entities linked from it.

In future, it is envisaged that these tools would evolve to treat those files as a set of linked
pages so that entity recognition and topic, theme, subject extraction operates at the page level;
thus producing a linked data structure flowing through the document.

:::

<Disqus />
