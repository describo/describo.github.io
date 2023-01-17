<template>
    <div class="flex flex-col">
        <div class="text-3xl px-10 text-center">
            If you are a user looking for a tool to describe your data, download the describo
            application for your platform.
        </div>
        <div class="grid grid-rows-2 gap-4 p-20">
            <div class="grid grid-cols-2 grid-flow-col gap-4">
                <div><img :src="Desktop1" /></div>
                <div><img :src="Desktop2" /></div>
            </div>
            <div class="grid grid-cols-2 grid-flow-col gap-4">
                <div><img :src="Desktop3" /></div>
                <div><img :src="Desktop4" /></div>
            </div>
        </div>
        <ReleasesComponent />
    </div>
</template>

<script setup>
import Desktop1 from "../assets/describo-desktop-1.png";
import Desktop2 from "../assets/describo-desktop-2.png";
import Desktop3 from "../assets/describo-desktop-3.png";
import Desktop4 from "../assets/describo-desktop-4.png";
import ReleasesComponent from "./Releases.component.vue";
</script>
