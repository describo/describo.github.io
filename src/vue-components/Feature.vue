<template>
    <div
        class="flex flex-row space-x-3 md:place-content-center items-center py-2 px-4 lg:p-4 rounded-lg"
    >
        <div class="text-slate-700" v-if="props.icon">
            <font-awesome-icon :icon="props.icon" :size="props.size" />
        </div>
        <div class="text-base flex flex-col space-y-2 place-content-center">
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
});
</script>
