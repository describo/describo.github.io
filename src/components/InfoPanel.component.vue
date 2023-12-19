<template>
    <div
        class="md:text-xl flex flex-col lg:flex-row justify-around items-center lg:border-b lg:border-gray-600"
    >
        <div class="w-full lg:w-2/5">
            <div class="text-gray-800 text-2xl mb-10">
                <slot name="title"></slot>
            </div>

            <div class="text-gray-600 lg:text-2xl">
                <slot name="text"></slot>
            </div>
        </div>
        <div class="w-full lg:w-3/5 flex flex-row justify-around p-6">
            <img
                :src="props.image"
                :style="imageStyles"
                fit="contain"
                v-if="props.image"
                class="m-4"
            />
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
    image: {
        type: String,
    },
    imageHeight: {
        type: String,
    },
});

let imageStyles = computed(() => ({ height: `${props.imageHeight}` }));
</script>
