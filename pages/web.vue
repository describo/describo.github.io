<template>
    <div class="flex flex-col space-y-10">
        <InfoPanelComponent image="/web1.png" :border="false">
            <template #title>Describo Web</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Access it at
                        <link-component link="https://describo.github.io/web" />. Use this version
                        to get started quickly with the describo environment. But for a more full
                        featured environment take a lookat
                        <router-link to="/desktop">Describo desktop</router-link>.
                    </div>

                    <div>
                        Only available in Google Chrome and Microsoft Edge (unfortunately one of the
                        capabilities it requires is not available in other browsers).
                    </div>
                    <div class="flex flex-row justify-center space-x-10">
                        <div>
                            <img src="/logos/chrome.png" class="h-20" />
                        </div>
                        <div>
                            <img src="/logos/edge.png" class="h-20" />
                        </div>
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
import InfoPanelComponent from "../components/InfoPanel.component.vue";
import RepositoryLinksComponent from "../components/RepositoryLinks.component.vue";
import LinkComponent from "../components/Link.component.vue";
</script>
