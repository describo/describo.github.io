---
title: Browsing the data
aside: false
---

# Browsing the data

Although Describo is focussed on and creates linked data, it can also provide a tabular view of your
content which can be useful in Quality Assurance processes. For example, getting a list of all the
people described and confirming that each has a given name defined.

Consider the following images. In the first image we see the Browse section of Describo showing a
listing of all of the entities currently defined. Along the top we have controls to filter the data
by type and by the content of the `@id` and `name` properties.

<ImageComponent src="/images/guide-browse/browse1.webp"></ImageComponent>

If we wanted to see just the people defined we could set type to `Person` and we would see:

<ImageComponent src="/images/guide-browse/browse2.webp"></ImageComponent>

The data is now showing only the people that have been described and we've expanded the entry for
the `#Person1` listing. In that expansion we see that both `givenName` and `familyName` have been
defined. Let's show those:

<ImageComponent src="/images/guide-browse/browse3.webp"></ImageComponent>

In the controls we can define which properties to show in the section `Show properties`. You can add
as many properties as you wish here and they will be displayed for the entities showing.

In this way we can easily see that Person1 has both givenName and familyName defined; Person2 has
only familyName defined; and Person3 has neither.
