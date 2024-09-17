<template>
    <div class="p-6 flex flex-row space-x-4 place-content-center bg-blue-100 rounded">
        <div class="flex flex-col place-content-center px-6">
            <FontAwesomeIcon :icon="faCircleInfo" size="3x" class="text-blue-600"></FontAwesomeIcon>
        </div>
        <div class="flex flex-col space-y-2 text-base">
            <ul class="list-disc">
                <li>
                    The operators of Describo Cloud have no access to your payment information.
                    Payments are made via our payment provider
                    <a href="https://stripe.com" target="_blank">Stripe</a>. Visit their security
                    site for more information:
                    <a href="https://docs.stripe.com/security" target="_blank">
                        https://docs.stripe.com/security
                    </a>
                </li>
                <li>
                    Subscription and purchase of credits indicates acceptance of the
                    <a href="/terms-and-conditions" target="_blank"
                        >Terms and Conditions of use.
                    </a>
                </li>
                <li>
                    Our
                    <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                    tells you what data we collect, where we collect it and how it's used.
                </li>
                <li>
                    See
                    <a href="/docs/guide/data-processing" target="_blank"
                        >Cloud Services and Data Processing</a
                    >
                    to find out how and where your data is processed.
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleInfo, faCircleXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
</script>
