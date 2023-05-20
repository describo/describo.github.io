<template>
    <div class="flex flex-col space-y-20">
        <NavigationComponent />

        <InfoPanelComponent heading="Describo Desktop" :image="desktop1">
            <template #title>Describo Desktop</template>
            <template #text>
                <div>
                    An application that you can use anywhere, anytime - even when you don't have any
                    network - to describe your data. It remember's what you were working on and
                    starts up next time right where you left off.
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
import desktop1 from "../assets/describo-1.png";
import ReleasesComponent from "./Releases.component.vue";
</script>
