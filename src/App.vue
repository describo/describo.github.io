<template>
    <div class="flex flex-col text-gray-800 bg-stone-300">
        <NavigationComponent />
        <div class="flex flex-col items-center">
            <DescriboHeaderComponent class="my-20" />
            <div class="text-3xl p-10 text-center">
                Describo is an ecosystem of tools, software components and services <br />to create
                and manage Research Object Crates.
            </div>

            <DescriboDesktopComponent class="my-10" />
        </div>
    </div>
</template>

<script setup>
import NavigationComponent from "./components/Navigation.component.vue";
import DescriboHeaderComponent from "./components/DescriboHeader.component.vue";
import DescriboDesktopComponent from "./components/DescriboDesktop.component.vue";
</script>
