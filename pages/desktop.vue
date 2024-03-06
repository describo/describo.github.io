<template>
    <div class="flex flex-col space-y-10">
        <InfoPanelComponent image="/tour/desktop1.png" :border="false">
            <template #title>Describo Desktop</template>
            <template #text>
                <div>An application that you can use to describe your data; anywhere, anytime.</div>

                <div class="text-xl">
                    Read the documentation:
                    <a
                        href="https://describo.github.io/documentation/guide/tour.html"
                        target="_blank"
                    >
                        https://describo.github.io/documentation/guide/tour.html
                    </a>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Available for all major platforms for FREE</template>
            <template #text>
                <div
                    class="flex flex-row space-x-4 items-center bg-slate-100 p-4 text-slate-800 rounded-lg my-4"
                >
                    <div>
                        <font-awesome-icon
                            icon="fa-solid fa-circle-info"
                            size="2x"
                            class="text-red-600"
                        />
                    </div>
                    <div class="text-xl">
                        Describo is free to use. But if you like it and find it useful, please
                        consider supporting it:
                        <a href="https://describo.github.io/documentation/support.html">
                            https://describo.github.io/documentation/support.html
                        </a>
                    </div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-4">
                    <ReleasesComponent class="hidden md:inline" />
                    <div class="text-xl hidden md:inline">
                        Read the installation guide:
                        <a
                            href="https://describo.github.io/documentation/guide/installation.html"
                            target="_blank"
                        >
                            https://describo.github.io/documentation/guide/installation.html
                        </a>
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Questions, Issues, Bugs?</template>
            <template #content>
                <RepositoryLinksComponent
                    issueTrackerLink="https://github.com/describo/describo.github.io/issues/new/choose"
                >
                </RepositoryLinksComponent>
            </template>
        </InfoPanelComponent>
    </div>
</template>

<script setup>
import InfoPanelComponent from "../components/InfoPanel.component.vue";
import RepositoryLinksComponent from "../components/RepositoryLinks.component.vue";
import ReleasesComponent from "../components/Releases.component.vue";
</script>
