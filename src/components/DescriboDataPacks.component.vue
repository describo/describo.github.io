<template>
    <div class="flex flex-col space-y-20">
        <NavigationComponent />
        <InfoPanelComponent>
            <template #title>Data Packs</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Data packs contain JSON-LD configuration that Describo can look up and
                        inject in to the crate.
                    </div>
                    <div>
                        Do you have JSON-LD information of a generic nature that might be reusable
                        by others? Issue a pull request to the repo to share your pack. Just read
                        the instructions for inclusion.
                    </div>
                </div>
            </template>
            <template #content>
                <RepositoryLinksComponent
                    repositoryText="Learn more about data packs"
                    repositoryLink="https://github.com/describo/data-packs"
                    issueTrackerLink="https://github.com/describo/data-packs/issues"
                >
                </RepositoryLinksComponent>
            </template>
        </InfoPanelComponent>

        <Stack :cards="cards" class="p-4 bg-slate-100 rounded-lg"></Stack>
    </div>
</template>

<script setup>
import InfoPanelComponent from "./InfoPanel.component.vue";
import RepositoryLinksComponent from "./RepositoryLinks.component.vue";
import NavigationComponent from "./Navigation.component.vue";
import Stack from "./Stack.vue";

const cards = [
    { text: "Country data pack", image: "/pack1.png" },
    { text: "Austlang language data pack", image: "/pack2.png" },
    { text: "Glottolog language data pack", image: "/pack3.png" },
];
</script>
