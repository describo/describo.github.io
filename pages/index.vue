<template>
    <div class="flex flex-col text-gray-800">
        <div class="flex flex-col items-center space-y-10">
            <div
                class="my-2 flex flex-col space-y-2 items-center w-full md:flex-row md:space-x-4 md:place-content-between"
            >
                <div class="md:w-2/3 text-lg xl:text-2xl">
                    Describo is an ecosystem of tools, software components and services to create
                    and manage <em>linked open data</em> in the form of
                    <a
                        href="https://www.researchobject.org/ro-crate/specification.html"
                        target="_blank"
                    >
                        Research Object Crates </a
                    >.
                </div>
                <div class="flex flex-row items-center text-lg xl:text-2xl">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-users-rectangle" />
                        &nbsp;
                    </div>
                    <RouterLink to="/describo-users/"> See who's using describo. </RouterLink>
                </div>
            </div>

            <Stack :cards="cards" class="p-4 bg-slate-100 rounded-lg"></Stack>

            <div
                class="flex flex-col space-y-4 lg:flex-row lg:space-x-2 lg:text-xl lg:place-content-center bg-slate-100 p-4 rounded"
            >
                <div class="flex flex-col space-y-4 w-full lg:w-1/2 text-center font-light">
                    <div>
                        <font-awesome-icon
                            icon="fa-solid fa-user"
                            size="4x"
                            class="text-blue-600"
                        />
                    </div>
                    <div>Are you a user looking to get started?</div>
                    <div class="text-2xl">
                        Install the
                        <router-link to="/desktop/" class="hover:text-orange-600">
                            desktop application
                        </router-link>
                        to get a full featured environment for creating and managing your research
                        data including being able to describe files, manage data packs and much,
                        much more (coming soon).
                    </div>
                    <div>
                        Alternately, try the
                        <router-link to="/online/" class="hover:text-orange-600">
                            web version
                        </router-link>
                        to get started quickly. It's not as full featured as the desktop application
                        but it's good for viewing RO Crates and performing basic metadata work.
                    </div>
                    <div class="p-8">
                        Need help getting started?
                        <a
                            href="https://describo.github.io/documentation/guide/five-minute-tutorial.html"
                            class="hover:text-orange-600 md:text-2xl"
                        >
                            <span class="">Try the 5 minute tutorial.</span>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col space-y-2 w-full lg:w-1/2 text-center">
                    <div>
                        <font-awesome-icon
                            icon="fa-solid fa-code"
                            size="4x"
                            class="text-orange-500"
                        />
                    </div>
                    <div>
                        Are you a developer and want to embed the describo engine in your app?
                    </div>
                    <div>
                        <router-link to="/component/" class="hover:text-orange-600"
                            >Find out more.
                        </router-link>
                    </div>
                </div>
            </div>

            <InfoPanelComponent image="/describo-star-us.png">
                <template #title>Like it?</template>
                <template #text>
                    <div class="flex flex-col space-y-4 text-center">
                        <div>
                            If you like this work please consider giving us a
                            <font-awesome-icon
                                icon="fa-solid fa-star"
                                class="text-yellow-400"
                                size="2x"
                            />
                            on github @
                            <link-component link="https://github.com/describo/describo.github.io" />
                            (It's ok if you want to star the other repo's too!)
                        </div>
                    </div>
                </template>
            </InfoPanelComponent>

            <InfoPanelComponent>
                <template #text>
                    <div class="text-center">
                        If you use any of the Describo components or tools please cite it.
                    </div>
                    <div class="p-8 bg-slate-100 text-slate-800 rounded-lg">
                        Marco La Rosa and contributors. 2023 - present. Describo.
                        https://describo.github.io
                    </div>
                </template>
            </InfoPanelComponent>
        </div>
    </div>
</template>

<script setup>
import InfoPanelComponent from "../components/InfoPanel.component.vue";
import Stack from "../components/Stack.vue";
import LinkComponent from "../components/Link.component.vue";

