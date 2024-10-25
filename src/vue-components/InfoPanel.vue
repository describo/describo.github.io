<template>
    <div
        class="flex flex-col lg:flex-row lg:space-x-2 justify-around items-center my-10"
        :class="{ 'border-t border-slate-400': props.border }"
    >
        <div
            v-if="layout === 'ltr' || smallDevice"
            :class="{
                'w-full lg:w-2/5': slots.content,
                'w-full': !slots.content,
            }"
        >
            <div class="text-slate-800 text-lg lg:text-2xl xl:text-4xl font-bold mb-6 lg:px-4">
                <slot name="title"></slot>
            </div>

            <div class="text-slate-700 text-base flex flex-col space-y-4 lg:px-4 lg:text-lg">
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

        <div
            v-if="layout === 'rtl' && !smallDevice"
            :class="{
                'w-full lg:w-2/5': slots.content,
                'w-full': !slots.content,
            }"
        >
            <div class="text-slate-800 text-lg lg:text-2xl xl:text-4xl font-bold mb-6 lg:px-4">
                <slot name="title"></slot>
            </div>

            <div class="text-slate-700 text-base flex flex-col space-y-4 lg:px-4 lg:text-lg">
                <slot name="text"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, useSlots, ref, onMounted } from "vue";

const slots = useSlots();
const props = defineProps({
    border: {
        type: Boolean,
        default: false,
    },
    layout: {
        type: String,
        default: "ltr",
        validator: (v) => ["ltr", "rtl"].includes(v),
    },
});
const smallDevice = ref(true);

onMounted(() => {
    smallDevice.value = window.innerWidth < 900;
});
</script>
