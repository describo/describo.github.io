<template>
    <div ref="typewriter"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Typewriter from "typewriter-effect/dist/core";
const typewriter = ref();

onMounted(() => {
    new Typewriter(typewriter.value, {
        strings: [
            "Transform your data.",
            "Discover the information.",
            "Explore the narratives.",
            "Describe the insights.",
            "Extract the value.",
        ],
        delay: 50,
        deleteSpeed: "natural",
        loop: true,
        pauseFor: 1200,
        autoStart: true,
    });
});
</script>
