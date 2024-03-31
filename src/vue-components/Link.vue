<template>
    <a
        :href="props.link"
        :target="props.target"
        :class="{ 'vp-external-link-icon': props.target === '_blank' }"
    >
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
});
</script>
