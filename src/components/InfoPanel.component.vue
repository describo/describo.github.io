<template>
    <div
        class="md:text-xl flex flex-col lg:flex-row justify-around items-center mt-2 p-4"
        :class="{ 'border-t border-slate-400': props.border }"
    >
        <div
            :class="{
                'w-full lg:w-2/5': slots.content,
                'w-full': !slots.content,
            }"
        >
            <div class="text-gray-800 text-xl mb-10">
                <slot name="title"></slot>
            </div>

            <div class="text-gray-600 lg:text-lg flex flex-col space-y-4">
                <slot name="text"></slot>
            </div>
        </div>
        <div
            class="flex flex-row justify-around p-6"
            :class="{
                'w-full lg:w-3/5': slots.content,
            }"
            v-if="slots.content"
        >
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
import { computed, useSlots } from "vue";

const slots = useSlots();
const props = defineProps({
    border: {
        type: Boolean,
        default: true,
    },
    image: {
        type: String,
    },
    imageHeight: {
        type: String,
    },
});
console.log(props.border);

let imageStyles = computed(() => ({ height: `${props.imageHeight}` }));
</script>
