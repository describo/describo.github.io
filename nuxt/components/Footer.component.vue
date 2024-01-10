<template>
    <div class="flex flex-col md:flex-row place-content-between my-10 border-t border-slate-400">
        <div class="flex flex-col items-center md:items-start w-96">
            <router-link to="/">
                <img src="/logos/describo-logo.png" class="h-16 lg:h-24" />
            </router-link>
        </div>
        <div class="flex flex-col md:flex-row place-content-evenly">
            <div class="flex flex-col md:w-48">
                <div><router-link to="/desktop"> Desktop</router-link></div>
                <div><router-link to="/web"> Web</router-link></div>
                <div><router-link to="/component"> Component</router-link></div>
                <div><router-link to="/profiles"> Profiles</router-link></div>
                <div><router-link to="/datapacks"> Data Packs</router-link></div>
            </div>
            <div class="flex flex-col md:w-60">
                <div>
                    <a href="https://describo.github.io/documentation/about.html" target="_blank">
                        About Describo</a
                    >
                </div>
                <div>
                    <a href="https://describo.github.io/documentation" target="_blank">
                        Documentation
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
