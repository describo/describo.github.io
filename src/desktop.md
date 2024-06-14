---
layout: home
aside: false
---

<ReleasesComponent class="hidden md:inline-block w-full bg-white" />

<div class="flex place-content-center">
    View all releases @
    <LinkComponent link="https://github.com/describo/desktop-releases/releases/latest" class="text-base">
    https://github.com/describo/desktop-releases/releases/latest </LinkComponent>
</div>

<Disqus />

<FooterComponent class="mt-6"/>

<script setup>
import ReleasesComponent from "./vue-components/Releases.vue";
</script>
