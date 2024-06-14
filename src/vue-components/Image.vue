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
let enableZoom = true;

// if we're on a touch device and window small - disable zoom
//   this way we can pinch to zoom
if ("ontouchstart" in window && window.innerWidth <= 1200) {
    enableZoom = false;
}
</script>
