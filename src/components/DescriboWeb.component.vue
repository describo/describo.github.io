<template>
    <div class="flex flex-col space-y-20">
        <NavigationComponent />

        <InfoPanelComponent :image="describo1">
            <template #title>Get started quickly</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>Use the online version to get started describing your data.</div>
                    <div>
                        There are some limitations compared to the desktop version but you can still
                        do a lot.
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent :image="image2" image-height="200px">
            <template #title>Only available in Google Chrome (for now)</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Currently, it only works in Google Chrome because the other browsers haven't
                        yet implemented support for the capabilities it needs.
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <div class="py-4 text-2xl text-center">
            Access it at
            <link-component link="https://describo.github.io/web" />
        </div>

        <InfoPanelComponent>
            <template #title>Questions, Issues, Bugs?</template>
            <template #content>
                <RepositoryLinksComponent issueTrackerLink="https://github.com/describo/web/issues">
                </RepositoryLinksComponent>
            </template>
        </InfoPanelComponent>
    </div>
</template>

<script setup>
import InfoPanelComponent from "./InfoPanel.component.vue";
import RepositoryLinksComponent from "./RepositoryLinks.component.vue";
import LinkComponent from "./Link.component.vue";
import NavigationComponent from "./Navigation.component.vue";
import describo1 from "../assets/describo-1.png";
import image2 from "../assets/chrome.png";
</script>
