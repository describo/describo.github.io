<template>
    <div class="flex flex-col space-y-10">
        <div class="md:text-xl md:px-10 flex flex-col items-center">
            <div>
                Get the component from
                <a
                    href="https://github.com/describo/crate-builder-component "
                    target="_blank"
                    class="hover:text-orange-600"
                >
                    https://github.com/describo/crate-builder-component
                </a>
            </div>
            <div class="my-6 text-center text-2xl">
                Report <i class="fa-solid fa-bug"></i> or ask
                <i class="fa-regular fa-circle-question"></i> on the issue tracker:

                <br />
                <a
                    href="https://github.com/describo/crate-builder-component/issues"
                    target="_blank"
                >
                    https://github.com/describo/crate-builder-component/issues
                </a>
            </div>
        </div>
        <div
            class="md:text-xl md:px-10 text-center flex flex-col md:flex-row justify-around items-center"
        >
            <div class="md:w-2/3">
                Are you developing an application and want to embed the Describo crate building
                component? This is a self contained, VueJS 3 component that you can embed into your
                app. Load the RO crate file and optionally a profile, pass it to the component and
                let the component manage the rest for you. When the data changes it will be emitted
                back to your app for saving or handling as you wish.
            </div>
            <div class="md:w-1/3 px-4">
                <el-image :src="Crate1" style="height: 400px" fit="contain" />
            </div>
        </div>

        <div
            class="md:text-xl md:px-10 text-center flex flex-col md:flex-row justify-around items-center"
        >
            <div class="flex flex-row">
                <div class="w-96">
                    <el-image :src="reactLogo" class="h-20" />
                </div>
                <div>
                    <p>
                        React developers, our friends in Hungary at
                        <a href="https://www.sztaki.hu/en" target="_blank"
                            >STZAKI - Institute for computer science and control</a
                        >
                        extended the component to produce a web component that they then wrapped
                        into a nice, self contained, react component. Get it from:
                        <a
                            href="https://github.com/describo/crate-builder-component-react"
                            target="_blank"
                            >https://github.com/describo/crate-builder-component-react</a
                        >.
                    </p>
                    <p>
                        <i class="fa-solid fa-hands-clapping"></i
                        ><i class="fa-solid fa-hands-clapping"></i
                        ><i class="fa-solid fa-hands-clapping"></i>
                    </p>
                </div>
            </div>
        </div>
        <div
            class="md:text-xl md:px-10 text-center flex flex-col md:flex-row justify-around items-center"
        >
            <div class="inline md:hidden">
                There's also a read only mode where you can use the component to just display an RO
                crate but disable all editing. Here's the crate rendered without a profile.
            </div>
            <div class="md:w-1/3">
                <el-image :src="Crate2" style="height: 400px" fit="contain" />
            </div>
            <div class="hidden md:w-2/3 md:inline p-4">
                There's also a read only mode where you can use the component to just display an RO
                crate but disable all editing. Here's the crate rendered without a profile.
            </div>
        </div>
        <div
            class="md:text-xl md:px-10 text-center flex flex-col md:flex-row justify-around items-center"
        >
            <div class="md:w-1/3">And here it is with a profile.</div>
            <div class="md:w-1/3">
                <el-image :src="Crate3" style="height: 400px" fit="contain" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Crate1 from "../assets/describo-crate-builder-1.png";
import Crate2 from "../assets/describo-crate-builder-2.png";
import Crate3 from "../assets/describo-crate-builder-3.png";
import reactLogo from "../assets/react-logo.png";
</script>
