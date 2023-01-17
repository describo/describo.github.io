<template>
    <div class="flex flex-col text-gray-800 bg-stone-300">
        <NavigationComponent />
        <div class="flex flex-col items-center">
            <DescriboHeaderComponent class="my-10" />
            <div class="text-2xl p-10 text-center">
                Describo is an ecosystem of tools, software components and services <br />to create
                and manage Research Object Crates.
            </div>
        </div>

        <div class="px-4">
            <el-tabs v-model="data.activeTab">
                <el-tab-pane label="Desktop" name="desktop">
                    <template #label>
                        <div
                            class="text-4xl text-gray-800"
                            :class="{ 'text-blue-700': data.activeTab === 'desktop' }"
                        >
                            Desktop
                        </div>
                    </template>
                    <DescriboDesktopComponent class="my-10" />
                </el-tab-pane>
                <el-tab-pane label="Component" name="component">
                    <template #label>
                        <div
                            class="text-4xl text-gray-800"
                            :class="{ 'text-blue-700': data.activeTab === 'component' }"
                        >
                            Component
                        </div>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup>
import NavigationComponent from "./components/Navigation.component.vue";
import DescriboHeaderComponent from "./components/DescriboHeader.component.vue";
import DescriboDesktopComponent from "./components/DescriboDesktop.component.vue";

import { reactive } from "vue";

const data = reactive({
    activeTab: "desktop",
});
</script>
