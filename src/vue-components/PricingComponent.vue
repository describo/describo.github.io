<template>
    <div class="flex flex-col space-y-2">
        <!--legalese stuff  -->
        <Terms />

        <!--Checkout failed notification  -->
        <div
            class="p-6 flex flex-row space-x-4 place-content-center bg-red-200 rounded-lg text-lg"
            v-if="checkoutFailed"
        >
            <div class="flex flex-col place-content-center text-red-700 px-6">
                <FontAwesomeIcon :icon="faCircleXmark" size="3x"></FontAwesomeIcon>
            </div>
            <div class="flex flex-col space-y-2">
                <div>
                    Oh no - that didn't work! Try again in a few minutes and if it keeps happening
                    please let us know by emailing
                    <a href="mailto:support@describo.cloud" target="_blank"
                        >support@describo.cloud</a
                    >
                    from the email address that you subscribed with.
                </div>
            </div>
        </div>

        <!-- Checkout completed successfully notification  -->
        <div
            class="p-6 flex flex-row space-x-4 place-content-center bg-green-200 rounded-lg text-lg"
            v-if="checkoutCompleted"
        >
            <div class="flex flex-col place-content-center text-green-700 px-6">
                <FontAwesomeIcon :icon="faCircleCheck" size="3x"></FontAwesomeIcon>
            </div>
            <div class="flex flex-col space-y-2">
                <div>
                    Success! In a few minutes your credits will be added to your account. When you
                    get the receipt in your email it should be done. Press the refresh button on the
                    dashboard control to update the app. If you have any issues or concerns, please
                    email
                    <a href="mailto:support@describo.cloud" target="_blank"
                        >support@describo.cloud</a
                    >
                    from the email address that you subscribed with.
                </div>
            </div>
        </div>

        <!-- pricing pills and purchase controls -->
        <div v-if="!checkoutCompleted && !checkoutFailed">
            <div class="flex flex-row space-x-2">
                <Product>
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
                    <template #controls>
                        <el-button type="primary" @click="purchaseGeneralCredits">
                            Purchase General Credits
                        </el-button>
                    </template>
                </Product>
                <Product>
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
                    <template #controls>
                        <el-button type="primary" @click="purchaseAssistantCredits">
                            Purchase Assistant Credits
                        </el-button>
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
import { onMounted, ref } from "vue";
import { initializePaddle } from "@paddle/paddle-js";
import { ElButton } from "element-plus";

const pricing = {
    development: {
        assistant: {
            priceId: "pri_01htbs3gmgbxkf29ek1v211rjt",
            quantity: 1,
        },
        general: {
            priceId: "pri_01htbs2ws69sfb2ffsc6ja1mwc",
            quantity: 1,
        },
    },
    production: {
        assistant: {
            priceId: "pri_01htc26gkqgbsv4kd5v29r7k5c",
            quantity: 1,
        },
        general: {
            priceId: "pri_01htc281zscjy7z0zgbcknps6q",
            quantity: 1,
        },
    },
};

const checkoutCompleted = ref(false);
const checkoutFailed = ref(false);
let email;
let items;
let paddle;

onMounted(async () => {
    const params = new URLSearchParams(window.location.search);
    let environment;
    try {
        email = params.get("email");
        environment = params.get("env");

        params.delete("email");
        params.delete("env");

        if (!email || !environment) throw new Error();
        window.history.pushState({}, document.title, window.location.pathname);
    } catch (error) {
        window.location.href = "/";
        return;
    }

    items = pricing[environment];

    const config = {
        token:
            environment === "development"
                ? "test_74040fb0d3ce12ca437b2192f97"
                : "live_8d7de13dba1f34a8ff5f67c7254",
        environment: environment === "development" ? "sandbox" : "production",

        pwCustomer: {
            email,
        },
        checkout: {
            settings: {
                allowLogout: false,
                displayMode: "overlay",
                theme: "light",
                locale: "en",
            },
        },
        eventCallback: function (data) {
            switch (data.name) {
                case "checkout.completed":
                    checkoutCompleted.value = true;
                    break;
                case "checkout.error":
                    checkoutFailed.value = true;
                    break;
                case "checkout.payment.failed":
                    checkoutFailed.value = true;
                    break;
            }
        },
    };
    paddle = await initializePaddle(config);
});

function purchaseGeneralCredits() {
    checkoutCompleted.value = false;
    checkoutFailed.value = false;
    paddle.Checkout.open({
        items: [items.general],
        customer: {
            email,
        },
    });
}

function purchaseAssistantCredits() {
    checkoutCompleted.value = false;
    checkoutFailed.value = false;
    paddle.Checkout.open({
        items: [items.assistant],
        customer: {
            email,
        },
    });
}
</script>
