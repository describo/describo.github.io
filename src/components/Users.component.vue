<template>
    <div class="flex flex-col space-y-20">
        <NavigationComponent />

        <InfoPanelComponent>
            <template #title>
                <div class="flex flex-row space-x-4">
                    <div class="">Nyingarn Workspace</div>
                    <div class="flex flex-row space-x-2">
                        <el-image :src="auFlag" style="height: 40px" fit="contain" />
                        <el-image :src="aboriginalFlag" style="height: 40px" fit="contain" />
                    </div>
                </div>
            </template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        <LinkComponent text="Nyingarn" link="https://nyingarn.net" /> makes
                        manuscript sources for Australian Languages available as searchable and
                        reusable text documents.
                    </div>

                    <div>
                        The Nyingarn Workspace enables users to upload images and create TEI files
                        for search and re-use.
                    </div>

                    <div>
                        With appropriate permissions, language manuscripts can be accessed, reviewed
                        and enhanced.
                    </div>
                    <div>
                        Nyingarn is a living platform where documents can be continually added, each
                        with appropriate permissions from the relevant language authority.
                    </div>
                    <div>
                        The Describo Crate Builder component is embedded as the metadata editor and
                        the initial development was sponsored by the Nyingarn Project.
                        <i class="fa-solid fa-champagne-glasses text-yellow-500 fa-2x"></i>
                    </div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-10 text-center">
                    <div>
                        <el-image
                            src="https://nyingarn.net/wp-content/uploads/2023/04/Nyingarn_Vertical_Peppermint_RGB-768x768.png"
                            style="height: 200px"
                            fit="contain"
                        />
                    </div>
                    <div>
                        <el-image :src="nyingarn1" style="height: 300px" fit="contain" />
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>
                <div class="flex flex-row space-x-2">
                    <div class="">AROMA - the ARP RO-Crate Manager</div>
                    <div>
                        <el-image :src="huFlag" style="height: 40px" fit="contain" />
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
                            text="Describo Crate Builder react component"
                            link="https://github.com/describo/crate-builder-component-react"
                        />.
                    </div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-10 text-center">
                    <div>
                        <el-image :src="aroma1" style="height: 300px" fit="contain" />
                        <div>Aroma as a standalone application</div>
                    </div>
                    <div>
                        <el-image :src="aroma2" style="height: 300px" fit="contain" />
                        <div>Aroma inside Dataverse</div>
                    </div>
                </div>
            </template>
        </InfoPanelComponent>
    </div>
</template>

<script setup>
import NavigationComponent from "./Navigation.component.vue";
import InfoPanelComponent from "./InfoPanel.component.vue";
import LinkComponent from "./Link.component.vue";
import aboriginalFlag from "../assets/flag-aboriginal.png";
import auFlag from "../assets/flag-au.png";
import huFlag from "../assets/flag-hu.png";
import aroma1 from "../assets/users-aroma-standalone.png";
import aroma2 from "../assets/users-aroma-in-dataverse.png";
import nyingarn1 from "../assets/users-nyingarn.png";
</script>
