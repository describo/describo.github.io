<template>
    <div class="flex flex-col space-y-20">
        <InfoPanelComponent>
            <template #title>Flexible, Adaptable and Fast</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Describo adapts to the shape of your data. Provided it's an RO crate
                        Describo will work with it. And it's fast! Describo can work with crates
                        containing ten's of thousand's of entities.
                    </div>
                    <div>
                        By default, Describo allows you to describe a folder of content using all of
                        Schema.org.
                    </div>
                    <div>
                        <router-link to="/profile" class="hover:text-orange-600">
                            With a profile you can define and use any ontology you want.
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/datapacks" class="hover:text-orange-600">
                            And with datapacks you can inject pre-created JSON-LD metadata into your
                            descriptions or lookup other datasources.
                        </router-link>
                    </div>
                </div>
            </template>
            <template #content>
                <video controls autoplay loop>
                    <source :src="describo10" type="video/mp4" />
                </video>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Controls for all of your data types</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        One of the difficult things about metadata description is constraining what
                        users can put in. Describo takes care of this by showing controls for the
                        type of data expected.
                    </div>
                    <div>
                        Need a link to an entity? Get the enitity link control. Need a geography?
                        Get the geo selector that allows you to define an area or select a point.
                    </div>
                    <div>Autocomplete lets you look up datasources outside of this crate.</div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-2">
                    <video style="height: 400px" controls autoplay loop>
                        <source :src="describo6" type="video/mp4" />
                    </video>
                    <el-image :src="describo7" style="height: 400px" fit="contain" />
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Add properties for the entity you are working on</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Describo looks up schema.org and your profile to show you what you can
                        describe.
                    </div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-2">
                    <el-image :src="describo4" style="height: 400px" fit="contain" />
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>View reverse links</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        See what your entities link to. Describo is a browser for your network data.
                    </div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-2">
                    <el-image :src="describo3" style="height: 400px" fit="contain" />
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Navigate the network</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Yellow boxes navigate to the linked entity and with a profile you can tell
                        Describo to resolve the paths from the linked entity as well. This is
                        especially useful for complex entities like relationships and actions that
                        link other entities together into a narrative.
                    </div>
                    <div>
                        In this example we can see the source and target of the linked
                        relationships.
                    </div>
                </div>
            </template>
            <template #content>
                <el-image :src="describo5" style="height: 400px" fit="contain" />
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Tabbed data displays</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        With a profile you can specify how the data is shown by defining tabs and
                        properties to show in those tabs.
                    </div>
                </div>
            </template>
            <template #content>
                <el-image :src="describo8" style="height: 400px" fit="contain" />
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent :image="describo9">
            <template #title>Read only mode</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Embed the component in your app for data display. Set to read only and you
                        get an RO Crate data browser to navigate and interact with the data.
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent :image="describo11">
            <template #title>Like it?</template>
            <template #text>
                <div class="flex flex-col space-y-4 text-center">
                    <div>
                        If you like this work please consider giving us a star on github @
                        <link-component link="https://github.com/describo/describo.github.io" />
                    </div>
                    <div>
                        <i class="fa-solid fa-star text-yellow-400 fa-4x"></i>
                    </div>
                    <div>(It's ok if you want to star the other repo's too!)</div>
                </div>
            </template>
        </InfoPanelComponent>
    </div>
</template>

<script setup>
import InfoPanelComponent from "./InfoPanel.component.vue";
import LinkComponent from "./Link.component.vue";
import describo1 from "../assets/describo-1.png";
import describo3 from "../assets/describo-3.png";
import describo4 from "../assets/describo-4.png";
import describo5 from "../assets/describo-5.png";
import describo6 from "../assets/describo-6.mp4";
import describo7 from "../assets/describo-7.png";
import describo8 from "../assets/describo-8.png";
import describo9 from "../assets/describo-9.png";
import describo10 from "../assets/describo-10.mp4";
import describo11 from "../assets/describo-11.png";
</script>
