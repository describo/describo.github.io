<template>
    <div class="flex flex-col space-y-10">
        <div class="md:text-xl md:px-10 flex flex-col items-center">
            <div>
                Learn more about data packs @
                <a
                    href="https://describo.github.io/data-packs/"
                    target="_blank"
                    class="hover:text-orange-600"
                >
                    https://describo.github.io/data-packs/
                </a>
            </div>
            <div class="my-6 text-center md:text-xl">
                Report <i class="fa-solid fa-bug"></i> or ask
                <i class="fa-regular fa-circle-question"></i> on the issue tracker:

                <br />
                <a href="https://github.com/describo/data-packs/issues" target="_blank"
                    >https://github.com/describo/data-packs/issues</a
                >
            </div>
        </div>
        <div class="md:text-xl md:px-10 text-center flex flex-row justify-around items-center">
            <div>
                Data packs are canned JSON-LD configuration that Describo can look up and inject in
                to the crate. Do you have canned JSON-LD information of a generic nature that might
                be reusable by others? Issue a pull request to the repo to share your pack. Just
                read the instructions for inclusion.
            </div>
        </div>
        <div
            class="md:text-xl md:px-10 text-center flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 justify-around items-center"
        >
            <div class="flex flex-col">
                <div>A datapack about countries.</div>
                <div>
                    <el-image :src="Pack1" style="height: 350px" fit="contain" />
                </div>
            </div>
            <div class="flex flex-col">
                <div class="">A data pack containing Austlang Language information.</div>
                <div>
                    <el-image :src="Pack2" style="height: 350px" fit="contain" />
                </div>
            </div>
            <div class="flex flex-col">
                <div>A datapack containing Glottolog Language information.</div>
                <div>
                    <el-image :src="Pack3" style="height: 350px" fit="contain" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Pack1 from "../assets/describo-datapack-1.png";
import Pack2 from "../assets/describo-datapack-2.png";
import Pack3 from "../assets/describo-datapack-3.png";
</script>
