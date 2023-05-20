<template>
    <a :href="props.link" target="_blank" class="hover:text-orange-600">
        <span v-if="text">{{ props.text }}</span>
        <span v-else>{{ props.link }}</span>
    </a>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
    },
    link: {
        type: String,
        required: true,
    },
});
</script>
