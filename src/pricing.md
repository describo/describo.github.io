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
        Pricing: Describo Cloud
    </div>
      <div class="p-6 flex flex-row space-x-4 place-content-center bg-blue-100 rounded-lg">
        <div>
            <font-awesome-icon :icon="['fas', 'circle-info']" size="3x" class="text-blue-600" />
        </div>
        <div>
            The operators of Describo Cloud have no access to your payment information.
            Payments are made via our payment provider
            <LinkComponent link="https://paddle.com/about">Paddle</LinkComponent>. Visit Paddle's security
            site for more information:
            <LinkComponent link="https://security.paddle.com">https://security.paddle.com</LinkComponent>
        </div>
    </div>
    <div>
        Use of the text extraction, named entity recognition and assistant capabilities requires a subscription
        to the describo cloud service and the purchase of credits.
        <ul>
            <li>
                Subscription and purchase of credits indicates acceptance of the
                <LinkComponent link="/terms-and-conditions" target="">Terms and Conditions of use.</LinkComponent>
            </li>
            <li>
                Our <LinkComponent link="/privacy-policy" target="">Privacy Policy.</LinkComponent>
                tells you what data we collect, where we collect it and how it's used.
            </li>
            <li>Credits can be purchased from within Describo Desktop after you've subscribed.</li>
        </ul>
    </div>

   <PricingTable />
</div>

<FooterComponent class="mt-6"/>

<script setup>
    import PricingTable from './PricingTable.vue'
</script>
