<template>
    <div class="flex flex-row space-x-2">
        <Thumbnail :src="props.imageSrc" :width="props.imageWidth" class="p-10"></Thumbnail>
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
