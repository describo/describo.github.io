---
layout: home
aside: false
---

<div class="flex flex-col space-y-20 my-20">
    <InfoPanelComponent :border="false">
        <template #title>
            <div class="flex flex-row place-content-between py-2">
                <div>Nyingarn Workspace</div>
                <div class="flex flex-row space-x-2">
                    <img src="/images/users/flag-au.webp" class="h-8" fit="contain" />
                    <img src="/images/users/flag-aboriginal.webp" class="h-8" fit="contain" />
                </div>
            </div>
        </template>
        <template #text>
            <div class="flex flex-col space-y-4 items-start">
                <div>
                    <LinkComponent link="https://nyingarn.net">Nyingarn</LinkComponent> makes
                    manuscript sources for Australian Languages available as searchable and
                    reusable text documents.
                </div>
                <div>
                    The Nyingarn Workspace enables users to upload images and create TEI files
                    for search and re-use. With appropriate permissions, language manuscripts
                    can be accessed, reviewed and enhanced.
                </div>
                <div>
                    Nyingarn is a living platform where documents can be continually added, each
                    with appropriate permissions from the relevant language authority.
                </div>
                <div>
                    The Describo Crate Builder component is embedded into the workspace as the
                    metadata editor and the repository as the metadata viewer. Nyingarn
                    sponsored the initial development of the embeddable component.
                    <font-awesome-icon :icon="['fas', 'champagne-glasses']" class="text-2xl text-yellow-500"/>
                </div>
                <img
                    src="https://nyingarn.net/wp-content/uploads/2023/04/Nyingarn_Vertical_Peppermint_RGB-768x768.png"
                    style="height: 100px"
                    fit="contain"
                />
            </div>
        </template>
        <template #content>
            <StackComponent :cards="stacks[0]"></StackComponent>
        </template>
    </InfoPanelComponent>
    <InfoPanelComponent>
        <template #title>
            <div class="flex flex-row place-content-between py-2">
                <div class="">AROMA - the ARP RO-Crate Manager</div>
                <div>
                    <img src="/images/users/flag-hu.webp" class="h-8"  fit="contain" />
                </div>
            </div>
        </template>
        <template #text>
            <div class="flex flex-col space-y-4">
                <div>
                    AROMA - the ARP RO-Crate Manager - forms an integral part of the ELKH ARP
                    <link-component link="https://science-research-data.hu/en" /> initiative in
                    Hungary, dedicated to delivering comprehensive data repository and metadata
                    services to the Hungarian research community.
                </div>
                <div>
                    AROMA serves as a powerful extension to the Dataverse data repository
                    system, enhancing its capabilities by enabling the description of Dataverse
                    datasets and their internal files utilizing the RO-Crate format. AROMA
                    ensures seamless synchronization between Dataverse and the RO-Crate metadata
                    JSON based on schemas provided by the Dataverse metadatablocks. However,
                    AROMA goes a step further by allowing the specification of additional
                    metadata not only at the dataset level but also at the file level, something
                    that isn't supported by Dataverse. To add to its flexibility and user
                    convenience, AROMA can be employed either as an integrated component within
                    Dataverse or as a standalone web application.
                </div>
                <div>
                    AROMA is built using the
                    <LinkComponent
                        link="/component"
                        target=""
                    >
                        Describo Crate Builder react component
                    </LinkComponent>
                </div>
            </div>
        </template>
        <template #content>
            <StackComponent :cards="stacks[1]"></StackComponent>
        </template>
    </InfoPanelComponent>
</div>

<script setup>

const stacks = [
    [
        {
            text: "Describo embedded into the workspace as the metadata editor.",
            image: "/images/users/nyingarn1.webp",
        },
        {
            text: "Describo embedded into the repository as the metadata viewer.",
            image: "/images/users/nyingarn2.webp",
        },
    ],
    [
        {
            text: "Aroma as a standalone application.",
            image: "/images/users/users-aroma-standalone.webp",
        },
        {
            text: "Aroma inside Dataverse.",
            image: "/images/users/users-aroma-in-dataverse.webp",
        },
    ],
];
</script>

<FooterComponent class="mt-2"/>
