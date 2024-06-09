---
title: Tips for using the assistant
---

# Tips for using the assistant

In the parlance of the domain, this is known as `Prompt engineering` and it's about iterating and
testing prompts to optimize performance. Although you are interacting with an AI model when you use
the assistant, for the sake of this documentation, it's helpful to think that you are giving
directions to a colleague to perform work on your behalf.

So, if you had a folder of content that you wanted summarised you could write the following:

::: tip Prompt

Summarise.

:::

And you would get a useful summary of the content.

However, by providing more context to the assistant you could get a better outcome. Consider the
following examples:

::: tip Prompt

Summarise the selected files and provide a list of the main themes discussed. The summary should be
3 - 5 sentences long and contain not more than 100 words.

:::

The general rule of thumb is to be more specific and provide as much guidance to the assistant as
you can.

Another example; say you want to summarise the content for a specific audience.

::: tip Prompt

Summarise the documents using language appropriate for tertiary students. Explain the themes found
in the content in a way that relates it to their stage of life.

:::

Or maybe you want to explore how some content would look if it were being reported in a newspaper
and was targeting a particular demographic:

::: tip Prompt

Write a news report based on the content of the selected documents. The target audience is minority
groups struggling with cost of living pressures.

Include the key themes and how they relate to the target audience.`

:::

One final example; extracting a citation for a set of papers:

::: tip Prompt

You are a researcher writing a paper for a journal. The citation format of the journal is very
specific.

For each document in the set, extract the authors, title, and journalName of the paper. Provide the
information as a list.

:::

Notice that we are giving the assistant a role: "You are a researcher..."

The assistant can massively accelerate your workflow when prompted in the right way. The key is to
keep refining what you ask for and how you ask for it. And don't forget, it's a conversation. As the
conversation continues, the assistant will get better at finding the information you are looking
for.

## Go deeper

Prompt engineering is an art form in and of itself and rather than repeat the great work of others
here, here's a couple of links to sites that can help you go further.

-   https://docs.anthropic.com/en/docs/prompt-engineering
-   https://platform.openai.com/docs/guides/prompt-engineering
