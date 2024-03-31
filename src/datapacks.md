---
layout: home
aside: true
---

<InfoPanelComponent class="my-10" :border="false">
    <template #title>Data Packs</template>
    <template #text>
        <div>
            Data packs contain JSON-LD configuration that Describo can look up and inject in to the crate.
        </div>
        <div class="flex flex-col space-y-2 mb-10">
            <div>
                Do you have JSON-LD information of a generic nature that might be reusable by others? Issue a pull
                request to the repo to share your pack. <LinkComponent link="https://github.com/describo/data-packs?tab=readme-ov-file#adding-a-data-pack-to-this-repository">Just read the instructions for inclusion.</LinkComponent>
            </div>
            <div>
            See the repository for more information:
                <LinkComponent link="https://github.com/describo/data-packs"> https://github.com/describo/data-packs</LinkComponent>
            </div>
        </div>
    </template>
    <template #content>
        <StackComponent :cards="cards" :import-glob="glob">
        </StackComponent>
    </template>
</InfoPanelComponent>
<FooterComponent class="mt-6"/>

<script setup>
const glob = import.meta.glob("./public/images/datapacks/*.png", { eager: true })

const cards = [
    { text: "Country data pack", image: "/images/datapacks/pack1.png" },
    { text: "Austlang language data pack", image: "/images/datapacks/pack2.png" },
    { text: "Glottolog language data pack", image: "/images/datapacks/pack3.png" },
];
</script>
