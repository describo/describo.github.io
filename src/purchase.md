---
title: Purchase credits
layout: home
aside: false
---

<div class="bg-red-100 font-bold p-10 text-center m-20">
Unfortunately, the Describo project is no longer being developed.
<br/>
<br/>
As such, you can no longer purchase
credits to use the cloud services and any credits you do have will expire at the end of 2025.
</div>

<!-- <PricingComponent :display-only="false" /> -->

<!-- <script setup>
    import PricingComponent from './vue-components/PricingComponent.vue'
</script> -->

<script setup>
import { onMounted} from 'vue'

onMounted(async () => {
    const params = new URLSearchParams(window.location.search);
    window.history.pushState({}, document.title, window.location.pathname);
})

</script>
