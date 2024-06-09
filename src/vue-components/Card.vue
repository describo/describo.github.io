<template>
    <div class="flex flex-col space-y-1">
        <div class="w-full text-sm md:text-base text-left lg:text-center p-1">
            <slot name="text"></slot>
        </div>
        <div class="flex flex-row space-x-1 items-center">
            <div v-if="slots.image" class="flex w-full place-content-center">
                <slot name="image"></slot>
            </div>
            <div v-if="slots.video" class="flex w-full place-content-center">
                <slot name="video"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSlots } from "vue";
const slots = useSlots();
</script>
