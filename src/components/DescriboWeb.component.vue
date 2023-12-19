<template>
    <div class="flex flex-col space-y-20">
        <NavigationComponent />

        <InfoPanelComponent image="/web1.png">
            <template #title>Describo Web</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Access it at
                        <link-component link="https://describo.github.io/web" />
                    </div>
                    <div>Use this version to get started with the describo environment.</div>
                    <div>
                        There are limitations compared to the desktop version but you can still do a
                        lot.
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent image-height="200px">
            <template #title> Only available in Google Chrome and Microsoft Edge. </template>
            <template #text>
                <div>
                    Unfortunately, one of the capabilities it requires is not available in other
                    browsers.
                </div>
            </template>
            <template #content>
                <div class="flex flex-row space-x-10">
                    <div class="w-1/2">
                        <img src="/chrome.png" class="h-40" />
                    </div>
                    <div class="w-1/2">
                        <img src="/edge.png" class="h-40" />
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

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
</script>
