<template>
    <div class="flex flex-col">
        <div class="text-xl px-10 text-center">
            Describo Desktop is an application to describe your data. It creates Research Object
            Crate metadata.
        </div>
        <el-carousel :interval="6000" type="card" height="500px" class="my-10">
            <el-carousel-item v-for="(item, idx) of data.carousel" :key="idx">
                <el-card>
                    <div class="flex flex-col items-center">
                        <div>
                            <el-image :src="item.image" style="height: 400px" />
                        </div>
                        <div class="">{{ item.text }}</div>
                    </div>
                </el-card>
            </el-carousel-item>
        </el-carousel>
        <ReleasesComponent />
    </div>
</template>

<script setup>
import { reactive } from "vue";
import Desktop1 from "../assets/describo-desktop-1.png";
import Desktop2 from "../assets/describo-desktop-2.png";
import Desktop3 from "../assets/describo-desktop-3.png";
import Desktop4 from "../assets/describo-desktop-4.png";
import ReleasesComponent from "./Releases.component.vue";

const data = reactive({
    carousel: [
        {
            image: Desktop1,
            text: "The main screen. Select a folder to describe or load in a previous folder.",
        },
        {
            image: Desktop2,
            text: "Describe the data in the selected folder.",
        },
        {
            image: Desktop3,
            text: "Select a profile. Describo's User Interface is driven by configuration and is adaptable by applying a profile.",
        },
        {
            image: Desktop4,
            text: "With the Research Object Crate Profile applied we get a tabbed interface with distinct properties showing.",
        },
    ],
});
</script>
