<template>
    <div class="container mx-auto mb-20 p-4">
        <NavigationComponent />
        <NuxtPage />
        <FooterComponent />
    </div>
</template>

<script setup>
import NavigationComponent from "./components/Navigation.component.vue";
import FooterComponent from "./components/Footer.component.vue";
</script>

<style>
@media (min-width: 1536px) {
    .container {
        max-width: 1200;
    }
}
</style>
