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
useSeoMeta({
    title: "Describo: JSON-LD tools, software and services to manage RO-Crates.",
    ogTitle: "Describo: JSON-LD tools, software and services to manage RO-Crates.",
    description:
        '"Describo, Research Object, Research-Object Crate, RO-Crate, rocrate, metadata, jsonld, editor, VueJS component, RO-Crate editor, JSON Linked Data, jsonld, json-ld, Linked Data',
    ogDescription:
        "Describo, Research Object, Research-Object Crate, RO-Crate, rocrate, metadata, jsonld, editor, VueJS component, RO-Crate editor, JSON Linked Data, jsonld, json-ld, Linked Data",
});
</script>

<style>
@media (min-width: 1536px) {
    .container {
        max-width: 1200;
    }
}
</style>
