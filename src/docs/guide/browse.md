---
title: Browsing the data
aside: false
---

# Browsing the data

Describo creates a JSON Linked Data structure internally. However, it is often helpful to view a
tabular representation of the data for quality assurance and other purposes. For example, getting a
list of all the people described and confirming that each has a given name defined.

Consider the following images. In the first image we see the Browse section of Describo showing a
listing of all of the entities currently defined. Along the top we have controls to filter the data
by type and by the content of the `@id` and `name` properties.

<ImageComponent src="/images/guide-browse/browse1.webp"></ImageComponent>

If we wanted to see just the people defined we could set type to `Person` and we would see:

<ImageComponent src="/images/guide-browse/browse2.webp"></ImageComponent>

The data is now showing only the people that have been described. Let's add the `givenName` and
`familyName` properties to see which people have more than just a simple name defined.

<ImageComponent src="/images/guide-browse/browse3.webp"></ImageComponent>

In the controls we can define which properties to show in the section `Show properties`. You can add
as many properties as you wish here and they will be displayed for the entities showing.

In this way we can easily see that we have one person with givenName defined.
