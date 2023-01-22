<template>
    <div class="container mx-auto">
        <div class="flex flex-col text-gray-800">
            <NavigationComponent />
            <div class="flex flex-col items-center">
                <DescriboHeaderComponent class="my-4 md:my-10" />
                <div class="md:text-2xl md:px-10 text-center">
                    Describo is an ecosystem of tools, software components and services to create
                    and manage Research Object Crates.
                </div>
            </div>

            <div class="px-4 mt-10">
                <el-tabs v-model="data.activeTab" stretch>
                    <el-tab-pane label="Desktop" name="desktop">
                        <template #label>
                            <div
                                class="md:text-4xl text-gray-800"
                                :class="{ 'text-blue-800': data.activeTab === 'desktop' }"
                            >
                                Desktop
                            </div>
                        </template>
                        <DescriboDesktopComponent class="md:my-10" />
                    </el-tab-pane>
                    <el-tab-pane label="Component" name="component">
                        <template #label>
                            <div
                                class="md:text-4xl text-gray-800"
                                :class="{ 'text-blue-800': data.activeTab === 'component' }"
                            >
                                Component
                            </div>
                        </template>
                        <DescriboCrateBuilderComponent class="md:my-10" />
                    </el-tab-pane>
                    <el-tab-pane label="Profile" name="profile">
                        <template #label>
                            <div
                                class="md:text-4xl text-gray-800"
                                :class="{ 'text-blue-800': data.activeTab === 'profile' }"
                            >
                                Profile
                            </div>
                        </template>
                        <DescriboProfileComponent class="md:m-10" />
                    </el-tab-pane>
                    <el-tab-pane label="Data Packs" name="datapacks">
                        <template #label>
                            <div
                                class="md:text-4xl text-gray-800"
                                :class="{ 'text-blue-800': data.activeTab === 'datapacks' }"
                            >
                                Data Packs
                            </div>
                        </template>
                        <DescriboDataPacksComponent class="md:my-10" />
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div class="h-20"></div>
        </div>
    </div>
</template>

<script setup>
import NavigationComponent from "./components/Navigation.component.vue";
import DescriboHeaderComponent from "./components/DescriboHeader.component.vue";
import DescriboDesktopComponent from "./components/DescriboDesktop.component.vue";
import DescriboCrateBuilderComponent from "./components/DescriboCrateBuilder.component.vue";
import DescriboProfileComponent from "./components/DescriboProfile.component.vue";
import DescriboDataPacksComponent from "./components/DescriboDataPacks.component.vue";

import { reactive } from "vue";

const data = reactive({
    activeTab: "desktop",
});
</script>
