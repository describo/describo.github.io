<template>
    <div class="flex flex-col space-y-20">
        <InfoPanelComponent image="/desktop3.png" :border="false">
            <template #title>Describo Desktop</template>
            <template #text>
                <div>
                    An application that you can use anywhere, anytime - even when you don't have any
                    network - to describe your data. It remember's what you were working on and
                    starts up next time right where you left off.
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent image="desktop-updates.png">
            <template #title>Automatic Updates</template>
            <template #text>
                <div>
                    On startup, desktop checks for updates. If there is one, you'll be notified.
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Available for all major platforms for FREE</template>
            <template #text>
                <div
                    class="flex flex-row space-x-4 items-center bg-slate-100 p-4 text-slate-800 rounded-lg my-4"
                >
                    <div><i class="text-red-600 fa-solid fa-circle-info fa-2x"></i></div>
                    <div>
                        Describo is currently unfunded. It you like it and find it useful, please
                        reach out to discuss how you can support its development.
                        <a href="mailto:m@lr.id.au" target="_blank">Email Marco La Rosa.</a>
                    </div>
                </div>
            </template>
            <template #content>
                <ReleasesComponent class="hidden md:inline" />
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Windows users</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Windows will report a warning when you try to run Describo as the
                        application is unsigned. Unfortunately, it's very expensive to get a signing
                        certificate and out of reach of the project.
                    </div>
                    <div>
                        Note that you can still run the application. Follow the prompts on the
                        right.
                    </div>
                    <div>
                        You can confirm that the package is legitimate by downloading the package
                        for your platform from
                        <a
                            href="https://github.com/describo/desktop-releases/releases/latest"
                            target="_blank"
                            class="hover:text-orange-600 text-xl"
                            >https://github.com/describo/desktop-releases/releases/latest</a
                        >
                        and comparing the SHA256 hash of the package with the hash written into the
                        file 'sha256-checksums.txt'.
                    </div>
                </div>
            </template>
            <template #content>
                <Stack :cards="cards" class="p-4 bg-slate-100 rounded-lg"></Stack>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Questions, Issues, Bugs?</template>
            <template #content>
                <RepositoryLinksComponent
                    issueTrackerLink="https://github.com/describo/desktop-releases/issues"
                >
                </RepositoryLinksComponent>
            </template>
        </InfoPanelComponent>
    </div>
</template>

<script setup>
import InfoPanelComponent from "../InfoPanel.component.vue";
import RepositoryLinksComponent from "../RepositoryLinks.component.vue";
import ReleasesComponent from "../Releases.component.vue";
import Stack from "../Stack.vue";

const cards = [
    { text: '1. Click "More info"\'', image: "/windows-sig1.png" },
    { text: '2. Select "Run anyway"', image: "/windows-sig2.png" },
    { text: '3. Select "Extract all"', image: "/windows-sig3.png" },
    { text: '4. Choose where to extract the and then press "Extract"', image: "/windows-sig4.png" },
    { text: "5. Navigate to the folder where you extracted the package and run Describo." },
];
</script>
