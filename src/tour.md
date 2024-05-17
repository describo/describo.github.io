---
layout: home
title: Product Tour
aside: false
---

<script setup>

const cards = [
    {
        text: `The dashboard. Select a folder of content to describe; load a previously used folder or manage data pack data.
        Whether you are describing research data, creating a cultural collection or just discovering what your content
        is about, everything you do will be stored in this folder. <br/><strong>Nothing is locked up inside Describo.</strong>`,
        image: "/images/tour/desktop1.webp",
    },
    {
        text: "Get started by pressing the help button to activate context sensitive help. The documentation link in the navigation bar links to context specific documentation.",
        image: "/images/tour/desktop2.webp",
    },
    {
        text: `When a folder is selected, the root dataset is shown in the middle pane along with a file browser on the left.
       In the navigation bar we can see which folder is loaded as well as controls to load a profile and access application settings.
        `,
        image: "/images/tour/desktop3.webp",
    },
    {
        text: `Selecting a entity of type 'File' will calculate file metadata, create an entry for the file in the crate and display a preview of it
        in the right hand panel.`,
        image: "/images/tour/desktop4.webp",
    },
    {
        text: `Describo makes all of Schema.org available to you. In the image we can see all of the properties defined by schema.org
        for an entity of type File; all the way back up the hierarchy to Thing. In addition, we can see what data types each property is expecting.
        The 'about' property expects an entity of type 'ANY' so Describo will let you associate anything you've already
        described.`,
        image: "/images/tour/desktop5.webp",
    },
    {
        text: `Entities can be created directly. 'Spatial Coverage' is expecting an entity of type Place and Describo provides controls to create a new entity of that type.`,
        image: "/images/tour/desktop6.webp",
    },
    {
        text: `Navigating to the entity we can then start managing its data. Shown is the Geometry component which enables creating
        a custom geometry for the Geo property.`,
        image:  "/images/tour/desktop7.webp",
    },
    {
        text: `Describo can perform Optical Character Recoginition (OCR) and entity recognition of your data. You can mark
        up entities and create rich datasets of entities mentioned in your data.
        <br/>
        <a href="/docs/guide/tutorials/transcribing-content.html" target="_blank">See the tutorial for more information.</a>`,
        image:  "/images/tour/desktop8.webp",
    },
    {
        text: `When using the transcription tools the data is written into the RO-Crate. And the markup is created as data attributes in the HTML.`,
        image:  [ "/images/tour/desktop9.webp",  "/images/tour/transcribe1.webp" ]
    },
     {
        text: `Describo interfaces with a conversational AI assistant to help you interrogate and understand your content. In this image
                the assistant has first summarised the text then, acting as an anthropologist, it has described the main topics. Finally, as a social scientist, the assistant explains the narrative with respect to any cultural symbolism. In each response, detailed examples are provided from the text to support the commentary.
                <br/>
                <a href="/docs/guide/tutorials/transcribing-content-assistant.html" target="_blank">See the tutorial for more information.</a>
        `,
        image:   "/images/tutorial-transcribing-content-assistant/assistant1.webp"
    },
     {
        text: `Any description or defined term that you create is then associated to the file in the metadata.`,
        image:   "/images/tutorial-transcribing-content-assistant/assistant2.webp"
    },
      {
        text: `And defined terms can be looked up and attached to other content that you are working on.`,
        image:   "/images/tutorial-transcribing-content-assistant/assistant3.webp"
    },
     {
        text: `The conversational AI assistant can be used for e-Discovery. Navigate to the discover tab, select the files you
        wish to interrogate (text based formats supported: txt, html and pdf), start the assistant and go.`,
        image: "/images/tutorial-discover/discover1.webp",
     }, {
        text: `Watch the assistant in action then  <a href="/docs/guide/tutorials/assistant-supported-discovery.html" target="_blank">See the tutorial for more information.</a>`,
        video: "/images/tutorial-discover/discover2.mp4"
    },
    {
        text: `Describo is totally configurable via profiles. Profiles are JSON objects that describe how the interface looks and what a user can do. Profiles can be loaded from your computer or from the Describo Profiles Repository. Profiles are cached locally for reuse.`,
        image: "/images/tour/desktop10.webp",
    },
    {
        text: `When a profile is loaded, the view will adapt based on the instructions in that profile. In this example, the profile defines a tabbed layout for File entities in addition to showing specific properties. This allows the profile author to define exactly how the UI should look for their users and guide them on what is required.`,
        image: "/images/tour/desktop11.webp",
    },
    {
        text: `Describo is totally configurable. It supports English and Hungarian (for now) and there are controls for various aspects of its operation.`,
        image: ["/images/tour/desktop12.webp", "/images/tour/describo-i18-en.webp", "/images/tour/describo-i18-hu.webp"],
    },
    {
        text: `There are controls to view the entities in the crate and jump directly to any entity.`,
        image: "/images/tour/desktop13.webp",
    },
    { text: `There is a control to directly edit the context.`, image: "/images/tour/desktop14.webp" },
    { text: `And one to preview the JSON linked data.`, image: "/images/tour/desktop15.webp" },

];
</script>

<StackComponent :cards="cards"  class="mt-10 p-4 bg-slate-100 rounded-lg"></StackComponent>
