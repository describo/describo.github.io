<template>
    <div class="flex flex-col items-center drop-shadow-2xl">
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
import { onMounted, ref } from "vue";
const props = defineProps({
    src: { type: String, required: true },
});
const enableZoom = ref(true);

// if we're on a touch device and window small - disable zoom
//   this way we can pinch to zoom
onMounted(() => {
    if ("ontouchstart" in window && window.innerWidth <= 1200) {
        enableZoom.value = false;
    }
});
</script>
