<template>
    <div class="flex flex-col space-y-20">
        <NavigationComponent />

        <InfoPanelComponent :image="describo">
            <template #title>Describo Desktop</template>
            <template #text>
                <div>
                    An application that you can use anywhere, anytime - even when you don't have any
                    network - to describe your data. It remember's what you were working on and
                    starts up next time right where you left off.
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent :image="desktop2">
            <template #title>Automatic Updates</template>
            <template #text>
                <div>
                    On startup, desktop checks for updates. If there is one, you'll be notified.
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Available for all major platforms</template>
            <template #content>
                <ReleasesComponent class="hidden md:inline" />
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Questions, Issues, Bugs?</template>
            <template #content>
                <RepositoryLinksComponent
                    issueTrackerLink="https://github.com/describo/desktop/issues"
                >
                </RepositoryLinksComponent>
            </template>
        </InfoPanelComponent>
    </div>
</template>

<script setup>
import NavigationComponent from "./Navigation.component.vue";
import InfoPanelComponent from "./InfoPanel.component.vue";
import RepositoryLinksComponent from "./RepositoryLinks.component.vue";
import describo from "../assets/describo-ui.png";
import desktop2 from "../assets/desktop-1.png";
import ReleasesComponent from "./Releases.component.vue";
</script>
