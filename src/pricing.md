---
layout: home
---

<div class="my-5 md:my-10 flex flex-col space-y-4">
    <div class="text-lg bg-blue-200 p-6  rounded-lg">
        Describo is <strong>FREE</strong> to use. If you don't want to use the text extraction, entity recognition and
        assistant capabilities there is no cost for the product.
    </div>
    <div class="text-lg bg-blue-200 p-6 rounded-lg">
        The Describo VueJS / React components are <strong>FREE</strong> to use and licensed permissively with the opensource MIT license.
    </div>
    <div class="text-2xl">
        Describo Cloud
    </div>
    <div>Describo Cloud provides text extraction, entity recognition and assistant capabilities to enhance your workflow. The service is
    Pay-as-you-go. You only need to purchase what you need, as you need it.</div>
    <PricingComponent :display-only="true"/>
</div>

<FooterComponent class="mt-6"/>

<script setup>
    import PricingComponent from './vue-components/PricingComponent.vue'
</script>
