<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
    <Layout>
        <template #doc-bottom> <FooterComponent class="mb-10" /></template>
    </Layout>
</template>
