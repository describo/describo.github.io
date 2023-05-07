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
                <el-tabs v-model="data.activeTab" stretch @tab-change="updateRoute">
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
import NavigationComponent from "./Navigation.component.vue";
import DescriboHeaderComponent from "./DescriboHeader.component.vue";
import DescriboDesktopComponent from "./DescriboDesktop.component.vue";
import DescriboCrateBuilderComponent from "./DescriboCrateBuilder.component.vue";
import DescriboProfileComponent from "./DescriboProfile.component.vue";
import DescriboDataPacksComponent from "./DescriboDataPacks.component.vue";
import { reactive, watch, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
const $route = useRoute();
const $router = useRouter();

const data = reactive({
    activeTab: "desktop",
});

onBeforeMount(() => {
    if ($route.path === "/") {
        $router.push("/desktop");
    } else {
        data.activeTab = $route.name;
    }
});

function updateRoute() {
    $router.push(`/${data.activeTab}`);
}
</script>

<style>
@media (min-width: 1536px) {
    .container {
        max-width: 1024px;
    }
}
</style>
