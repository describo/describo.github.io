<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
    <Layout>
        <template #doc-after> <FooterComponent class="mt-20 mb-10" /></template>
    </Layout>
</template>
