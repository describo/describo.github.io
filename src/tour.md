---
layout: home
title: Product Tour
aside: false
---

<script setup>

const cards = [
    {
        text: `The dashboard. Select a folder of content to describe; load a previously used folder or manage data pack data.
        Whether you are describing research data or creating a cultural collection, everything you do will be stored in this folder.
        Nothing is locked up inside Describo.`,
        image: "/images/tour/desktop1.png",
    },
    {
        text: "Get started by pressing the help button to activate context sensitive help. The documentation link in the navigation bar links to context specific documentation.",
        image: "/images/tour/desktop2.png",
    },
    {
        text: `When the RO Crate file is loaded the root dataset is shown in the middle pane along with a file browser on the left.
       In the navigation bar we can see which folder is loaded as well as controls to load a profile and access application settings.
        `,
        image: "/images/tour/desktop3.png",
    },
    {
        text: `Selecting a entity of type 'File' will calculate file metadata, create an entry for the file in the crate and display a preview of it
        in the right hand panel.`,
        image: "/images/tour/desktop4.png",
    },
    {
        text: `Describo makes all of Schema.org available to you. In the image we can see all of the properties defined by schema.org
        for an entity of type File; all the way back up the hierarchy to Thing. In addition, we can see what data types each property is expecting.
        The 'about' property expects an entity of type 'Thing' and Describo will enforce that.`,
        image: "/images/tour/desktop5.png",
    },
    {
        text: `Entities can be created directly. 'Spatial Coverage' is expecting an entity of type Place and Describo provides controls
        to create a new entity of that type. In this example, we are creating an entity of type Place with the name 'Some Location'.`,
        image: "/images/tour/desktop6.png",
    },
    {
        text: `Navigating to the entity we can then start managing its data. Shown is the Geometry component which enables creating
        a custom geometry for the Geo property.`,
        image:  "/images/tour/desktop7.png",
    },
    {
        text: `Describo can perform Optical Character Recoginition (OCR) and entity recognition of your data. You can mark
        up entities and create rich datasets of entities mentioned in your data. see:
        <a href="/docs/guide/tutorials/transcribing-content.html">/docs/guide/tutorials/transcribing-content.html</a>`,
        image:  "/images/tour/desktop8.png",
    },
    {
        text: `When using the transcription tools the data is written into the RO-Crate. And the markup is created as data attributes in the HTML.`,
        image:  [ "/images/tour/desktop9.png",  "/images/tour/transcribe11.png" ]
    },
    {
        text: `Describo is totally configurable via profiles. Profiles are JSON files that describe how the interface looks and  what a user can do.
        Profiles can be loaded from your computer or from the Describo Profiles Repository. Profiles are cached locally for reuse.`,
        image: "/images/tour/desktop10.png",
    },
    {
        text: `When a profile is loaded, the view will adapt based on the content of that profile. In this example, the profile defines
        a tabbed layout for Dataset entities in addition to showing specific properties. This allows the profile author to define
        exactly how the UI should look for their users and guide them on what is required.`,
        image: "/images/tour/desktop11.png",
    },
    {
        text: `Describo is totally configurable. It supports English and Hungarian (for now) and there are controls for various aspects of its operation.`,
        image: ["/images/tour/desktop12.png", "/images/tour/describo-i18-en.png", "/images/tour/describo-i18-hu.png"],
    },
    {
        text: `There are controls to view the entities in the crate and jump directly to any entity.`,
        image: "/images/tour/desktop13.png",
    },
    { text: `There is a control to directly edit the context.`, image: "/images/tour/desktop14.png" },
    { text: `And one to preview the JSON linked data.`, image: "/images/tour/desktop15.png" },

];
</script>

<StackComponent :cards="cards"  class="mt-10 p-4 bg-slate-100 rounded-lg"></StackComponent>