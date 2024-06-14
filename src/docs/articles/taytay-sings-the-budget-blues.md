---
title: TayTay Sings the Budget Blues
aside: false
---

# TayTay Sings the Budget Blues

Wikipedia defines e-discovery as:

::: info

discovery in legal proceedings such as litigation, government investigations, or Freedom of
Information Act requests, where the information sought is in electronic format.

:::

If we remove the limitation about it applying in legal proceedings then we're left with a definition
that captures all of us: `discovery [...] where the information sought is in electronic format`.

In this article I'm going to demonstrate how you can use the e-Discovery tools in Describo as part
of your work. You'll see how to extract information and reason about it. You'll also learn how to
interpret a dataset through the lens of another. Finally, you'll learn the meaning of the title.

## Audience: about you

Does this sound familiar?

-   You've collected a bunch of primary source materials in electronic form (newspaper articles,
    manuscript pages etc) and are now embarking on a journey to find out what is contained in them.

-   Maybe you've found yourself looking at that folder of Microsoft Word documents on your company
    fileshare. The documentation has captured all of the information about a project that the
    company worked on but with only the filenames to go on, it's more data than it is information.

-   Or maybe you've just received the fifth revision of that 150 page policy manual for final
    checking and verification. You've already read it closely at least two times (it got harder and
    harder to read with each revision) and you don't have another read in you but you do need to
    verify that the commentary from yesterday's meeting is now captured in the document.

Let's see how Describo can help.

## Setup

For this article I'm using two datasets that you can download and use yourself:

-   [2024 Australian Federal Budget Papers Dataset](https://github.com/describo/dataset-2024FederalBudgetPapers/archive/refs/tags/v1.0.zip)
-   [Taylor Swift Song Lyrics Dataset](https://github.com/describo/dataset-TaylorSwiftData/archive/refs/tags/v1.0.zip)

After you've downloaded these to your computer, unzip them, start Describo, set the mode on the
dashboard to
<span class="text-sm bg-blue-500 text-white py-2 px-2 rounded"><FontAwesomeIcon :icon="faSearch" />&nbsp;e-Discovery</span>
and then load the folder.

Documentation:

-   [Assistant enabled e-discovery](/docs/guide/assistant-supported-discovery.html)
-   [Tips for using the Assistant](/docs/guide/prompt-engineering.html)

## 2024 Australian Federal Budget Papers

A topic that affects all of us, the Federal Budget Papers are dense with information covering (in
theory) all aspects of the Australian economy. So, let's start with getting an overview of what's
contained in the documents.

In the following screenshot you'll see that 4 documents have been selected for interrogation. Note
that the Budget Overview document is a Microsoft Word document and the other 3 are PDF documents.
Within seconds the assistant has provided a page count (371 pages) and a detailed summary.

<ImageComponent src="/images/articles/taytay-sings-the-budget-blues/budget-image1.webp"></ImageComponent>

What else we can discover? In the following screenshot we have identified the largest contributors
to revenue and the largest costs whilst also drilling down into the details of the excise
contribution to total revenue.

<ImageComponent src="/images/articles/taytay-sings-the-budget-blues/budget-image2.webp"></ImageComponent>

Cost of living has been in the news almost daily since then. Let's see what the budget has to say
about the measures introduced with respect to minority groups and young adults.

<ImageComponent src="/images/articles/taytay-sings-the-budget-blues/budget-image3.webp"></ImageComponent>

Everything you see in the conversation has come from the selected documents. Whilst you can get that
information yourself, with the help of the Describo Assistant, the cognitive load of this work is
greatly reduced. Leaving you to focus on the big picture.

When you're ready, you can download the conversation (note the licensing statement in the header).

<iframe
  class="border border-solid border-gray-400 p-2"
  src="/images/articles/taytay-sings-the-budget-blues/budget-conversation1.pdf"
  width="100%" height="500">
</iframe>

## Taylor Swift Song Lyrics

The budget affects all of us but i'm confident that Taylor Swift is more interesting! So, let's have
look at her songbook.

In the following screenshots we start by getting a summary of all 10 albums in the dataset. Then, we
get a feel for the sentiment of her music and how the themes and narratives have been both
influenced by her life experience and evolved over time as a result of her life experience. Finally,
we look at the evolution of her style over time and ask the Assistant what else we should know from
the data.

As you read through the text, take note of the times where the Assistant is drawing on its knowledge
outside of the data ("The evolution of her style reflects Taylor's desire to continuously challenge
herself artistically..."). When you are working with up to the times content, the Assistant can
augment your conversation with its own knowledge.

<ImageComponent src="/images/articles/taytay-sings-the-budget-blues/taytay-image1.webp"></ImageComponent>
<ImageComponent src="/images/articles/taytay-sings-the-budget-blues/taytay-image2.webp"></ImageComponent>
<ImageComponent src="/images/articles/taytay-sings-the-budget-blues/taytay-image3.webp"></ImageComponent>
<ImageComponent src="/images/articles/taytay-sings-the-budget-blues/taytay-image4.webp"></ImageComponent>

And here's the conversation (note the licensing statement in the header):

<iframe
  class="border border-solid border-gray-400 p-2"
  src="/images/articles/taytay-sings-the-budget-blues/taytay-conversation1.pdf"
  width="100%" height="500">
</iframe>

## TayTay Sings the Budget Blues

In this article I've demonstrated how the Assistant can be used to pull information from data.
Whether it's a topic as dry as the federal budget or up to the times song lyrics, the Assistant can
not only help you quickly understand large swathes of content but also extract very specific bits of
information from it.

Another useful capability is getting the Assistant to work with a dataset via the lense of another.
Following is a fun, albeit frivolous, example that demonstrates what you can do.

<div class="text-xl text-center text-pretty my-10">
     In answer to the question no one asked. Ever.<br/>
     If the budget summary were a Taylor Swift song; how would it go?
</div>

<ImageComponent src="/images/articles/taytay-sings-the-budget-blues/taytay-image5.webp"></ImageComponent>

## Get started!

If you want to try this with your own data, it's easy and you can be up and running in about 5
minutes for 5 dollar bucks!

-   [Download the application - FREE](/desktop)
-   [Register - FREE](/docs/guide/register)
-   [Purchase Assistant Credits - $5 ](/docs/guide/purchase-credits)

And if you have questions about how your data is used and where it's processed:

-   [Terms and conditions](/terms-and-conditions#describo-cloud)
-   [Where your data is processed](/docs/guide/data-processing)

<script setup>
    import { faSearch} from "@fortawesome/free-solid-svg-icons";
</script>
