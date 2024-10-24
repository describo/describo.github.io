<template>
    <div class="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        <FeatureComponent
            link="/desktop"
            :icon="faDownload"
            class="col-span-1 md:col-span-2 lg:col-span-1 r bg-blue-100"
        >
            <template #title> Get Describo - free download </template>
        </FeatureComponent>
        <FeatureComponent link="/tour" :icon="faRoute" class="col-span-1 bg-blue-100">
            <template #title> Take the product tour </template>
        </FeatureComponent>
        <FeatureComponent
            link="/docs/articles/why-use-it"
            :icon="faInfoCircle"
            class="col-span-1 bg-blue-100"
        >
            <template #title> Why Describo? </template>
        </FeatureComponent>
        <FeatureComponent
            link="/docs/articles/articles-index"
            :icon="faFileLines"
            class="col-span-1 md:col-span-2 lg:col-span-1 bg-blue-100"
        >
            <template #title> Feature Articles </template>
        </FeatureComponent>
        <FeatureComponent
            link="/docs/guide/five-minute-tutorial"
            :icon="faPersonChalkboard"
            class="col-span-1 lg:col-span-2 bg-slate-100"
        >
            <template #title> 5 minute beginner tutorial </template>
            <template #content>
                <div class="text-xs no-underline">New to RO-Crate and Describo?</div>
            </template>
        </FeatureComponent>
        <FeatureComponent
            link="/docs/component/introduction"
            :icon="faCode"
            class="col-span-1lg:col-span-1 bg-slate-100"
        >
            <template #title> Developers </template>
            <template #content>
                <div class="text-xs no-underline">Use the Describo RO-Crate engine in your app</div>
            </template>
        </FeatureComponent>
        <FeatureComponent link="/describo-users" :icon="faUsers" class="bg-slate-100">
            <template #title> See who's using Describo </template>
        </FeatureComponent>
        <FeatureComponent
            link="https://github.com/describo/describo.github.io"
            target="_blank"
            :icon="faStar"
            class="col-span-1lg:col-span-1 bg-slate-100"
        >
            <template #title> Like it? Star us on Github. </template>
        </FeatureComponent>
        <FeatureComponent
            :icon="faBookOpenReader"
            class="col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-1 bg-slate-100"
        >
            <template #title> Cite Describo </template>
            <template #content>
                <div class="text-xs no-underline">
                    Marco La Rosa and contributors. 2023 - present. Describo.
                    https://describo.github.io
                </div>
            </template>
        </FeatureComponent>
    </div>
</template>

<script setup lang="ts">
import {
    faRoute,
    faDownload,
    faCode,
    faPersonChalkboard,
    faUsers,
    faStar,
    faBookOpenReader,
    faBook,
    faFileLines,
    faWandSparkles,
    faQuestionCircle,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
</script>
