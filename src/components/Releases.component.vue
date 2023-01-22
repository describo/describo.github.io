<template>
    <div class="flex flex-col">
        <div class="flex flex-col">
            <div class="md:text-3xl text-center">
                Download the latest release for your platform and start describing your data.
                <div class="text-sm">
                    Describo Desktop is an application designed for your desktop so it won't work on
                    your phone or tablet.
                </div>
            </div>
            <div class="mt-10 flex flex-row justify-around">
                <div class="hover:text-orange-600 cursor-pointer text-center">
                    <a :href="data.download.windows" download class="hover:text-orange-600">
                        <i class="fa-brands fa-windows fa-8x"></i>
                    </a>
                </div>
                <div class="hover:text-orange-600 cursor-pointer text-center">
                    <a :href="data.download.mac" download class="hover:text-orange-600">
                        <i class="fa-brands fa-apple fa-8x"></i>
                        <div>(Apple M processors only)</div>
                    </a>
                </div>
                <div class="hover:text-orange-600 cursor-pointer text-center">
                    <a :href="data.download.linux" download class="hover:text-orange-600">
                        <i class="fa-brands fa-linux fa-8x"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="mt-8 text-base text-center">
            <div>
                Check out available releases @
                <a
                    href="https://github.com/describo/desktop/releases"
                    target="_blank"
                    class="hover:text-orange-600"
                    >https://github.com/describo/desktop/releases</a
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
const data = reactive({
    release: undefined,
    latestReleaseURL: "https://api.github.com/repos/describo/desktop/releases/latest",
    baseUrl: `https://github.com/describo/desktop/releases/download/`,
    download: {
        windows: undefined,
        mac: undefined,
        linux: undefined,
    },
});
onMounted(async () => {
    try {
        let response = await fetch(data.latestReleaseURL);
        if (response.status !== 200) {
            return;
        }
        data.release = await response.json();
        data.download = {
            windows: data.release?.assets.filter((asset) => asset.name.match(/win32-x64.*.zip/))[0]
                .browser_download_url,
            mac: data.release?.assets.filter((asset) => asset.name.match(/arm64.dmg/))[0]
                .browser_download_url,
            linux: data.release?.assets.filter((asset) => asset.name.match(/linux-x64.*.zip/))[0]
                .browser_download_url,
        };
    } catch (error) {
        data.release = undefined;
    }
});
</script>
