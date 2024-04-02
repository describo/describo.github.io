---
title: Introduction
aside: false
---

# Describo Profiles

Describo is driven by profiles. A profile is a set of instructions to the UI to describe how it
should act. Put another way, Describo profiles define what your users can describe and how the
application should look and work.

By default, Describo makes available all of Schema.org. Often times we don't want to expose all of
this to our users so profiles are a way for a community to tell Describo exactly what users are
allowed to describe.

Features of a profile:

-   [Primitives](/docs/profiles/types) to specify the type data required: Text, TextArea, Boolean,
    Date, DateTime, Time, Number, Geo, URL, Select, SelectURL, SelectObject
    -   Constraints to further limit the data input. Available on Text, TextArea and Number types
-   [Layouts](/docs/profiles/layouts) to specify property grouping and which properties to display.
-   [Resolve](/docs/profiles/resolve) to specify how complex relational entities like Actioins
    should display.
-   [Localisation](/docs/profile/localisation) to translate entity classes in the User Interface.

<InfoPanelComponent>
    <template #text>
        <StackComponent :cards="cards">
        </StackComponent>
    </template>
</InfoPanelComponent>

<script setup>

const cards = [
    {
        text: `A profile is a JSON description of what Describo should allow and how
        it should be presented to user.`,
        image: "/images/profiles/profile1.png",
    },
    {
        text: `Profiles can localise the application. In this case Person has been mapped to 'Hombre'
        and Date to 'When it happened'.`,
        image: "/images/profiles/localisation.png",
    },
   {
        text: `Profiles can adapt the display of data. With a resolve configuration complex entities
        like Actions and Relationships can display the targets they describe.`,
        image: "/images/profiles/with-resolve-definition.png",
    },
    {
        text: `Profiles can (and should) be shared.
        Issue a pull request to the repo to share your profile.
        Just read the instructions for inclusion. As a bonus,
        Describo Desktop and Web will make those profiles available to users! `,
        image: "/images/profiles/profile2.png",
    },
];
</script>
