---
title: Content Transcription and Entity Markup
aside: false
---

::: tip Info

To use the text extraction and entity recognition capabilities you need to first
[subscribe to describo.cloud.](/docs/guide/configuration/subscribe.html)

:::

# Content Transcription and Entity Markup

As a **#HASS** researcher you are likely collecting images of manuscripts and periodicals that you
wish to transcribe in order to find, describe and analyse the narratives in that data. Typically,
you might start by making notes about the people and organisations (who), events (what), dates
(when) and places (where) described in the content in order to establish a context for the content.

With Describo, this process is simplified significantly with tools to mark up the entities in the
content in the RO-Crate as entities attached to the specific file.

## The transcription Tab

When you navigate to the transcription tab you will see a 3 pane layout. In the first pane is the
file browser showing only images in your folder. As this section works with image files, only those
files will be shown in the file browser. Supported file types are files with the extension 'jpg',
'jpeg', 'webp' or 'png'.

<ImageComponent src="/images/tutorial-transcribing-content/transcribe1.png"></ImageComponent>

Get started by selecting an image file. The file will be loaded into the middle panel and the third
panel will become a text editor.

<ImageComponent src="/images/tutorial-transcribing-content/transcribe2.png"></ImageComponent>

At this point you can immediately start transcribing the content of the image into the editor window
in the right hand panel.

Along the top of the editor window are the controls including sending the page through OCR;
performing entity detection (for manually transcribed content); deleting the text; undo and redo and
marking up the entities in the page.

At the bottom of the controls is a legend for the different markup that is applied to the entities.

## Performing OCR

OCR (Optical Character Recognition) is provided by the describo cloud service. As a general rule, it
can read type written pages with almost perfect accuracy and do a more then admirable job on
handwritten content. So, you probably always want to try this first and then fix the results unless
the content is particularly difficult to read.

::: tip

If you can't read the text (for example because it's complex handwriting or the contrast is bad)
then it's likely the text extraction service will struggle as well. In those cases you probably just
want to manually transcribe the text bit by bit but since the cost per page is on the order of
fractions of a cent, having a go won't cost much.

:::

In the following two images, the control `Extract text` is pressed and after a few moments, the text
is written into the transcription editor.

<ImageComponent src="/images/tutorial-transcribing-content/transcribe3.png"></ImageComponent>
<ImageComponent src="/images/tutorial-transcribing-content/transcribe4.png"></ImageComponent>

Immediately we notice a few things. The entities are marked up in the text. Dates are purple whilst
People are green. The background for each entity is red meaning that the entitiy needs to be
confirmed by you.

Highlighting an entity in the text and then pressing `Markup Entity` in the controls allows you to
mark up that entity in the RO-Crate. In the following example we are saying that that entity in the
text is a Person with name `Wadhoorja`.

<ImageComponent src="/images/tutorial-transcribing-content/transcribe5.png"></ImageComponent>

After pressing `Create and Link Entity` the background has changed to indicate that the entity has
been confirmed by you. Entities can be unmarked by highlighting them and selecting `Unmark Entity`.

You can also select any other text and mark it up as an entity; either one already defined or a new
one altogether. And when you have marked up the entities you are interested in, you can clear all
the unconfirmed entities by pressing `(x) unconfirmed`.

::: tip

You can change the content in the markup entity controls before creating the entity. So, if you want
to change the entity type or @id property, you can do that.

:::

::: tip

If you want to link an entity in the text to an entity that has already been defined, type into the
`Name:` field for a lookup into the metadata.

:::

## Content markup

In this way, you can go through and markup all of the entities in the text. In the following example
two entities have been marked up as People: Mallalea and Wadhoorja.

And when we go back to the `Describe` tab we see that the entities are listed in the `mentions`
property against the file. On this tab we can also see some extra files have been created and
associated:

-   `Has Ocr Data file` is a reference to the OCR raw data
-   `Has Transcription` is a reference to the transcription marked up as a HTML file.

<ImageComponent src="/images/tutorial-transcribing-content/transcribe6.png"></ImageComponent>

If we look at the content of the html file we see that the entity data is marked up as HTML data
attributes. In the following example, the first entity has the class `unconfirmed` whilst the second
does not meaning that the second has been confirmed.

<ImageComponent src="/images/tutorial-transcribing-content/transcribe7.png"></ImageComponent>
