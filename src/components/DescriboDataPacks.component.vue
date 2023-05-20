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

        <InfoPanelComponent>
            <template #title>Country Data</template>
            <template #content>
                <div class="flex flex-row space-x-2">
                    <el-image :src="pack1" style="height: 400px" fit="contain" />
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Language Data</template>
            <template #text>Language datasets from Austlang and Glottolog</template>
            <template #content>
                <div class="flex flex-row space-x-2">
                    <el-image :src="pack2" style="height: 400px" fit="contain" />
                    <el-image :src="pack3" style="height: 400px" fit="contain" />
                </div>
            </template>
        </InfoPanelComponent>
    </div>
</template>

<script setup>
import InfoPanelComponent from "./InfoPanel.component.vue";
import RepositoryLinksComponent from "./RepositoryLinks.component.vue";
import NavigationComponent from "./Navigation.component.vue";
import pack1 from "../assets/pack-1.png";
import pack2 from "../assets/pack-2.png";
import pack3 from "../assets/pack-3.png";
</script>
