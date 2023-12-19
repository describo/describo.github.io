<template>
    <div class="flex flex-col text-gray-800">
        <NavigationComponent />
        <div class="flex flex-col items-center space-y-10">
            <DescriboHeaderComponent class="md:my-6" />
            <div
                class="flex flex-col space-y-2 items-center w-full md:flex-row md:space-x-4 md:place-content-between"
            >
                <div class="md:w-2/3 md:text-2xl">
                    Describo is an ecosystem of tools, software components and services to create
                    and manage
                    <a
                        href="https://www.researchobject.org/ro-crate/specification.html"
                        target="_blank"
                    >
                        Research Object Crates </a
                    >.
                </div>
                <div class="flex flex-row items-center text-xl md:text-2xl">
                    <div>
                        <i class="fa-solid fa-users-rectangle"></i>
                        &nbsp;
                    </div>
                    <RouterLink to="/describo-users"> See who's using describo. </RouterLink>
                </div>
            </div>

            <Stack :cards="cards" class="p-4 bg-slate-100 rounded-lg"></Stack>

            <div
                class="flex flex-col space-y-4 lg:flex-row lg:space-x-2 lg:text-xl lg:place-content-center bg-slate-100 p-4 rounded"
            >
                <div class="flex flex-col space-y-4 w-full lg:w-1/2 text-center">
                    <div>
                        <i class="fa-solid fa-user fa-4x text-blue-600"></i>
                    </div>
                    <div>Are you a user wanting to describe your data?</div>
                    <div>
                        Try the
                        <router-link to="/web" class="hover:text-orange-600">
                            web version
                        </router-link>
                        to get started quickly. It's not as full featured as the desktop application
                        but it's good for viewing RO Crates and performing basic metadata work.
                    </div>
                    <div>
                        Alternately, install the
                        <router-link to="/desktop" class="hover:text-orange-600">
                            desktop application
                        </router-link>
                        to get a full featured environment for creating and managing your research
                        data including being able to describe files and much more coming soon.
                    </div>
                    <div class="p-8">
                        Need help getting started?
                        <router-link to="/tutorial" class="hover:text-orange-600 md:text-2xl">
                            <span class="">Try the 5 minute tutorial.</span>
                        </router-link>
                    </div>
                </div>
                <div class="flex flex-col space-y-2 w-full lg:w-1/2 text-center">
                    <div>
                        <i class="fa-solid fa-code fa-4x text-orange-500"></i>
                    </div>
                    <div>
                        Are you a developer and want to embed the describo engine in your app?
                    </div>
                    <div>
                        <router-link to="/component" class="hover:text-orange-600"
                            >Find out more.
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- <FeaturesComponent class="border-t border-gray-600 pt-10" /> -->
            <InfoPanelComponent image="/describo-star-us.png">
                <template #title>Like it?</template>
                <template #text>
                    <div class="flex flex-col space-y-4 text-center">
                        <div>
                            If you like this work please consider giving us a
                            <i class="fa-solid fa-star text-yellow-400 fa-2x"></i>
                            on github @
                            <link-component link="https://github.com/describo/describo.github.io" />
                            (It's ok if you want to star the other repo's too!)
                        </div>
                    </div>
                </template>
            </InfoPanelComponent>
        </div>
    </div>
</template>

<script setup>
import NavigationComponent from "./Navigation.component.vue";
import DescriboHeaderComponent from "./DescriboHeader.component.vue";
import InfoPanelComponent from "./InfoPanel.component.vue";
import Stack from "./Stack.vue";
import LinkComponent from "./Link.component.vue";
import FeaturesComponent from "./Features.component.vue";

const cards = [
    {
        text: "The dashboard. Select a folder of content to describe or load a previously used folder.",
        image: "/desktop1.png",
    },
    {
        text: `When the RO Crate file is loaded the root dataset is shown on the right along with a file browser on the left.
       In the navigation bar we can see which folder is loaded and controls to load a profile as well as access the tool settings.
        `,
        image: "/desktop2.png",
    },
    {
        text: `Selecting a entity of type 'File' will display a preview of that file. The preview can be full screened to get a better look at it.`,
        image: "/desktop3.png",
    },
    {
        text: `Describo makes all of Schema.org available to you. In the image we can see all of the properties defined by schema.org
        for an entity of type Dataset; all the way back up the hierarchy to Thing. In addition, we can see what data types each property is expecting.
        The 'about' property expects an entity of type 'Thing' and describo will enforce that.`,
        image: "desktop4.png",
    },
    {
        text: `Entities can be created directly. 'Spatial Coverge' is expecting an entity of type place and describo provides controls
        to create a new entity. In this case, we are creating an entity of type place with the name 'Somewhere'.`,
        image: "desktop5.png",
    },
    {
        text: `Navigating to the entity we can then start managing its data. Shown is the Geoemtry component which enables creating
        a custom geometry for the Geo property.`,
        image: "desktop6.png",
    },
    {
        text: `Describo is totally configurable via profiles. Profiles are JSON files that describe how the interface looks and  what a user can do.
        Profiles can be loaded from your computer or from the Describo Profiles Repository. Profiles are cached locally for reuse.`,
        image: "desktop7.png",
    },
    {
        text: `When a profile is loaded, the view will adapt based on the content of that profile. In this case, the profile defines
        a tabbed layout for Dataset entities in addition to showing specific properties. This allows the profile author to define
        exactly how the UI should look for their users and guide them on what is required.`,
        image: "desktop8.png",
    },
    {
        text: `Describo is configurable. It supports English and Hungarian (for now) and there are controls for various aspects of its operation.`,
        image: "desktop9.png",
    },
    {
        text: `There are controls to view the entities in the crate and jump directly to any entity wherever it is.`,
        image: "desktop10.png",
    },
    { text: `There is also a control to directly edit the context.`, image: "desktop11.png" },
    { text: `And one to preview the JSON linked data.`, image: "desktop12.png" },
];
</script>
