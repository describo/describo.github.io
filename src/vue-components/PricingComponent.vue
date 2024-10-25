<template>
    <div class="flex flex-col space-y-2">
        <!-- pricing pills and purchase controls -->
        <div class="flex flex-col space-y-2">
            <Product class="w-full">
                <template #title>Support Product Development</template>
                <template #price>$25 USD</template>
                <template #content>
                    <p>
                        Support continued development of the product. You don't have to but it's
                        much appreciated if you do!
                    </p>
                    <p>
                        You'll also get $5 in General Credits and 2 months of access to the
                        Vocabulary creation tool so that you can try out all of the capabilities.
                    </p>
                </template>
                <template #controls v-if="!props.displayOnly">
                    <stripe-buy-button
                        :buy-button-id="pricing[environment].support.buttonId"
                        :publishable-key="token"
                    >
                    </stripe-buy-button>
                </template>
            </Product>
            <Product>
                <template #title>Vocabulary Credits</template>
                <template #price>$15 USD</template>
                <template #content>
                    Enable the Vocabulary creation tool for 6 months from the date or purchase.
                </template>
                <template #controls v-if="!props.displayOnly">
                    <stripe-buy-button
                        :buy-button-id="pricing[environment].vocab.buttonId"
                        :publishable-key="token"
                    >
                    </stripe-buy-button>
                </template>
            </Product>
            <div class="flex flex-row space-x-2">
                <Product class="w-1/2">
                    <template #title>General Credits</template>
                    <template #price>$5 USD</template>
                    <template #content>
                        <ul class="pl-10 list-disc">
                            <li>Text extraction credits for 50 pages</li>
                            <li>Enough credits to perform Named Entity Recognition on 50 pages</li>
                            <li>
                                Credits to use the Assistant to interrogate the data<sup>*</sup>
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
                                Credits to use the Assistant to interrogate the data<sup>*</sup>
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
                    <template #title>Named Entity Recognition Credits</template>
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

        <!--legalese stuff  -->
        <Terms />
    </div>
</template>

<script setup>
import Terms from "./Terms.vue";
import Product from "./Product.vue";
import { onBeforeMount, onMounted, ref } from "vue";

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
        vocab: {
            buttonId: "buy_btn_1Q7pNv01z7UukHJY3NR0u3eZ",
        },
        support: {
            buttonId: "buy_btn_1Q7pZv01z7UukHJYsqYwpKED",
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
        vocab: {
            buttonId: "buy_btn_1Q7pel01z7UukHJYyt5t2AzS",
        },
        support: {
            buttonId: "buy_btn_1Q7pg401z7UukHJYww41ax8d",
        },
    },
};

let token = ref(undefined);
let environment = ref("development");

onMounted(async () => {
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
