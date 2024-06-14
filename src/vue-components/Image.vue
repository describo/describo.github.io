<template>
    <div class="flex flex-col">
        <div v-if="enableZoom">
            <img :src="src" data-zoomable />
            <TipComponent>Click the image for a closer look!</TipComponent>
        </div>
        <div v-else>
            <img :src="src" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    src: { type: String, required: true },
});
const enableZoom = window.innerWidth > "900" ? true : false;
</script>
