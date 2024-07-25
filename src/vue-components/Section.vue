<template>
    <div class="flex flex-col lg:flex-row lg:space-x-2">
        <Thumbnail
            :src="props.imageSrc"
            :width="props.imageWidth"
            class="p-10 hidden xl:block"
        ></Thumbnail>
        <Thumbnail
            :src="props.imageSrc"
            :width="200"
            class="px-1 py-6 visible xl:hidden"
        ></Thumbnail>
        <div>
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script setup>
import Thumbnail from "./Thumbnail.vue";

const props = defineProps({
    imageSrc: { type: String, required: true },
    imageWidth: { type: Number },
});
</script>
