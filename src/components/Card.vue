<template>
    <div class="flex flex-col">
        <div class="w-full text-center p-4 xl:p-6">
            <slot name="text"></slot>
        </div>
        <div v-if="slots.image" class="flex w-full place-content-center">
            <slot name="image"></slot>
        </div>
    </div>
</template>

<script setup>
import { useSlots } from "vue";
const slots = useSlots();

const props = defineProps({
    image: { type: String },
});
</script>