const cards = [
    {
        text: `The dashboard. Select a folder of content to describe; load a previously used folder or manage data pack data.
        Whether you are describing research data or creating a cultural collection, eveyrthing you do will be stored in this folder.
        Nothing is locked up inside Describo.`,
        image: "/tour/desktop1.png",
    },

    {
        text: `When the RO Crate file is loaded the root dataset is shown in the middle pane along with a file browser on the left.
       In the navigation bar we can see which folder is loaded as well as controls to load a profile and access application settings.
        `,
        image: "/tour/desktop2.png",
    },
    {
        text: "Pressing the help button activates context sensitive help. And the documentation link in the navigation bar links to context specific documentation.",
        image: "/tour/desktop1a.png",
    },
    {
        text: `Selecting a entity of type 'File' will calculate file metadata, create an entry for the file in the crate and display a preview of it
        in the right hand panel. The preview can be full screened to get a better look at the file.`,
        image: "/tour/desktop3.png",
    },
    {
        text: `Describo makes all of Schema.org available to you. In the image we can see all of the properties defined by schema.org
        for an entity of type File; all the way back up the hierarchy to Thing. In addition, we can see what data types each property is expecting.
        The 'about' property expects an entity of type 'Thing' and Describo will enforce that.`,
        image: "/tour/desktop4.png",
    },
    {
        text: `Entities can be created directly. 'Spatial Coverage' is expecting an entity of type Place and Describo provides controls
        to create a new entity of that type. In this example, we are creating an entity of type Place with the name 'Somewhere'.`,
        image: "/tour/desktop5.png",
    },
    {
        text: `Navigating to the entity we can then start managing its data. Shown is the Geometry component which enables creating
        a custom geometry for the Geo property.`,
        image: "/tour/desktop6.png",
    },
    {
        text: `For HASS researchers, Describo can perform Optical Character Recoginition (OCR) and entity recognition of your data. You can mark
        up entities and create rich datasets of entities mentioned in your data. see:
        <a href="https://describo.github.io/documentation/guide/tutorials/transcribing-content.html">https://describo.github.io//documentation/guide/tutorials/transcribing-content.html</a>`,
        image: "/tour/transcribe9.png",
    },
    {
        text: `When using the transcription tools the data is written into the RO-Crate. And the markup is created as data attributes in the HTML.`,
        image: ["/tour/transcribe10.png", "/tour/transcribe11.png"],
    },
    {
        text: `Describo is totally configurable via profiles. Profiles are JSON files that describe how the interface looks and  what a user can do.
        Profiles can be loaded from your computer or from the Describo Profiles Repository. Profiles are cached locally for reuse.`,
        image: "/tour/desktop7.png",
    },
    {
        text: `When a profile is loaded, the view will adapt based on the content of that profile. In this example, the profile defines
        a tabbed layout for Dataset entities in addition to showing specific properties. This allows the profile author to define
        exactly how the UI should look for their users and guide them on what is required.`,
        image: "/tour/desktop8.png",
    },
    {
        text: `Describo is totally configurable. It supports English and Hungarian (for now) and there are controls for various aspects of its operation.`,
        image: ["/tour/desktop9.png", "/tour/describo-i18-en.png", "/tour/describo-i18-hu.png"],
    },
    {
        text: `There are controls to view the entities in the crate and jump directly to any entity.`,
        image: "/tour/desktop10.png",
    },
    { text: `There is a control to directly edit the context.`, image: "/tour/desktop11.png" },
    { text: `And one to preview the JSON linked data.`, image: "/tour/desktop12.png" },
    { text: `Describo is themable.`, image: "/tour/desktop13.png" },
    { text: `Describo can display crates in readonly mode.`, image: "/tour/desktop14.png" },
    {
        text: `Describo can display complex entities like actions and relationships that link other entities together.`,
        image: "/tour/desktop15.png",
    },
];
// const cards = [
//     {
//         text: "The dashboard. Select a folder of content to describe; load a previously used folder or manage data pack data.",
//         image: "/desktop1.png",
//     },
//     {
//         text: "Context aware help.",
//         image: "/desktop1a.png",
//     },
//     {
//         text: `When the RO Crate file is loaded the root dataset is shown on the right along with a file browser on the left.
//        In the navigation bar we can see which folder is loaded and controls to load a profile as well as access the tool settings.
//         `,
//         image: "/desktop2.png",
//     },
//     {
//         text: `Selecting a entity of type 'File' will display a preview of that file. The preview can be full screened to get a better look at it.`,
//         image: "/desktop3.png",
//     },
//     {
//         text: `Describo makes all of Schema.org available to you. In the image we can see all of the properties defined by schema.org
//         for an entity of type Dataset; all the way back up the hierarchy to Thing. In addition, we can see what data types each property is expecting.
//         The 'about' property expects an entity of type 'Thing' and describo will enforce that.`,
//         image: "desktop4.png",
//     },
//     {
//         text: `Entities can be created directly. 'Spatial Coverge' is expecting an entity of type place and describo provides controls
//         to create a new entity. In this case, we are creating an entity of type place with the name 'Somewhere'.`,
//         image: "desktop5.png",
//     },
//     {
//         text: `Navigating to the entity we can then start managing its data. Shown is the Geometry component which enables creating
//         a custom geometry for the Geo property.`,
//         image: "desktop6.png",
//     },
//     {
//         text: `Describo is totally configurable via profiles. Profiles are JSON files that describe how the interface looks and  what a user can do.
//         Profiles can be loaded from your computer or from the Describo Profiles Repository. Profiles are cached locally for reuse.`,
//         image: "desktop7.png",
//     },
//     {
//         text: `When a profile is loaded, the view will adapt based on the content of that profile. In this case, the profile defines
//         a tabbed layout for Dataset entities in addition to showing specific properties. This allows the profile author to define
//         exactly how the UI should look for their users and guide them on what is required.`,
//         image: "desktop8.png",
//     },
//     {
//         text: `Describo is configurable. It supports English and Hungarian (for now) and there are controls for various aspects of its operation.`,
//         image: ["desktop9.png", "describo-i18-en.png", "describo-i18-hu.png"],
//     },
//     {
//         text: `There are controls to view the entities in the crate and jump directly to any entity wherever it is.`,
//         image: "desktop10.png",
//     },
//     { text: `There is also a control to directly edit the context.`, image: "desktop11.png" },
//     { text: `And one to preview the JSON linked data.`, image: "desktop12.png" },
//     { text: `Describo is themable.`, image: "desktop13.png" },
//     { text: `Describo can display crates in readonly mode.`, image: "desktop14.png" },
//     {
//         text: `Describo can display complex entities like actions and relationships that link other entities together.`,
//         image: "desktop15.png",
//     },
// ];
</script>
