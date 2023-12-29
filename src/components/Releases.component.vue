<template>
    <div class="flex flex-col">
        <div class="flex flex-row justify-around">
            <div class="hover:text-orange-600 cursor-pointer text-center">
                <a :href="data.download.windows" download class="hover:text-orange-600">
                    <i class="fa-brands fa-windows fa-4x"></i>
                </a>
            </div>
            <div class="flex flex-row space-x-6">
                <div class="hover:text-orange-600 cursor-pointer text-center">
                    <a
                        :href="data.download.macArm"
                        download
                        class="flex flex-row hover:text-orange-600 items-center"
                    >
                        <i class="fa-brands fa-apple fa-4x"></i>
                        <img src="/logos/apple-m.jpeg" class="h-12 translate-y-3 translate-x-1" />
                    </a>
                </div>
                <div class="hover:text-orange-600 cursor-pointer text-center">
                    <a
                        :href="data.download.macIntel"
                        download
                        class="flex flex-row hover:text-orange-600 items-center"
                    >
                        <i class="fa-brands fa-apple fa-4x"></i>
                        <img src="/logos/intel.png" class="h-8 translate-y-1" />
                    </a>
                </div>
            </div>
            <div class="hover:text-orange-600 cursor-pointer text-center">
                <a :href="data.download.linux" download class="hover:text-orange-600">
                    <i class="fa-brands fa-linux fa-4x"></i>
                </a>
            </div>
        </div>
        <div class="mt-8 text-base text-center">
            <div>
                Check out available releases @
                <a
                    href="https://github.com/describo/desktop-releases/releases/latest"
                    target="_blank"
                    class="hover:text-orange-600 text-xl"
                    >https://github.com/describo/desktop-releases/releases/latest</a
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
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
onMounted(async () => {
    try {
        let response = await fetch(data.latestReleaseURL);
        if (response.status !== 200) {
            return;
        }
        data.release = await response.json();
        data.download.windows = data.release?.assets.filter((asset) =>
            asset.name.match(/.*Setup.exe/)
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
