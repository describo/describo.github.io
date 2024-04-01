<template>
    <div>
        <div class="flex flex-row space-x-2">
            <div
                class="flex flex-col space-y-10 place-content-between p-5 bg-slate-200 rounded-lg flex-grow"
            >
                <div class="flex flex-col space-y-2">
                    <div>General Credits</div>
                    <div class="text-3xl">$5 USD</div>
                    <div class="text-xs">This price may change at any time.</div>
                    <ul class="list-disc">
                        <li>Text extraction credits for 50 pages</li>
                        <li>Enough credits to perform entity recognition on 50 pages</li>
                        <li>
                            Credits to use the assistant to interrogate the data<sup>*</sup>
                            <ul class="list-disc">
                                <li>1,000,000 input tokens</li>
                                <li>120,000 output tokens</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="flex flex-col space-y-10 place-content-between p-5 bg-slate-200 rounded-lg flex-grow"
            >
                <div class="flex flex-col space-y-2">
                    <div>Assistant Credits</div>
                    <div class="text-3xl">$5 USD</div>
                    <div class="text-xs">This price may change at any time.</div>
                    <ul class="list-disc">
                        <li>
                            Credits to use the assistant to interrogate the data<sup>*</sup>
                            <ul class="list-disc">
                                <li>1,500,000 input tokens</li>
                                <li>190,000 output tokens</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="p-2">
            <sup>*</sup>As a very approximate guide, 1,000,000 input tokens will let you interrogate
            approximately 750k words. This is only a guide and can vary based on what you choose to
            do with your data.
        </div>
    </div>
</template>

<script setup></script>
