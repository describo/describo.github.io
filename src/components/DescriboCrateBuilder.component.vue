<template>
    <div class="flex flex-col space-y-10">
        <div class="md:text-xl md:px-10 flex flex-row justify-around">
            <div>
                Get the component from
                <a
                    href="https://github.com/describo/crate-builder-component "
                    target="_blank"
                    class="hover:text-orange-600"
                >
                    https://github.com/describo/crate-builder-component
                </a>
            </div>
        </div>
        <div
            class="md:text-xl md:px-10 text-center flex flex-col md:flex-row justify-around items-center"
        >
            <div class="md:w-2/3">
                Are you developing an application and want to embed the Describo crate building
                component? This is a self contained, VueJS 3 component that you can embed into your
                app. Load the RO crate file and optionally a profile, pass it to the component and
                let the component manage the rest for you. When the data changes it will be emitted
                back to your app for saving or handling as you wish.
            </div>
            <div class="md:w-1/3">
                <el-image :src="Crate1" style="height: 400px" fit="contain" />
            </div>
        </div>
        <div
            class="md:text-xl md:px-10 text-center flex flex-col md:flex-row justify-around items-center"
        >
            <div class="inline md:hidden">
                There's also a read only mode where you can use the component to just display an RO
                crate but disable all editing. Here's the crate rendered without a profile.
            </div>
            <div class="md:w-1/3">
                <el-image :src="Crate2" style="height: 400px" fit="contain" />
            </div>
            <div class="hidden md:w-2/3 md:inline p-4">
                There's also a read only mode where you can use the component to just display an RO
                crate but disable all editing. Here's the crate rendered without a profile.
            </div>
        </div>
        <div
            class="md:text-xl md:px-10 text-center flex flex-col md:flex-row justify-around items-center"
        >
            <div class="md:w-1/3">And here it is with a profile.</div>
            <div class="md:w-1/3">
                <el-image :src="Crate3" style="height: 400px" fit="contain" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Crate1 from "../assets/describo-crate-builder-1.png";
import Crate2 from "../assets/describo-crate-builder-2.png";
import Crate3 from "../assets/describo-crate-builder-3.png";
</script>
