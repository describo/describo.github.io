---
layout: home
---

<div class="my-5 md:my-10 flex flex-col space-y-4">
    <div class="text-lg bg-blue-200 p-6  rounded-lg">
        Describo Desktop is <strong>FREE</strong> to use. If you don't want to use the text extraction, entity recognition and
        assistant capabilities there is no cost for the product.
    </div>
    <div class="text-lg bg-blue-200 p-6 rounded-lg">
        The Describo VueJS / React components are <strong>FREE</strong> to use and licensed permissively with the opensource MIT license.
    </div>
    <div class="text-2xl">
        Describo Cloud
    </div>
    <Terms/>
    <div class="flex flex-row space-x-2">
        <Product class="flex-grow">
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
        </Product>
        <Product class="flex-grow">
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
        </Product>
    </div>
    <div class="p-2">
        <sup>*</sup>As a very approximate guide, 1,000,000 input tokens will let you interrogate
        approximately 750k words. This is only a guide and can vary based on what you choose to
        do with your data.
    </div>

</div>

<FooterComponent class="mt-6"/>

<script setup>
    import Terms from "./vue-components/Terms.vue";
    import Product from './vue-components/Product.vue'
</script>
