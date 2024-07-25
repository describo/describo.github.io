<template>
    <div class="flex flex-col items-center">
        <img :src="src" :style="style" class="h-auto" />
    </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
    src: { type: String, required: true },
    width: { type: Number },
});

let style = computed(() => {
    if (props.width) return `min-width: ${props.width}px`;
    return `min-width: 100px`;
});
</script>
