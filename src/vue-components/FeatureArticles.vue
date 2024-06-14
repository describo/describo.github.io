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

        <div class="flex flex-row flex-wrap space-x-1">
            <div v-for="article of displayedArticles">
                <Feature :link="article.link" class="bg-blue-100">
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
        title: "TayTay Sings the Budget Blues",
        link: "/docs/articles/taytay-sings-the-budget-blues.html",
        text: "See how the e-discovery tools in Describo can help you.",
        keywords: ["e-discovery", "Assistant"],
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
