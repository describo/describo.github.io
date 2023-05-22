<template>
    <div class="flex flex-col text-gray-800">
        <NavigationComponent />
        <div class="flex flex-col items-center space-y-10">
            <DescriboHeaderComponent class="my-4 md:my-10" />
            <div class="md:text-2xl md:px-10 text-center">
                Describo is an ecosystem of tools, software components and services <br />to create
                and manage
                <a href="https://www.researchobject.org/ro-crate/specification.html" target="_blank"
                    >Research Object Crates</a
                >.
            </div>

            <div
                class="flex flex-col lg:flex-row space-x-4 flex-grow justify-between text-xl my-10"
            >
                <div class="flex flex-col space-y-2 w-full lg:w-1/2 text-center">
                    <div>
                        <i class="fa-solid fa-user fa-4x text-blue-600"></i>
                    </div>
                    <div>Are you a user wanting to describe your data?</div>
                    <div>
                        Try
                        <router-link to="/web" class="hover:text-orange-600"
                            >the web version</router-link
                        >
                        or the
                        <router-link to="/desktop" class="hover:text-orange-600"
                            >desktop application.</router-link
                        >
                    </div>
                    <div class="p-8">
                        Need help getting started?
                        <router-link to="/tutorial" class="hover:text-orange-600 text-2xl">
                            <span class="">Try the 5 minute tutorial.</span>
                        </router-link>
                    </div>
                </div>
                <div class="flex flex-col space-y-2 w-full lg:w-1/2 text-center">
                    <div>
                        <i class="fa-solid fa-code fa-4x text-orange-500"></i>
                    </div>
                    <div>
                        Are you a developer and want to embed the describo engine in your app?
                    </div>
                    <div>
                        <router-link to="/component" class="hover:text-orange-600"
                            >Find out more.
                        </router-link>
                    </div>
                </div>
            </div>
            <FeaturesComponent />
        </div>
    </div>
</template>

<script setup>
import NavigationComponent from "./Navigation.component.vue";
import DescriboHeaderComponent from "./DescriboHeader.component.vue";
import FeaturesComponent from "./Features.component.vue";
</script>
