<template>
    <div class="flex flex-col space-y-10">
        <div
            class="flex flex-row space-x-6 place-content-between border-b p-4 group hover:text-orange-600"
        >
            <div class="flex flex-row space-x-2 items-center">
                <div><font-awesome-icon icon="fa-brands fa-apple" size="3x" /></div>
                <div>Apple</div>
            </div>
            <div class="flex flex-col space-y-2">
                <LinkComponent :link="data.download.macArm" target="">
                    <div class="flex flex-row space-x-2 items-center">
                        <div>
                            <img src="/images/logos/apple-m.jpeg" class="h-10" />
                        </div>
                        <div>Download for Apple M processors</div>
                    </div>
                </LinkComponent>
                <LinkComponent :link="data.download.macIntel" target="">
                    <div class="flex flex-row space-x-2 items-center">
                        <div>
                            <img src="/images/logos/intel.png" class="h-10" />
                        </div>
                        <div>Download for Intel processors</div>
                    </div>
                </LinkComponent>
                <TipComponent class="text-center">
                    Be sure to read the
                    <LinkComponent link="/docs/guide/installation#macos" target="">
                        installation instructions
                    </LinkComponent>
                </TipComponent>
            </div>
        </div>

        <div
            class="flex flex-row space-x-6 place-content-between border-b p-4 group hover:text-orange-600"
        >
            <div class="flex flex-row space-x-2 items-center">
                <div><font-awesome-icon icon="fa-brands fa-windows" size="3x" /></div>
                <div>Windows</div>
            </div>
            <div class="flex flex-col">
                <LinkComponent :link="data.download.wintel" target="">
                    <div class="flex flex-row space-x-2 items-center">
                        <div>
                            <img src="/images/logos/intel.png" class="h-10" />
                        </div>
                        <div>Download for Intel processors</div>
                    </div>
                </LinkComponent>
                <LinkComponent :link="data.download.winarm" target="">
                    <div>Download for ARM processors</div>
                </LinkComponent>
                <TipComponent class="text-center">
                    Be sure to read the
                    <LinkComponent link="/docs/guide/installation#windows" target="">
                        installation instructions
                    </LinkComponent>
                </TipComponent>
            </div>
        </div>

        <div
            class="flex flex-row space-x-6 place-content-between border-b p-4 group hover:text-orange-600"
        >
            <div class="flex flex-row space-x-2 items-center">
                <div><font-awesome-icon icon="fa-brands fa-linux" size="3x" /></div>
                <div>Linux</div>
            </div>
            <div class="flex flex-col">
                <LinkComponent :link="data.download.linux" target="">
                    <div class="flex flex-row space-x-2 items-center">
                        <div>
                            <img src="/images/logos/intel.png" class="h-10" />
                        </div>
                        <div>Download for Intel processors</div>
                    </div>
                </LinkComponent>
                <TipComponent class="text-center">
                    Be sure to read the
                    <LinkComponent link="/docs/guide/installation#linux" target="">
                        installation instructions
                    </LinkComponent>
                </TipComponent>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onBeforeMount } from "vue";
const data = reactive({
    release: undefined,
    latestReleaseURL: "https://api.github.com/repos/describo/desktop-releases/releases/latest",
    baseUrl: `https://github.com/describo/desktop-releases/download/`,
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
