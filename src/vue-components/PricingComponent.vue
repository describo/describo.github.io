<template>
    <div class="flex flex-col space-y-2">
        <!--legalese stuff  -->
        <Terms />

        <!-- pricing pills and purchase controls -->
        <div class="flex flex-col space-y-2">
            <div class="flex flex-row space-x-2">
                <Product class="w-1/2">
                    <template #title>General Credits</template>
                    <template #price>$5 USD</template>
                    <template #content>
                        <ul class="pl-10 list-disc">
                            <li>Text extraction credits for 50 pages</li>
                            <li>Enough credits to perform entity recognition on 50 pages</li>
                            <li>
                                Credits to use the assistant to interrogate the data<sup>*</sup>
                                <ul class="pl-4 list-disc">
                                    <li>2,000,000 input tokens</li>
                                    <li>16,000 output tokens</li>
                                </ul>
                            </li>
                        </ul>
                    </template>
                    <template #controls v-if="!props.displayOnly">
                        <stripe-buy-button
                            :buy-button-id="pricing[environment].general.buttonId"
                            :publishable-key="token"
                        >
                        </stripe-buy-button>
                    </template>
                </Product>
                <Product class="w-1/2">
                    <template #title>Assistant Credits</template>
                    <template #price>$5 USD</template>
                    <template #content>
                        <ul class="pl-10 list-disc">
                            <li>
                                Credits to use the assistant to interrogate the data<sup>*</sup>
                                <ul class="pl-4 list-disc">
                                    <li>4,000,000 input tokens</li>
                                    <li>40,000 output tokens</li>
                                </ul>
                            </li>
                        </ul>
                    </template>
                    <template #controls v-if="!props.displayOnly">
                        <stripe-buy-button
                            :buy-button-id="pricing[environment].assistant.buttonId"
                            :publishable-key="token"
                        >
                        </stripe-buy-button>
                    </template>
                </Product>
            </div>
            <div class="flex flex-row space-x-2">
                <Product class="w-1/2">
                    <template #title>Entity Recognition Credits</template>
                    <template #price>$5 USD</template>
                    <template #content>
                        <ul class="pl-4 list-disc">
                            <li>
                                Enough credits to process about 200 pages of A4 text using a
                                standard sized font
                            </li>
                        </ul>
                    </template>
                    <template #controls v-if="!props.displayOnly">
                        <stripe-buy-button
                            :buy-button-id="pricing[environment].entityRecognition.buttonId"
                            :publishable-key="token"
                        >
                        </stripe-buy-button>
                    </template>
                </Product>

                <Product class="w-1/2">
                    <template #title>Text Extraction Credits</template>
                    <template #price>$5 USD</template>
                    <template #content>
                        <ul class="pl-4 list-disc">
                            <li>Text extraction credits to process 200 images</li>
                        </ul>
                    </template>
                    <template #controls v-if="!props.displayOnly">
                        <stripe-buy-button
                            :buy-button-id="pricing[environment].textExtraction.buttonId"
                            :publishable-key="token"
                        >
                        </stripe-buy-button>
                    </template>
                </Product>
            </div>
            <div class="p-4">
                <sup>*</sup>As a very approximate guide, 1,000,000 input tokens will let you
                interrogate approximately 750k words. This is only a guide and can vary based on
                what you choose to do with your data.
            </div>
        </div>
    </div>
</template>

<script setup>
import Terms from "./Terms.vue";
import Product from "./Product.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { onBeforeMount, ref } from "vue";

const props = defineProps({
    displayOnly: { type: Boolean, required: true },
});

// STRIPE PRICING TABLE
const pricing = {
    development: {
        general: {
            buttonId: "buy_btn_1PzUR801z7UukHJYswDajJfq",
        },
        assistant: {
            buttonId: "buy_btn_1PzUfv01z7UukHJYPQ408eKk",
        },
        textExtraction: {
            buttonId: "buy_btn_1PzUkY01z7UukHJY3nQ1IdfR",
        },
        entityRecognition: {
            buttonId: "buy_btn_1PzUmI01z7UukHJYScCBlX27",
        },
    },
    production: {
        general: {
            buttonId: "buy_btn_1PzXVq01z7UukHJYAX7PePN1",
        },
        assistant: {
            buttonId: "buy_btn_1PzXWt01z7UukHJYRCnq3w4V",
        },
        textExtraction: {
            buttonId: "buy_btn_1PzXYc01z7UukHJYThctTsHc",
        },
        entityRecognition: {
            buttonId: "buy_btn_1PzXXl01z7UukHJYkXjFb525",
        },
    },
};

let token = ref(undefined);
let environment = ref("development");

onBeforeMount(async () => {
    if (props.displayOnly) return;

    const params = new URLSearchParams(window.location.search);
    try {
        environment.value = params.get("env");
        params.delete("env");

        if (!environment.value) throw new Error();
        window.history.pushState({}, document.title, window.location.pathname);
    } catch (error) {
        window.location.href = "/";
        return;
    }

    token.value =
        environment.value === "development"
            ? "pk_test_51PzTPi01z7UukHJYJwYnlcCRgvWkgZWcdOOzRhgZEGkvHEc6yiFo5BBbPRnE3Z96J8ar4WTD7T5Zbj3y85T8rblj00v3QVUu7J"
            : "pk_live_51PzTPi01z7UukHJYtuCC2XEWkx35ahrNu2yPslekCIzWkdLjvBRY4q4sCNebaNU7SIcldL8IWdPkJV4eyQxdzHft00vHSK5KKV";
});
</script>
