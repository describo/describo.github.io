---
layout: home
---

<div class="my-5 md:my-10 flex flex-col space-y-4">
    <div class="text-lg bg-blue-200 p-10 rounded-lg">
        Describo Desktop is <strong>FREE</strong> to use. If you don't want to use the text extraction, entity recognition and
        assistant capabilities there is no cost to the product.
    </div>
    <div class="text-lg bg-blue-200 p-10 rounded-lg">
        The Describo VueJS / React components are <strong>FREE</strong> to use and licensed permissively with the opensource MIT license.
    </div>
    <div class="text-2xl">
        Pricing: Describo Cloud
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
            Our privacy policy tells you what data we collect, where we collect it and how it's used.
                <LinkComponent link="/privacy-policy" target="">Privacy Policy.</LinkComponent>
        </li>
    </ul>
    </div>
    <div class="flex flex-row space-x-2">
        <div class="flex flex-col space-y-2 p-10 bg-slate-200 rounded-lg flex-grow">
            <div>General Credits</div>
            <div class="text-3xl">$5 USD</div>
            <div class="text-xs">This price may change at any time.</div>
            <ul class="list-disc">
                <li>Text extraction credits for 50 pages</li>
                <li>Enough credits to perform entity recognition on 50 pages</li>
                <li>Credits to use the assistant to interrogate the data<sup>*</sup>
                    <ul class="list-disc">
                        <li>1,000,000 input tokens</li>
                        <li>120,000 output tokens</li>
                    </ul>
                </li>
            </ul>
        </div>
       <div class="flex flex-col space-y-2 p-10 bg-slate-200 rounded-lg flex-grow">
            <div>Assistant Credits</div>
            <div class="text-3xl">$5 USD</div>
            <div class="text-xs">This price may change at any time.</div>
             <ul class="list-disc">
                <li>Credits to use the assistant to interrogate the data<sup>*</sup>
                    <ul class="list-disc">
                        <li>1,500,000 input tokens</li>
                        <li>190,000 output tokens</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
   <div>
    <sup>*</sup>As a very approximate guide, 1,000,000 input tokens will let you interrogate approximately 750k words. This is only a
    guide and can vary based on what you choose to do with your data.
    </div>
</div>

<FooterComponent class="mt-6"/>
