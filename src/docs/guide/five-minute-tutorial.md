---
title: "5 Minute beginner tutorial: Research Object Crates (RO-Crate) and Describo"
aside: false
---

# Beginner Tutorial: Research Object Crates (RO-Crate) and Describo

Get know Describo and how it creates RO-Crates in 5 minutes!

[[toc]]

## Introduction

The RO-Crate specification describes "a method of aggregating and describing research data with
associated metadata".
[https://www.researchobject.org/ro-crate/1.1/introduction.html](https://www.researchobject.org/ro-crate/1.1/introduction.html)

In this 5 minute tutorial, you will get started describing your data as RO-Crates!

<ImageComponent src="/images/five-minute-tutorial/tutorial1.webp" />

## Audience: about you

You've heard about these nifty RO-Crate things and want to start describing your data in an open and
spec conformant way. Maybe you can explain what JSON-LD is and maybe you've looked at the spec but
your core interest here is that you want to describe your research data.

### Useful links where you can learn more

(this is just for reference, you won't be tested on this)

-   [RO-Crate specification](https://www.researchobject.org/ro-crate/specification.html)
-   [JSON-LD](https://json-ld.org/)
-   [schema.org](https://schema.org/)

## Start Describo Desktop or the Describo web application

This tutorial can be completed with either Describo Desktop or Describo Web. For ease, Web is
easiest to get started with:

<LinkComponent link="https://describo.github.io/web">https://describo.github.io/web</LinkComponent>
(Remember, it only works in Google Chrome and Microsoft Edge for now.)

::: tip

Describo web is good for getting started quickly and easily. You can inspect an RO-Crate and load
profiles to work with the data. It does not have the capabilities of Describo Desktop but for basic
usage, that's not needed.

:::

In the application, select a folder to describe.

<ImageComponent src="/images/five-minute-tutorial/tutorial2.webp" />

## Apply the RO-Crate profile

The main description view. A default RO-Crate describo profile has been created for you.

Apply the profile.

<ImageComponent src="/images/five-minute-tutorial/tutorial3.webp" />

## Profile Selector

The profile selector. Locate the RO-Crate profile and select it.

<ImageComponent src="/images/five-minute-tutorial/tutorial4.webp" />

## Describe your data

When the RO-Crate profile has been applied, you will be presented with a view that contains the
absolute bare minimum required to describe your data as an RO-Crate.

### Useful information

-   [Root data entity](https://www.researchobject.org/ro-crate/1.1/root-data-entity.html)
-   [Contextual entities](https://www.researchobject.org/ro-crate/1.1/contextual-entities.html)
-   [Data entities](https://www.researchobject.org/ro-crate/1.1/data-entities.html)

<ImageComponent src="/images/five-minute-tutorial/tutorial5.webp" />

## Go further: describe more

Click the add button in the toolbar and inject properties into the data.

<div class="flex justify-center">
    <div class="border">
        <img src="/images/five-minute-tutorial/tutorial7.webp" class="w-32" />
    </div>
</div>

The properties you can inject come from schema.org and the describo profile if one is applied. They
are defined on the type of data you are working with. In this case a Dataset. When you add the
property Describo will tell you what type of data it expects.

<ImageComponent src="/images/five-minute-tutorial/tutorial6.webp" />

## Where did that property go?

With a profile that defines a grouped interface, for example the RO-Crate profile, extra properties
that you add will be visible in the '...' tab. Don't worry, just remove the profile and you get a
list view with all of your properties, sorted alphabetically. Or go back to the tabbed view. Work
the way that suits you best.

<ImageComponent src="/images/five-minute-tutorial/tutorial8.webp" />

## And that's an RO-Crate!

Well done, you created an RO-Crate by describing your data in a standard, spec compliant way!

<i class="fa-solid fa-champagne-glasses text-yellow-500 fa-4x"></i>
