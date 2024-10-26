<template>
    <div class="relative my-10">
        <div
            class="flex flex-col lg:flex-row lg:space-x-2 justify-around items-center"
            :class="{ 'border-t border-slate-400': props.border }"
        >
            <!-- Navigation Arrows -->
            <!-- <button
                @click="previousSlide"
                class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 hover:bg-gray-100 rounded-full"
            >
                <font-awesome-icon icon="chevron-left" />
            </button> -->

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

                    <!-- Navigation Dots and Timer -->
                    <div class="flex justify-center items-center space-x-4 mt-4">
                        <div class="flex space-x-2">
                            <button
                                v-for="(_, index) in panels"
                                :key="index"
                                @click="goToSlide(index)"
                                :class="[
                                    'h-2 w-2 rounded-full transition-all duration-300',
                                    currentIndex === index ? 'bg-blue-500 w-4' : 'bg-gray-300',
                                ]"
                            ></button>
                        </div>

                        <!-- Circular Timer -->
                        <div
                            class="relative w-6 h-6"
                            @mouseenter="pauseTimer"
                            @mouseleave="resumeTimer"
                        >
                            <svg class="transform -rotate-90 w-6 h-6">
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="transparent"
                                    class="text-gray-200"
                                />
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="transparent"
                                    :stroke-dasharray="circumference"
                                    :stroke-dashoffset="dashOffset"
                                    class="text-blue-500 transition-all duration-200"
                                />
                            </svg>
                            <!-- Play/Pause Button -->
                            <button
                                @click="toggleAutoPlay"
                                class="absolute inset-0 flex items-center justify-center text-xs text-blue-500"
                            >
                                <font-awesome-icon :icon="isPlaying ? 'pause' : 'play'" />
                            </button>
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

                    <!-- Navigation Dots and Timer -->
                    <div class="flex justify-center items-center space-x-4 mt-4">
                        <div class="flex space-x-2">
                            <button
                                v-for="(_, index) in panels"
                                :key="index"
                                @click="goToSlide(index)"
                                :class="[
                                    'h-2 w-2 rounded-full transition-all duration-300',
                                    currentIndex === index ? 'bg-blue-500 w-4' : 'bg-gray-300',
                                ]"
                            ></button>
                        </div>

                        <!-- Circular Timer -->
                        <div
                            class="relative w-6 h-6"
                            @mouseenter="pauseTimer"
                            @mouseleave="resumeTimer"
                        >
                            <svg class="transform -rotate-90 w-6 h-6">
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="transparent"
                                    class="text-gray-200"
                                />
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="transparent"
                                    :stroke-dasharray="circumference"
                                    :stroke-dashoffset="dashOffset"
                                    class="text-blue-500 transition-all duration-200"
                                />
                            </svg>
                            <!-- Play/Pause Button -->
                            <button
                                @click="toggleAutoPlay"
                                class="absolute inset-0 flex items-center justify-center text-xs text-blue-500"
                            >
                                <font-awesome-icon :icon="isPlaying ? 'pause' : 'play'" />
                            </button>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- Navigation Arrows -->
            <!-- <button
                @click="nextSlide"
                class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 hover:bg-gray-100 rounded-full"
            >
                <font-awesome-icon icon="chevron-right" />
            </button> -->
        </div>
    </div>
</template>

<script setup>
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

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
    autoPlay: {
        type: Boolean,
        default: false,
    },
    interval: {
        type: Number,
        default: 10000,
    },
    initialDelay: {
        type: Number,
        default: 0, // Default initial delay in milliseconds
    },
    documentation: {
        type: String,
    },
});

const currentIndex = ref(0);
const smallDevice = ref(true);
const timeLeft = ref(props.interval);
const isPlaying = ref(props.autoPlay);
let autoPlayInterval;
let countdownInterval;

const circumference = 2 * Math.PI * 10; // 2πr where r=10

const dashOffset = computed(() => {
    return circumference * (1 - timeLeft.value / props.interval);
});

const currentPanel = computed(() => props.panels[currentIndex.value]);

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.panels.length;
    resetTimer();
};

const previousSlide = () => {
    currentIndex.value =
        currentIndex.value === 0 ? props.panels.length - 1 : currentIndex.value - 1;
    resetTimer();
};

const goToSlide = (index) => {
    currentIndex.value = index;
    resetTimer();
};

const startTimer = () => {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    if (countdownInterval) clearInterval(countdownInterval);

    if (isPlaying.value) {
        autoPlayInterval = setInterval(nextSlide, props.interval);
        countdownInterval = setInterval(() => {
            timeLeft.value = Math.max(0, timeLeft.value - 100);
        }, 100);
    }
};

const resetTimer = () => {
    timeLeft.value = props.interval;
    startTimer();
};

const pauseTimer = () => {
    clearInterval(autoPlayInterval);
    clearInterval(countdownInterval);
};

const resumeTimer = () => {
    if (isPlaying.value) {
        startTimer();
    }
};

const toggleAutoPlay = () => {
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value) {
        startTimer();
    } else {
        pauseTimer();
    }
};

const preloadImages = () => {
    props.panels.forEach((panel) => {
        if (panel.content && panel.content.match(/webp/)) {
            const img = new Image();
            img.src = panel.content;
        }
    });
};

onMounted(() => {
    preloadImages();
    smallDevice.value = window.innerWidth < 900;
    if (props.autoPlay) {
        // Set initial timeout before starting the regular interval
        setTimeout(() => {
            startTimer();
        }, props.initialDelay);
    }
});

onBeforeUnmount(() => {
    pauseTimer();
});
</script>

<style scoped>
circle {
    transition: stroke-dashoffset 0.1s linear;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
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
