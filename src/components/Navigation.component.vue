<template>
    <div class="sticky top-0 z-50">
        <div class="flex flex-row justify-around md:space-x-8 p-4 text-xs md:text-2xl bg-slate-200">
            <router-link to="/"><i class="fa-solid fa-house"></i>&nbsp;describo</router-link>
            <div class="flex-grow hidden md:inline"></div>
            <div>
                <a href="https://github.com/describo" target="_blank" class="hover:text-orange-600">
                    <i class="fa-brands fa-github"></i>
                    Organisation
                </a>
            </div>
            <div>
                <a
                    href="https://github.com/orgs/describo/discussions"
                    target="_blank"
                    class="hover:text-orange-600"
                >
                    <i class="fa-solid fa-comment-dots"></i>
                    Discussions
                </a>
            </div>
            <div>
                <a
                    href="https://github.com/orgs/describo/discussions/categories/announcements"
                    target="_blank"
                    class="hover:text-orange-600"
                >
                    <i class="fa-solid fa-bullhorn"></i> Announcements
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const $route = useRoute();
</script>
