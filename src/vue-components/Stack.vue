<template>
    <div class="flex flex-col space-y-2 text-slate-800 items-center" v-cloak>
        <div class="flex flex-row items-center text-sm xl:text-lg flex-grow">
            <div
                class="hidden md:flex cursor-pointer text-4xl py-48 px-2 border-r border-slate-400 hover:text-blue-600"
                @click="previousCard()"
                v-if="cards.length > 1"
            >
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div v-auto-animate="{ duration: 300 }">
                <card
                    :class="{ hidden: idx !== n }"
                    v-for="(card, idx) of cards"
                    :key="ref(idx)"
                    class="p-4"
                >
                    <template #text><div v-html="card.text"></div></template>
                    <template #image v-if="card.image">
                        <div class="flex flex-col space-y-2">
                            <img
                                v-if="!isArray(card.image)"
                                :src="card.image"
                                class="object-contain"
                                data-zoomable
                            />
                            <img
                                v-else
                                v-for="image of card.image"
                                :key="image"
                                :src="image"
                                class="object-contain"
                                data-zoomable
                            />
                        </div>
                    </template>
                    <template #video v-if="card.video">
                        <video controls>
                            <source :src="card.video" type="video/mp4" />
                        </video>
                    </template>
                </card>
            </div>
            <div
                class="hidden md:flex cursor-pointer text-4xl py-48 px-2 border-l border-slate-400 hover:text-blue-600"
                @click="nextCard()"
                v-if="cards.length > 1"
            >
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
        </div>
        <div class="hidden md:flex flex-row place-content-end">
            {{ n + 1 }} / {{ cards.length }}
        </div>
        <div class="flex flex-row md:hidden place-content-between" v-if="cards.length > 1">
            <div class="cursor-pointer px-2" @click="previousCard()">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div>{{ n + 1 }} / {{ cards.length }}</div>
            <div class="cursor-pointer px-2" @click="nextCard()">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { vAutoAnimate } from "@formkit/auto-animate";
import Card from "./Card.vue";
import { ref, onMounted, watch, nextTick } from "vue";
import isArray from "lodash-es/isArray.js";
import mediumZoom from "medium-zoom";

const props = defineProps({
    cards: { type: Array, require: true },
});
onMounted(() => {
    initZoom();
    watch(
        () => n.value,
        () => nextTick(() => initZoom())
    );
});

const n = ref(0);
function getImage(image) {
    return images.value[image.split("/").pop()];
}
function nextCard() {
    n.value = n.value < props.cards.length - 1 ? (n.value += 1) : 0;
}
function previousCard() {
    n.value = n.value === 0 ? props.cards.length - 1 : (n.value -= 1);
}

const initZoom = () => {
    mediumZoom("[data-zoomable]", { background: "var(--vp-c-bg)" });
};
</script>
