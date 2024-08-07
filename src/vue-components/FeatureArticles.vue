<template>
    <div class="flex flex-col space-y-2">
        <div class="flex flex-row space-x-2">
            <div>
                <el-button type="primary" @click="selectedKeyword = undefined">
                    <FontAwesomeIcon :icon="faRefresh" />
                </el-button>
            </div>
            <el-radio-group v-model="selectedKeyword">
                <el-radio-button :value="keyword" v-for="keyword of keywords">
                    {{ keyword }}
                </el-radio-button>
            </el-radio-group>
        </div>

        <div class="flex flex-row flex-wrap">
            <div v-for="article of displayedArticles">
                <Feature :link="article.link" class="border border-slate-300 rounded-sm m-1">
                    <template #title>{{ article.title }}</template>
                    <template #content>
                        <div class="flex flex-col">
                            <div>
                                {{ article.text }}
                            </div>
                        </div>
                    </template>
                </Feature>
            </div>
        </div>
    </div>
</template>

<script setup>
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { ElRadioGroup, ElRadioButton, ElButton } from "element-plus";
import Feature from "./Feature.vue";
import { computed, ref } from "vue";
import uniq from "lodash-es/uniq.js";
import flattenDeep from "lodash-es/flattenDeep.js";

const articles = [
    {
        title: "Why Describo? Where does it fit?",
        link: "/docs/articles/why-use-it",
        text: "Start with Why!",
        keywords: ["purpose"],
    },
    {
        title: "How is data handled inside Describo?",
        link: "/docs/articles/how-your-data-is-handled",
        text: "Your data is yours.",
        keywords: ["data handling", "data privacy & security"],
    },
    {
        title: "TayTay Sings the Budget Blues",
        link: "/docs/articles/taytay-sings-the-budget-blues",
        text: "See how the e-discovery tools in Describo can help you.",
        keywords: ["e-discovery", "assistant"],
    },
];

const keywords = uniq(flattenDeep(articles.map((a) => a.keywords)).sort());

const selectedKeyword = ref();

const displayedArticles = computed(() => {
    if (selectedKeyword.value) {
        return articles.filter((a) => a.keywords.includes(selectedKeyword.value));
    } else {
        return articles;
    }
});
</script>
