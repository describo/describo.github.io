<template>
    <div
        class="md:text-xl flex flex-col lg:flex-row lg:space-x-2 justify-around items-center"
        :class="{ 'border-t border-slate-400': props.border }"
    >
        <div
            :class="{
                'w-full lg:w-2/5': slots.content,
                'w-full': !slots.content,
            }"
        >
            <div class="text-slate-800 text-xl mb-6 px-4">
                <slot name="title"></slot>
            </div>

            <div class="text-slate-700 text-base flex flex-col space-y-4 px-4">
                <slot name="text"></slot>
            </div>
        </div>
        <div
            class="text-base flex flex-row justify-around my-2 p-4"
            :class="{
                'w-full lg:w-3/5': slots.content,
            }"
        >
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
});
</script>
