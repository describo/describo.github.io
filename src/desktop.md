---
layout: home
aside: false
---

<div class="flex flex-col space-y-10 my-10">
    <InfoPanelComponent image="/images/tour/desktop1.png" :border="false">
        <template #text>
            <div class="text-lg text-center">
                <p>
                    Available for all major platforms for FREE
                </p>
                <ImageComponent src='/images/tour/desktop1.png' class="my-4"></ImageComponent>
                <!-- <LinkComponent link="https://github.com/describo/desktop-releases/releases/latest" class="text-sm">
                    View all releases @ https://github.com/describo/desktop-releases/releases/latest
                </LinkComponent> -->
            </div>
        </template>
        <template #content>
            <div class="flex flex-col space-y-4 items-center">
                <div>Download Describo Desktop</div>
               <div class="w-full border-b border-slate-400"></div>
                <!-- <ReleasesComponent class="hidden md:inline" /> -->
                Coming Soon
            </div>
        </template>
    </InfoPanelComponent>

</div>

<FooterComponent class="mt-6"/>

<script setup>
import ReleasesComponent from "./vue-components/Releases.vue";
</script>
