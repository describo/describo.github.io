<template>
    <div
        class="md:text-xl flex flex-col lg:flex-row justify-around items-center p-4"
        :class="{ 'border-t border-slate-400': props.border }"
    >
        <div
            :class="{
                'w-full lg:w-2/5': slots.content,
                'w-full': !slots.content,
            }"
        >
            <div class="text-slate-900 text-xl mb-10">
                <slot name="title"></slot>
            </div>

            <div class="text-base text-slate-800 flex flex-col space-y-4">
                <slot name="text"></slot>
            </div>
        </div>
        <div
            class="text-base flex flex-row justify-around p-6"
            :class="{
                'w-full lg:w-3/5': slots.content,
            }"
        >
            <img
                v-if="props.image"
                :src="props.image"
                :style="imageStyles"
                class="object-contain m-4"
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

let imageStyles = computed(() => ({ height: `${props.imageHeight}` }));
</script>
