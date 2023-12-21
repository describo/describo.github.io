<template>
    <div class="container mx-auto mb-20 p-4 md:p-0">
        <NavigationComponent />
        <router-view class="my-4" />
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
