<template>
    <div>
        <div class="flex flex-row items-center md:text-lg lg:text-xl flex-grow">
            <div class="cursor-pointer text-4xl py-48 px-2" @click="previousCard()">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div v-auto-animate="{ duration: 300 }">
                <card :key="n" v-for="(card, idx) of props.cards" :class="{ hidden: idx !== n }">
                    <template #text>{{ card.text }}</template>
                    <template #image><img :src="card.image" class="object-contain" /></template>
                </card>
            </div>
            <div class="cursor-pointer text-4xl py-48 px-2" @click="nextCard()">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { vAutoAnimate } from "@formkit/auto-animate";
import Card from "./Card.vue";
import { ref, computed } from "vue";

const props = defineProps({
    cards: { type: Array },
});
const n = ref(0);

const activeCard = computed(() => props.cards[n.value]);

function nextCard() {
    n.value = n.value < props.cards.length - 1 ? (n.value += 1) : 0;
}
function previousCard() {
    n.value = n.value === 0 ? props.cards.length - 1 : (n.value -= 1);
}
</script>
