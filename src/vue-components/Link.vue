<template>
    <a :href="props.link" :target="props.target">
        <slot></slot>
    </a>
</template>

<script setup>
const props = defineProps({
    link: {
        type: String,
    },
    target: {
        type: String,
        default: "_blank",
    },
    styling: {
        type: String,
    },
});
</script>
