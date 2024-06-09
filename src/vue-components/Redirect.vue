<template>
    <!-- <p class="text-center">
        This page has moved to: <a :href="props.to">{{ props.to }}</a
        >. You will be redirected automatically in 5 seconds.
    </p> -->
</template>
<script setup>
const props = defineProps({
    to: { type: String, required: true },
});

window.location.replace(props.to);
</script>
