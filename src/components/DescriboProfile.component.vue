<template>
    <div class="flex flex-col space-y-10">
        <div class="md:text-xl md:px-10 flex flex-col items-center">
            <div>
                Learn more about profiles @
                <a
                    href="https://github.com/describo/profiles"
                    target="_blank"
                    class="hover:text-orange-600"
                >
                    https://github.com/describo/profiles
                </a>
            </div>
            <div class="my-6 text-center md:text-xl">
                Report <i class="fa-solid fa-bug"></i> or ask
                <i class="fa-regular fa-circle-question"></i> on the issue tracker:

                <br />
                <a href="https://github.com/describo/profiles/issues" target="_blank">
                    https://github.com/describo/profiles/issues
                </a>
            </div>
        </div>
        <div class="md:text-xl text-center flex flex-col lg:flex-row justify-around items-center">
            <div class="lg:w-2/3">
                <p>
                    Profiles are how you tell Describo what it can do. In a profile you can define
                    the layout to use for a crate (default or grouped); the entities that can be
                    defined by the user and which properties are allowed for those entities; whether
                    entities inherit from Schema.org or allow only what is in the profile; the
                    datapacks that data can be sourced from.
                </p>
                <p class="py-10">
                    View some examples in the repository @<br />
                    <a
                        href="https://github.com/describo/profiles/tree/master/domain-profiles"
                        target="_blank"
                        >https://github.com/describo/profiles/tree/master/domain-profiles</a
                    >
                </p>
            </div>
            <div class="lg:w-1/3">
                <el-image :src="Profile1" style="height: 500px" fit="contain" />
            </div>
        </div>
        <div class="md:text-xl text-center flex flex-col lg:flex-row justify-around items-center">
            <div class="inline lg:hidden">
                Use the online validator @
                <a href="https://describo.github.io/profiles/" target="_blank"
                    >https://describo.github.io/profiles/</a
                >
                to validate your profile.
            </div>
            <div class="lg:w-3/5">
                <el-image :src="Profile3" style="height: 500px" fit="contain" />
            </div>
            <div class="hidden lg:w-2/5 lg:inline p-4">
                Use the online validator @
                <a href="https://describo.github.io/profiles/" target="_blank"
                    ><br />https://describo.github.io/profiles/</a
                >
                <br />
                to validate your profile.
            </div>
        </div>
        <div class="md:text-xl text-center flex flex-col lg:flex-row justify-around items-center">
            <div class="lg:w-1/3 p-4">
                Share your profiles with the community! Issue a pull request to the repo to share
                your profile. Just read the instructions for inclusion. As a bonus, Describo Desktop
                will make those profiles available to users!
            </div>
            <div class="lg:w-2/3">
                <el-image :src="Profile2" style="" fit="contain" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Profile1 from "../assets/describo-profile-1.png";
import Profile2 from "../assets/describo-profile-2.png";
import Profile3 from "../assets/describo-profile-3.png";
</script>
