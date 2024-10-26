<template>
    <div class="flex flex-col items-center drop-shadow-2xl">
        <div v-if="enableZoom">
            <ImageZoom :src="props.src" />
            <TipComponent>Click the image for a closer look!</TipComponent>
        </div>
        <div v-else>
            <img :src="props.src" />
        </div>
    </div>
</template>

<script setup>
import ImageZoom from "./ImageZoom.vue";
import { onBeforeMount, ref } from "vue";
const props = defineProps({
    src: { type: String, required: true },
});
const enableZoom = ref(true);

// if we're on a touch device and window small - disable zoom
//   this way we can pinch to zoom
onBeforeMount(() => {
    if ("ontouchstart" in window && window.innerWidth <= 1200) {
        enableZoom.value = false;
    }
});
</script>
