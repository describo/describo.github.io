<template>
    <div class="flex flex-row my-10 text-lg border-t border-slate-400">
        <div class="flex flex-col w-96">
            <div>
                <router-link to="/">
                    <img src="/logos/describo-logo.png" class="h-16 md:h-32" />
                </router-link>
            </div>
        </div>
        <div class="flex flex-col w-96">
            <div><router-link to="/desktop"> Desktop</router-link></div>
            <div><router-link to="/web"> Web</router-link></div>
            <div><router-link to="/component"> Component</router-link></div>
            <div><router-link to="/profile"> Profiles</router-link></div>
            <div><router-link to="/datapacks"> Data Packs</router-link></div>
        </div>
        <div class="flex flex-col">
            <div><router-link to="/about"> About Describo</router-link></div>
            <!-- <div><router-link to="/faqs"> FAQs</router-link></div> -->
            <div><router-link to="/documentation"> Documentation and Tutorials</router-link></div>
        </div>
    </div>
</template>

<script setup></script>
