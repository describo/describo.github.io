<template>
    <div class="relative my-10">
        <div
            class="flex flex-col lg:flex-row lg:space-x-2 justify-around items-center"
            :class="{ 'border-t border-slate-400': props.border }"
        >
            <!-- Content -->
            <transition name="fade" mode="out-in">
                <div
                    v-if="layout === 'ltr' || smallDevice"
                    :key="currentIndex"
                    :class="{
                        'w-full lg:w-2/5': currentPanel.content,
                        'w-full': !currentPanel.content,
                    }"
                >
                    <div
                        class="text-slate-800 text-lg lg:text-2xl xl:text-4xl font-bold mb-6 lg:px-4"
                    >
                        {{ currentPanel.title }}
                    </div>

                    <div
                        class="text-slate-700 text-base flex flex-col space-y-4 lg:px-4 lg:text-lg"
                    >
                        <div v-html="currentPanel.text"></div>
                    </div>

                    <FeatureComponent
                        class="text-sm bg-blue-100 mt-10"
                        v-if="props.documentation"
                        :link="props.documentation"
                        :icon="faBook"
                    >
                        <template #title> Read the docs </template>
                    </FeatureComponent>

                    <!-- Navigation Dots -->
                    <div class="flex justify-center items-center space-x-4 mt-4">
                        <div class="flex space-x-2">
                            <button
                                v-for="(_, index) in panels"
                                :key="index"
                                @click="goToSlide(index)"
                                :class="[
                                    'h-8 w-8 rounded-full transition-all duration-300',
                                    currentIndex === index ? 'bg-blue-500 w-4' : 'bg-gray-300',
                                ]"
                            ></button>
                        </div>
                    </div>
                </div>
            </transition>

            <transition name="fade" mode="out-in">
                <div
                    class="text-base flex flex-row justify-around my-2 p-4"
                    :class="{
                        'w-full lg:w-3/5': currentPanel.content,
                    }"
                    :key="currentIndex"
                >
                    <!-- <img :src="currentPanel.content" v-if="currentPanel.content" /> -->
                    <ImageComponent
                        class="transition ease-in-out delay-150"
                        v-if="currentPanel.content.match(/webp/)"
                        :src="currentPanel.content"
                    />
                    <iframe
                        v-if="currentPanel.content.match(/pdf/)"
                        class="border border-solid border-gray-400 p-2"
                        :src="currentPanel.content"
                        width="100%"
                        height="500"
                    >
                    </iframe>
                </div>
            </transition>

            <!-- RTL Layout -->
            <transition name="fade" mode="out-in">
                <div
                    v-if="layout === 'rtl' && !smallDevice"
                    :key="currentIndex"
                    :class="{
                        'w-full lg:w-2/5': currentPanel.content,
                        'w-full': !currentPanel.content,
                    }"
                >
                    <div
                        class="text-slate-800 text-lg lg:text-2xl xl:text-4xl font-bold mb-6 lg:px-4"
                    >
                        {{ currentPanel.title }}
                    </div>

                    <div
                        class="text-slate-700 text-base flex flex-col space-y-4 lg:px-4 lg:text-lg"
                    >
                        <div v-html="currentPanel.text"></div>
                    </div>

                    <FeatureComponent
                        class="text-sm bg-blue-100 mt-10"
                        v-if="props.documentation"
                        :link="props.documentation"
                        :icon="faBook"
                    >
                        <template #title> Read the docs </template>
                    </FeatureComponent>

                    <!-- Navigation Dots -->
                    <div class="flex justify-center items-center space-x-4 mt-4">
                        <div class="flex space-x-2">
                            <button
                                v-for="(_, index) in panels"
                                :key="index"
                                @click="goToSlide(index)"
                                :class="[
                                    'h-8 w-8 rounded-full transition-all duration-300',
                                    currentIndex === index ? 'bg-blue-500 w-4' : 'bg-gray-300',
                                ]"
                            ></button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { ref, computed, onBeforeMount } from "vue";

const props = defineProps({
    panels: {
        type: Array,
        required: true,
        default: () => [],
    },
    border: {
        type: Boolean,
        default: false,
    },
    layout: {
        type: String,
        default: "ltr",
        validator: (v) => ["ltr", "rtl"].includes(v),
    },
    documentation: {
        type: String,
    },
});

const currentIndex = ref(0);
const smallDevice = ref(true);
const currentPanel = computed(() => props.panels[currentIndex.value]);
const goToSlide = (index) => {
    currentIndex.value = index;
};

const preloadImages = () => {
    props.panels.forEach((panel) => {
        if (panel.content && panel.content.match(/webp/)) {
            const img = new Image();
            img.src = panel.content;
        }
    });
};

onBeforeMount(() => {
    preloadImages();
    smallDevice.value = window.innerWidth < 900;
});
</script>

<style scoped>
circle {
    transition: stroke-dashoffset 0.1s linear;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
