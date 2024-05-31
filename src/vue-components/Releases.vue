<template>
    <div class="flex flex-col space-y-10 p-10">
        <div class="text-center text-2xl border-b py-12">
            Get Describo for {{ capitalize(data.activeTab) }} - free download.
        </div>

        <div class="flex flex-row space-x-32 place-content-center">
            <div
                class="flex flex-col space-y-2 justify-center items-center h-24 w-52 hover:text-blue-600 hover:cursor-pointer"
                :class="{ 'text-blue-600 bg-indigo-100 rounded-xl': data.activeTab === 'mac' }"
                @click="() => (data.activeTab = 'mac')"
            >
                <div><font-awesome-icon icon="fa-brands fa-apple" size="3x" /></div>
                <div>macOS</div>
            </div>
            <div
                class="flex flex-col space-y-2 justify-center items-center h-24 w-52 hover:text-blue-600 hover:cursor-pointer"
                :class="{ 'text-blue-600 bg-indigo-100 rounded-xl': data.activeTab === 'windows' }"
                @click="() => (data.activeTab = 'windows')"
            >
                <div><font-awesome-icon icon="fa-brands fa-windows" size="3x" /></div>
                <div>windows</div>
            </div>
            <div
                class="flex flex-col space-y-2 justify-center items-center h-24 w-52 hover:text-blue-600 hover:cursor-pointer"
                :class="{ 'text-blue-600 bg-indigo-100 rounded-xl': data.activeTab === 'linux' }"
                @click="() => (data.activeTab = 'linux')"
            >
                <div><font-awesome-icon icon="fa-brands fa-linux" size="3x" /></div>
                <div>linux</div>
            </div>
        </div>

        <!-- download for mac  -->
        <div class="flex flex-col space-y-4 group py-10" v-if="data.activeTab === 'mac'">
            <div class="flex flex-row space-x-24 place-content-center">
                <LinkComponent :link="data.download.macArm" target="">
                    <div class="flex flex-col space-y-2 items-center text-white font-semibold">
                        <div>
                            <img src="/images/logos/apple-m.webp" class="h-16" />
                        </div>
                        <div class="bg-blue-800 p-4 rounded-lg">
                            Download for Apple M processors
                        </div>
                    </div>
                </LinkComponent>
                <LinkComponent :link="data.download.macIntel" target="">
                    <div class="flex flex-col space-y-2 items-center">
                        <div class="flex flex-col space-y-2 items-center text-white font-semibold">
                            <div>
                                <img src="/images/logos/intel.webp" class="h-16" />
                            </div>
                            <div class="bg-blue-800 p-4 rounded-lg">
                                Download for Intel processors
                            </div>
                        </div>
                    </div>
                </LinkComponent>
            </div>
            <TipComponent class="text-center text-lg">
                Be sure to read the
                <LinkComponent link="/docs/guide/installation#macos" target="">
                    installation instructions
                </LinkComponent>
            </TipComponent>
        </div>

        <!-- download for windows -->
        <div class="flex flex-col space-y-4 group py-10" v-if="data.activeTab === 'windows'">
            <div class="flex flex-row space-x-24 place-content-center">
                <LinkComponent :link="data.download.wintel" target="">
                    <div class="flex flex-col space-y-2 items-center">
                        <div class="flex flex-col space-y-2 items-center text-white font-semibold">
                            <div>
                                <img src="/images/logos/intel-inside.webp" class="h-16" />
                            </div>
                            <div class="bg-blue-800 p-4 rounded-lg">
                                Download for Intel processors
                            </div>
                        </div>
                    </div>
                </LinkComponent>
                <LinkComponent :link="data.download.winarm" target="">
                    <div class="flex flex-col space-y-2 items-center">
                        <div class="flex flex-col space-y-2 items-center text-white font-semibold">
                            <div>
                                <img src="/images/logos/windows-arm-logo.webp" class="h-16" />
                            </div>
                            <div class="bg-blue-800 p-4 rounded-lg">
                                Download for ARM processors
                            </div>
                        </div>
                    </div>
                </LinkComponent>
            </div>
            <TipComponent class="text-center text-lg">
                Be sure to read the
                <LinkComponent link="/docs/guide/installation#windows" target="">
                    installation instructions
                </LinkComponent>
            </TipComponent>
        </div>

        <!-- download for linux -->
        <div class="flex flex-col space-y-4 group py-10" v-if="data.activeTab === 'linux'">
            <div class="flex flex-row space-x-24 place-content-center">
                <LinkComponent :link="data.download.linux" target="">
                    <div class="flex flex-col space-y-2 items-center">
                        <div class="flex flex-col space-y-2 items-center text-white font-semibold">
                            <div>
                                <img src="/images/logos/intel.webp" class="h-16" />
                            </div>
                            <div class="bg-blue-800 p-4 rounded-lg">
                                Download for Intel processors
                            </div>
                        </div>
                    </div>
                </LinkComponent>
            </div>
            <TipComponent class="text-center text-lg">
                Be sure to read the
                <LinkComponent link="/docs/guide/installation#linux" target="">
                    installation instructions
                </LinkComponent>
            </TipComponent>
        </div>
    </div>
</template>

<script setup>
import { capitalize } from "vue";
import { reactive, onBeforeMount } from "vue";
const data = reactive({
    release: undefined,
    latestReleaseURL: "https://api.github.com/repos/describo/desktop-releases/releases/latest",
    baseUrl: `https://github.com/describo/desktop-releases/download/`,
    activeTab: "mac",
    download: {
        windows: undefined,
        macArm: undefined,
        macIntel: undefined,
        linux: undefined,
    },
});
onBeforeMount(async () => {
    try {
        let response = await fetch(data.latestReleaseURL);
        if (response.status !== 200) {
            return;
        }
        data.release = await response.json();
        data.download.winarm = data.release?.assets.filter((asset) =>
            asset.name.match(/.*arm64.*Setup.exe/)
        )[0].browser_download_url;
        data.download.wintel = data.release?.assets.filter((asset) =>
            asset.name.match(/.*x64.*Setup.exe/)
        )[0].browser_download_url;
        data.download.macArm = data.release?.assets.filter((asset) =>
            asset.name.match(/arm64.dmg/)
        )?.[0]?.browser_download_url;
        data.download.linux = data.release?.assets.filter((asset) =>
            asset.name.match(/linux-x64.*zip/)
        )?.[0]?.browser_download_url;
        data.download.macIntel = data.release?.assets.filter((asset) =>
            asset.name.match(/x64.dmg/)
        )?.[0]?.browser_download_url;
    } catch (error) {
        console.log(error);
        data.release = undefined;
    }
});
</script>
