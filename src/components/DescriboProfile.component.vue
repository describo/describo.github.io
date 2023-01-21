<template>
    <div class="flex flex-col space-y-10">
        <div class="md:text-xl md:px-10 flex flex-row justify-around">
            <div>
                Learn about profiles @
                <a
                    href="https://github.com/describo/profiles"
                    target="_blank"
                    class="hover:text-orange-600"
                >
                    https://github.com/describo/profiles
                </a>
            </div>
        </div>
        <div
            class="md:text-xl md:px-10 text-center flex flex-col lg:flex-row justify-around items-center"
        >
            <div class="lg:w-1/3">
                Profiles are how you tell Describo what it can do. In a profile you can define the
                layout to use for a crate (default or grouped); the entities that can be defined by
                the user and which properties are allowed for those entities; whether entities
                inherit from Schema.org or allow only what is in the profile; the datapacks that
                data can be sourced from.
            </div>
            <div>
                <el-image :src="Profile1" style="height: 600px" />
            </div>
        </div>
        <div class="md:text-xl md:px-10 text-center flex flex-col lg:flex-row justify-around">
            <div class="inline lg:hidden">
                Share your profiles with the community! Issue a pull request to the repo to share
                your profile. Just read the instructions for inclusion. As a bonus, Describo Desktop
                will make those profiles available to users!
            </div>
            <div class="lg:w-3/5">
                <el-image :src="Profile2" />
            </div>
            <div class="hidden lg:w-2/5 lg:inline">
                Share your profiles with the community! Issue a pull request to the repo to share
                your profile. Just read the instructions for inclusion. As a bonus, Describo Desktop
                will make those profiles available to users!
            </div>
        </div>
    </div>
</template>

<script setup>
import Profile1 from "../assets/describo-profile-1.png";
import Profile2 from "../assets/describo-profile-2.png";
</script>
