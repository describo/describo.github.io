<template>
    <div class="md:text-xl md:px-10 flex flex-col items-center text-center">
        <div v-if="props.repositoryText && props.repositoryLink">
            <div>{{ props.repositoryText }}</div>
            <link-component :link="props.repositoryLink" />
        </div>
        <div class="mt-6 text-center md:text-xl">
            <div>
                Report <i class="fa-solid fa-bug"></i> or ask
                <i class="fa-regular fa-circle-question"></i> on the issue tracker:
            </div>
            <link-component :link="props.issueTrackerLink" />
        </div>
    </div>
</template>

<script setup>
import LinkComponent from "./Link.component.vue";

const props = defineProps({
    repositoryText: {
        type: String,
        required: true,
    },
    repositoryLink: {
        type: String,
        required: true,
    },
    issueTrackerLink: {
        type: String,
        required: true,
    },
});
</script>
