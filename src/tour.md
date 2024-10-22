---
layout: home
title: Product Tour
aside: false
---

<script setup>

const cards = [
    {
        text: `<p>The dashboard. Start by selecting a mode and a folder of content to work with.</p>
        <p>
        Whether you are describing data, creating a cultural collection or just performing a discovery process,
        everything you do will be stored in this folder.
        </p>
        <p class="text-center"><strong>Nothing is locked up inside Describo.</strong></p>
        `,
        image: "/images/tour/desktop1.webp",
    },
    {
        text: "<p>Wherever you are, pressing the 'Help' button in the navigation bar activates context sensitive help. The documentation link next to it opens up the user guide for that page in your browser.</p>",
        image: "/images/tour/desktop2.webp",
    },
    {
        text: `<p>When a folder is selected, the main dataset is shown in the middle pane along with a file browser on the left.
        In the navigation bar we can see the selected folder as well as the profile that was loaded for the mode you selected.
        Also note the controls to set a licence, save the metadata, and access application settings.</p>

        <p>At this point, you can immediately start describing your content. Try pressing <span class="text-sm bg-blue-500 text-white py-1 px-2 rounded">+ TextArea</span> next
        to keywords. The buttons tell you the type of data expected. In this case, you can add free text.
        Likewise, if you wanted to define an author you could press the <span class="text-sm bg-blue-500 text-white py-1 px-2 rounded">+ Person</span> button next to author and Describo will guide you in defining a person.
        </p>
        <p>Notice also the tabs down the left hand side. These guide you in the different types of data you can describe.</p>

        `,
        image: "/images/tour/desktop3.webp",
    },
    {
        text: `<p>Selecting a file in the file browser will add it to the metadata and navigate to it so that you can describe it in
        detail if you want. It also calculates file metadata for you. This is useful so you can check that the file is ok
        in the future (it hasn't changed in any way).</p>
        <p>Where possible, a file preview will be shown in the right hand panel.</p>
        `,
        image: "/images/tour/desktop4.webp",
    },
    {
        text: `<p>By default, Describo makes all of Schema.org available to you. In the image we can see all of the properties defined by schema.org
        for an entity of type File; all the way back up the hierarchy to Thing. In addition, we can see what data types each property is expecting.
        The 'about' property expects an entity of type 'ANY' so Describo will let you associate anything you've already
        described.</p>`,
        image: "/images/tour/desktop5.webp",
    },
    {
        text: `<p>Entities can be created directly. The 'Location' property is expecting an entity of type Place and Describo provides controls to create a new entity of that type.</p>`,
        image: "/images/tour/desktop6.webp",
    },
    {
        text: `<p>Navigating to the entity we can then start managing its data. Shown is the Geometry component which enables creating
        a custom geometry for the Geo property. In this case, we've defined a geographical area of Australia.</p>`,
        image:  "/images/tour/desktop7.webp",
    },
    {
        text: `<p>
            Whilst Describo creates and manages a JSON linked data structure internally, it is often helpful to view a tabular
            representation of the data. In this image we see all of the entities defined in the metadata as a list.<br/><br/>

            <a href="/docs/guide/browse.html" target="_blank">See the documentation for more information.</a>
        </p>`,
        image:  "/images/tour/desktop8.webp",
    },
    {
        text: `<p>
            On the Transform tab we have tools available to bulk process our data.<br/><br/>

            If you select a group of images Describo will show controls to produce thumbnails and web formats for those images. In addition,
            if you know your images contain text you can run them through the text extraction and named entity recognition tools as well
            as having the assistant extract topics, themes and subjects.<br/><br/>

            Likewise, if you select text files Describo can extract the entities and content descriptors for you.<br/><br/>

            <a href="/docs/guide/transforming-content.html" target="_blank">See the documentation for more information.</a>

        </p>`,
        image:  "/images/tour/desktop10.webp",
    },
    {
        text: `<p>
        The Transcribe tab provides tools to work with text based images individually. With credits to the cloud service you can use
        text extraction, named entity recognition and the assistant to help transcribe and markup the page.
        <p>
        <p>And even without, you can still manually transcribe and markup content.</p>
        <a href="/docs/guide/transcribing-content" target="_blank">See the documentation for more information.</a>
        </p>`,
        image:  "/images/tour/desktop11.webp",
    },
    {
        text: `
        <p>
        On the Discover tab Describo provides tools for e-Discvery. Navigate to the discover tab, select the
        files you wish to interrogate (supports: Microsoft Word and Powerpoint, PDF, txt and html), start the assistant and go.
        </p>
        <a href="/docs/guide/assistant-supported-discovery.html" target="_blank">See the documentation for more information.</a>

        `,
        image: "/images/tour/desktop14.webp",
    },
    {
        text: `<p>
        Now that you've done all this work to describe the entity relationships contained within your data;
        it's time to visualise it! On the visualise tab you have tools to deep dive into the data structure you've created
        in order to see who did what to whom and where they did it!
        <p>
        <a href="/docs/guide/visualising-the-structure" target="_blank">See the documentation for more information.</a>
        </p>`,
        image:  "/images/tour/desktop15.webp",
    },
    {
        text: `<p>
            Describo is built around RO-Crate and schema.org. However, schema.org likely does not define all of the things
            that you want to describe. So, Describo enables you to create a custom Vocabulary drawing from schema.org in addition
            to MODS, Premis-3, Records in Context - Ontology and SKOS.
        <p>
        <a href="docs/guide/vocabulary.html" target="_blank">See the documentation for more information.</a>
        </p>`,
        image:  "/images/tour/desktop16.webp",
    },
    {
        text: `<p>Whatever your work, licensing and / or classifying it is critically important so Describo provides
        easy to use tools to do this. In this image we see a dialog for applying a licence to your work.</p>`,
        image: "/images/tour/desktop17.webp",
    },

];
</script>

<StackComponent :cards="cards"  class="mt-10 p-4 bg-slate-100 rounded-lg"></StackComponent>
