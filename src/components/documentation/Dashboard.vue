<template>
    <Stack :cards="cards" class="bg-slate-100 p-4 rounded-lg" />
</template>

<script setup>
import Stack from "../Stack.vue";

const cards = [
    {
        text: `When you first start Describo desktop, the main dashboard will be shown. From here
        you can select a folder of content to describe or load a previous used folder. The main application
        settings are also accessible with the button in the top right of the navigation.`,
        image: `/documentation/desktop/dashboard1.png`,
    },
];
</script>
