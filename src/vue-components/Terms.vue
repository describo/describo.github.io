<template>
    <div class="p-6 flex flex-row space-x-4 place-content-center bg-blue-100 rounded-lg">
        <div class="flex flex-col place-content-center px-6">
            <FontAwesomeIcon :icon="faCircleInfo" size="3x" class="text-blue-600"></FontAwesomeIcon>
        </div>
        <div class="flex flex-col space-y-2 text-base">
            <ul class="list-disc">
                <li>
                    The operators of Describo Cloud have no access to your payment information.
                    Payments are made via our payment provider
                    <a href="https://paddle.com/about" target="_blank">Paddle</a>. Visit their
                    security site for more information:
                    <a href="https://security.paddle.com" target="_blank"
                        >https://security.paddle.com
                    </a>
                </li>
                <li>
                    Subscription and purchase of credits indicates acceptance of the
                    <a href="https://describo.github.io/terms-and-conditions" target="_blank"
                        >Terms and Conditions of use.
                    </a>
                </li>
                <li>
                    Our
                    <a href="https://describo.github.io/privacy-policy" target="_blank"
                        >Privacy Policy</a
                    >
                    tells you what data we collect, where we collect it and how it's used.
                </li>
                <li>
                    See
                    <a href="/docs/guide/configuration/data-processing.html"
                        >/docs/guide/configuration/data-processing.html</a
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
