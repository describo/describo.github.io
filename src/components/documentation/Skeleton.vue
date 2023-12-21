<template>
    <Stack :cards="cards" />
</template>

<script setup>
import Stack from "../Stack.vue";

const cards = [
    {
        text: `When you first start Describo desktop, the main dashboard will be shown.`,
        image: `/documentation/dashboard/dashboard1.png`,
    },
];
</script>
