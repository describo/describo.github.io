---
layout: home
---

<div class="my-5 md:my-10 flex flex-col space-y-4">
    <div class="text-lg bg-blue-100 p-6  rounded-lg">
        Describo is <strong>FREE</strong> to use. If you don't want to use the text extraction, entity recognition,
        assistant and vocabulary capabilities there is no cost for the product. <b>Though we'd be very happy if you chose to become
        a supporter!</b>
    </div>
    <div class="text-lg bg-blue-100 p-6 rounded-lg">
        The Describo VueJS / React components are <strong>FREE</strong> to use and licensed permissively with the opensource MIT license.
    </div>
    <div class="text-2xl">
        Describo Cloud
    </div>
    <div>Describo Cloud provides capabilities to enhance your workflow. The service is
    Pay-as-you-go: you only need to purchase what you need, as you need it. If you do need to purchase
    access to the capabilities, do that through the application itself.
    </div>
    <div><a href="/docs/guide/register.html">Read about registering with the cloud service.</a></div>
    <div><a href="/docs/guide/purchase-credits.html">Read about purchasing credits.</a></div>
    <PricingComponent :display-only="true"/>
</div>

<FooterComponent class="mt-6"/>

<script setup>
    import PricingComponent from './vue-components/PricingComponent.vue'
</script>
