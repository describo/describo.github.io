<template>
    <div class="sticky top-0 z-50 border-b border-slate-400">
        <div
            class="flex flex-row justify-between md:space-x-8 p-2 text-base xl:text-xl bg-slate-200"
        >
            <router-link to="/">
                <img src="/logos/describo-logo.png" class="h-16 xl:h-20" />
            </router-link>
            <div class="flex-grow md:inline"></div>
            <div
                class="flex flex-col md:flex-row justify-between space-y-1 space-x-0 md:space-x-8 md:space-y-0 md:pt-4"
            >
                <div>
                    <router-link to="/documentation"> Documentation</router-link>
                </div>
                <div>
                    <a
                        href="https://github.com/describo"
                        target="_blank"
                        class="hover:text-orange-600"
                    >
                        <i class="fa-brands fa-github"></i>
                        <div class="inline">&nbsp;Organisation</div>
                    </a>
                </div>
                <div class="hidden lg:inline">
                    <a
                        href="https://github.com/orgs/describo/discussions"
                        target="_blank"
                        class="hover:text-orange-600"
                    >
                        <i class="fa-solid fa-comment-dots"></i>
                        <div class="inline">&nbsp;Discussions</div>
                    </a>
                </div>
                <div class="hidden lg:inline">
                    <a
                        href="https://github.com/orgs/describo/discussions/categories/announcements"
                        target="_blank"
                        class="hover:text-orange-600"
                    >
                        <i class="fa-solid fa-bullhorn"></i>
                        <div class="inline">&nbsp;Announcements</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
