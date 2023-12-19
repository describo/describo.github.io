<template>
    <div class="flex flex-col space-y-2">
        <div class="flex flex-row items-center md:text-lg lg:text-xl flex-grow">
            <div class="hidden md:flex cursor-pointer text-4xl py-48 px-2" @click="previousCard()">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div v-auto-animate="{ duration: 300 }">
                <card :key="ref(idx)" v-for="(card, idx) of cards" :class="{ hidden: idx !== n }">
                    <template #text>{{ card.text }}</template>
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
            </div>
            <div class="hidden md:flex cursor-pointer text-4xl py-48 px-2" @click="nextCard()">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
        <div class="flex flex-row md:hidden place-content-between">
            <div class="cursor-pointer px-2" @click="previousCard()">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="cursor-pointer px-2" @click="nextCard()">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { vAutoAnimate } from "@formkit/auto-animate";
import Card from "./Card.vue";
import { ref } from "vue";
import isArray from "lodash-es/isArray.js";

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
</script>
