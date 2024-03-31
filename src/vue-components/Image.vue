<template>
    <div class="flex flex-col">
        <img :src="src" data-zoomable />
        <TipComponent>Click the image for a closer look!</TipComponent>
    </div>
</template>

<script setup>
const props = defineProps({
    src: { type: String, required: true },
});
</script>
