---
title: Assistant enabled e-discovery
---

::: tip Info

To use the assistant capability you need to first
[register with describo.cloud.](/docs/guide/register)

:::

::: warning info

#### Artificial intelligence and conversational AI models are frontier technologies that are still improving in accuracy, reliability and safety.

Outputs may not always be accurate and may contain material inaccuracies even if they appear
accurate because of their level of detail or specificity. You should not rely on any Outputs without
independently confirming their accuracy. The Services and any Outputs may not reflect correct,
current, or complete information.

For more information see:

-   [Assistant enabled e-discovery#interacting-with-the-assistant](/docs/guide/assistant-supported-discovery.html#interacting-with-the-assistant)
-   [Tips for using the Assistant](/docs/guide/prompt-engineering.html)

:::

# Assistant enabled e-discovery

Using the Describo Assistant you can interrogate your content to quickly establish the themes and
narratives that you might want to describe.

:::tip info

You can interrogate:

-   text files;
-   HTML files;
-   PDF files;
-   Microsoft Word and Powerpoint files.

:::

Get started by selecting the files and folders containing the content you wish to interrogate.

<ImageComponent src="/images/guide-discover/discover1.webp"></ImageComponent>

Start the Assistant. Notice that the left panel changes to show you the context (the files that will
be interrogated and any that will be excluded - either because it's an unsupported format or
something went wrong when extracting the data).

Underneath the context are options for where to write the metadata you wish to create. The following
images show you the options when one file is selected or more than one. In all cases, you can update
the description of the main index. If one file is selected you can choose to update the description
of that file. If more than one file is selected, you can create a new relationship and edit that
description; or, use an existing relationship that is associated to the selected files.

In this way, you can interact with the Assistant and capture the information as it suits you.

<div class="flex flex-col space-y-1 lg:flex-row lg:space-x-1">
    <ImageComponent src="/images/guide-discover/discover2.webp"></ImageComponent>
    <ImageComponent src="/images/guide-discover/discover3.webp"></ImageComponent>
    <ImageComponent src="/images/guide-discover/discover4.webp"></ImageComponent>
</div>

In the next two images we see a conversation with the Assistant and the associated metadata that has
been created.

<ImageComponent src="/images/guide-discover/discover5.webp"></ImageComponent>
<ImageComponent src="/images/guide-discover/discover6.webp"></ImageComponent>

In some instances you might just want to use the Assistant to uncover some information and then be
able to take away a PDF of the conversation. This is possible by selecting `Download as PDF`.

<ImageComponent src="/images/guide-discover/discover7.webp"></ImageComponent>

The first thing you will see is a dialog specifying which licence to apply to the PDF document. The
default selection enables anyone to use the work and / or create derivatives provided that they
include appropriate attribution. You can control that in the dialog.

<ImageComponent src="/images/guide-discover/discover8.webp"></ImageComponent>

And following is the document with the licence in the header (the final page/s will always be the
context so you know what was interrogated in that session).

 <iframe
  class="border border-solid border-gray-400 p-2"
  src="/images/guide-discover/conversation.pdf"
  width="100%" height="500">
</iframe>

## Interacting with the assistant.

::: tip

Ask the right question by providing as much information and detail as you can. The Assistant is
there to **help you; not replace you**. That means it's your responsbility to check, and think
about, what it is that the Assistant is reporting!

Using the TayTay dataset and asking the question "How many songs and total words are there?" yielded
54 songs and 19,981 words. But that doesn't seem correct. 10 albums x at least 10 songs per album is
a lot more than 54. So let's ask the Assistant for a more detailed accounting.

Read through this conversation to see how we can refine the answer being provided by conversing with
the Assistant. Think about this as if you are providing instructions to a colleague. Clear,
unambiguous instructions are more likely to get the information you want.

<iframe
  class="border border-solid border-gray-400 p-2"
  src="/images/guide-discover/taytay-conversation2.pdf"
  width="100%" height="500">
</iframe>

:::

<InfoPanelComponent>
    <template #title>Interrogating the RO-Crate paper</template>
    <template #text>
        Watch the video to see the RO-Crate paper being interrogated for information.
    </template>
    <template #content>
        <video controls>
            <source src="/images/guide-discover/ro-crate-paper.mp4" type="video/mp4" />
        </video>
    </template>
</InfoPanelComponent>

<InfoPanelComponent>
    <template #title>Interrogating the 2024 Australian Budget Papers</template>
    <template #text>
        In this video, the 2024 Australian Budget papers are queried. Notice that both Word (docx)
    and PDF files form part of the set. Describo can pull data from PowerPoint documents too!
    </template>
    <template #content>
        <video controls>
            <source src="/images/guide-discover/budget-papers.mp4" type="video/mp4" />
        </video>
    </template>
</InfoPanelComponent>

<Disqus />
