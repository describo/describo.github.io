<template>
    <div
        class="flex flex-row space-x-3 place-content-start items-center py-4 px-4 lg:p-4 rounded-lg"
    >
        <div class="text-slate-700" v-if="props.icon">
            <font-awesome-icon :icon="props.icon" :size="props.size" class="text-indigo-600" />
        </div>
        <div class="text-sm md:text-base flex flex-col space-y-2 place-content-center">
            <LinkComponent :link="props.link" :target="props.target" v-if="props.link">
                <slot name="title"></slot>
            </LinkComponent>
            <slot name="title" v-else></slot>
            <div class="text-sm">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    link: { type: String },
    target: { type: String, default: "" },
    icon: { type: Object },
    size: { type: String, default: "2x" },
    center: { type: Boolean },
});
</script>
