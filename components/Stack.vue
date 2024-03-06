<template>
    <div class="flex flex-col space-y-2 text-slate-800" v-cloak>
        <div class="flex flex-row items-center text-sm xl:text-lg flex-grow">
            <div
                class="hidden md:flex cursor-pointer text-4xl py-48 px-2"
                @click="previousCard()"
                v-if="cards.length > 1"
            >
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
            </div>
            <div v-auto-animate="{ duration: 300 }">
                <card :key="ref(idx)" v-for="(card, idx) of cards" :class="{ hidden: idx !== n }">
                    <template #text><div v-html="card.text"></div></template>
                    <template #image>
                        <div class="flex flex-col space-y-2">
                            <img
                                v-if="!isArray(card.image)"
                                :src="card.image"
                                class="object-contain"
                            />
                            <img
                                v-else
                                :src="image"
                                v-for="image of card.image"
                                class="object-contain"
                            />
                        </div>
                    </template>
                </card>
                <div class="text-sm text-slate-800 text-center">
                    Tip: Click the image to zoom in and get a better look!
                </div>
            </div>

            <div
                class="hidden md:flex cursor-pointer text-4xl py-48 px-2"
                @click="nextCard()"
                v-if="cards.length > 1"
            >
                <i class="fa-solid fa-chevron-right"></i>
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </div>
        </div>
        <div class="hidden md:flex flex-row place-content-end">
            {{ n + 1 }} / {{ cards.length }}
        </div>
        <div class="flex flex-row md:hidden place-content-between" v-if="cards.length > 1">
            <div class="cursor-pointer px-2" @click="previousCard()">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
            </div>
            <div>{{ n + 1 }} / {{ cards.length }}</div>
            <div class="cursor-pointer px-2" @click="nextCard()">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { vAutoAnimate } from "@formkit/auto-animate";
import Card from "./Card.vue";
import { ref } from "vue";
import isArray from "lodash-es/isArray.js";
import { onMounted, watch } from "vue";
import mediumZoom from "medium-zoom";

const props = defineProps({
    cards: { type: Array },
});
const n = ref(0);

function nextCard() {
    n.value = n.value < props.cards.length - 1 ? (n.value += 1) : 0;
}
function previousCard() {
    n.value = n.value === 0 ? props.cards.length - 1 : (n.value -= 1);
}

const initZoom = () => {
    mediumZoom("img", { background: "var(--vp-c-bg)" });
};
onMounted(() => {
    initZoom();
});
watch(
    () => n.value,
    () => nextTick(() => initZoom())
);
</script>
