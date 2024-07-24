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
        in the future (it hasn't changed in anyway).</p>
        <p>Notice that if possible, a file preview will be shown in the right hand panel.</p>
        `,
        image: "/images/tour/desktop4.webp",
    },
    {
        text: `<p>Describo makes all of Schema.org available to you. In the image we can see all of the properties defined by schema.org
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
            An important part of any description process is quality assurance. For example, do all the person descriptions have given name
            and family name defined? In this image we can easily review the descriptions for the 3 people described and see that some of them
            are incomplete.
        </p>`,
        image:  "/images/guide-browse/browse3.webp",
    },
    {
        text: `<p>If you register with describo.cloud and purchase credits, Describo can help you perform bulk transformations on your data. From
        recognising and marking up named entities to extracting the topics, themes and subjects contained, getting to know your data has
        never been easier.
        <p>
        <a href="/docs/guide/transforming-content" target="_blank">See the documentation for more information.</a>
        </p>`,
        image:  "/images/guide-transform/transform1.webp",
    },
    {
        text: `<p>Describo can perform Optical Character Recoginition (OCR) and entity recognition of your data. Even without the cloud service, you can mark
        up entities and create rich datasets of entities mentioned in your data.</p>
        <p>
        <a href="/docs/guide/transcribing-content" target="_blank">See the documentation for more information.</a>
        </p>`,
        image:  "/images/tour/desktop8.webp",
    },
    {
        text: `<p>When using the transcription tools the data is written into the metadata file. In this image we see all of the
        entities that were marked up in the text associated as 'Mentions' in this file. In addition, Describo created a HTML
        transcription file with the markup created as data attributes in the HTML.</p>`,
        image:  "/images/tour/desktop9.webp",
    },
    {
        text: `<p>Describo interfaces with a conversational AI assistant to help you interrogate and understand your
        content. In this image the assistant has first summarised the text then, acting as an anthropologist,
        it has described the main topics. Finally, as a social scientist, the assistant explains the narrative
        with respect to any cultural symbolism. In each response, detailed examples are provided from the text to support
        the commentary.</p>
        <p>In addition, we can directly update the metadata for the file with the information we uncover by
        working with the assistant. </p>
        <p>
            <a href="/docs/guide/transcribing-content-assistant" target="_blank">See the documentation for more information.</a>
        </p>
        `,
        image:   "/images/tour/desktop10.webp"
    },
    {
        text: `<p>Here we see the descriptions and defined terms we created whilst working with the assistant.`,
        image:   "/images/tour/desktop11.webp"
    },
    {
        text: `<p>And defined terms can be looked up and attached to other content that you are working on.</p>`,
        image:   "/images/tour/desktop12.webp"
    },
    {
        text: `<p>The conversational AI assistant can be used for e-Discovery. Navigate to the discover tab, select the
        files you wish to interrogate (supports: Microsoft Word and Powerpoint, PDF, txt and html), start the assistant and go.
        `,
        image: "/images/tour/desktop13.webp",
    },
    {
        text: `<p>In this image we see the conversation on the right and direct updating of the metadata on the left.</p>
        <p>
        <a href="/docs/guide/assistant-supported-discovery" target="_blank">See the documentation for more information.</a>
        </p>`,
        image: "/images/tour/desktop14.webp",
    },
    {
        text: `<p>If we navigate back to the describe tab we see the metadata we created whilst using the assistant.</p>`,
        image: "/images/tour/desktop15.webp",
    },
    {
        text: `<p>Now that you've done all this work to describe the entity relationships contained within your data;
        it's time to visualise it! On the visualise tab you have tools to deep dive into the data structure you've created
        in order to see who did what to whom and where they did it!
        <p>
        <a href="/docs/guide/visualising-the-structure" target="_blank">See the documentation for more information.</a>
        </p>`,
        image:  "/images/guide-visualise/visualise5.webp",
    },
    {
        text: `<p>Whatever your work, licensing and / or classifying it is critically important so Describo provides
        easy to use tools to do this. In this image we see a dialog for applying a licence to your work.</p>`,
        image: "/images/tour/desktop16.webp",
    },
    {
        text: `<p>And here we see the licence applied.</p>`,
        image: "/images/tour/desktop17.webp",
    },

];
</script>

<StackComponent :cards="cards"  class="mt-10 p-4 bg-slate-100 rounded-lg"></StackComponent>
