<template>
    <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/4 p-2 md:border-r md:border-slate-400">
            <div v-for="(page, pageIdx) of pages">
                {{ page.title }}

                <div
                    v-for="(child, childIdx) of page.children"
                    class="pl-8 cursor-pointer hover:text-green-700"
                    :class="{
                        'text-green-600': pageIdx === g && childIdx === p,
                    }"
                    @click="load(pageIdx, childIdx)"
                >
                    {{ child.title }}
                </div>
            </div>
        </div>
        <div class="w-full md:w-3/4 p-2 flex flex-col">
            <component :is="pages[g].children[p].component"></component>
        </div>
    </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
const $router = useRouter();
const $route = useRoute();

const g = ref(0);
const p = ref(0);
const pages = [
    {
        title: "General",
        children: [
            {
                title: "5 minute RO Crate and Describo Tutorial",
                component: defineAsyncComponent(() => import("./Tutorial.component.vue")),
            },
            {
                title: "Frequently Asked Questions",
                component: defineAsyncComponent(() => import("./Faqs.component.vue")),
            },
        ],
    },
    {
        title: "Desktop",
        children: [
            {
                title: "Dashboard",
                component: defineAsyncComponent(() => import("../documentation/Dashboard.vue")),
            },
            {
                title: "Working with an RO-Crate",
                component: defineAsyncComponent(() => import("../documentation/Description.vue")),
            },
        ],
    },
];
if ($route.params.path) {
    pages.forEach((group, groupIdx) => {
        if (group.title.toLowerCase() === $route.params.path.split("/")[0]) {
            g.value = groupIdx;
            group.children.forEach((page, pageIdx) => {
                if (
                    page.title.toLowerCase() === $route.params.path.split("/")[1].replace(/_/g, " ")
                ) {
                    p.value = pageIdx;
                }
            });
        }
    });
}
updateRoute(g.value, p.value);

function load(groupIdx, pageIdx) {
    g.value = groupIdx;
    p.value = pageIdx;
    updateRoute(g.value, p.value);
}

function updateRoute(groupIdx, pageIdx) {
    const groupName = pages[groupIdx].title.replace(/ /g, "_").toLowerCase();
    const pageName = pages[groupIdx].children[pageIdx].title.replace(/ /g, "_").toLowerCase();
    $router.push({ path: `/documentation/${groupName}/${pageName}` });
}
</script>
