<template>
    <div class="container mx-auto mb-20 p-4 md:p-0">
        <router-view />
    </div>
</template>

<script setup></script>

<style>
@media (min-width: 1536px) {
    .container {
        max-width: 1200;
    }
}
</style>
