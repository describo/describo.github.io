<!-- <template>
    <div class="flex flex-col space-y-20">
        <div class="text-2xl">Features</div>

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
                    <source :src="describoOverviewVideo" type="video/mp4" />
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
                        Need a link to an entity? Get the entity link control. Need a geography? Get
                        the geo selector that allows you to define an area or select a point.
                    </div>
                    <div>Autocomplete lets you look up datasources outside of this crate.</div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-2">
                    <video style="height: 400px" controls autoplay loop>
                        <source :src="controlsVideo" type="video/mp4" />
                    </video>
                    <el-image :src="controlsLanguage" style="height: 400px" fit="contain" />
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>
                <div class="flex flex-row space-x-4">
                    <div>Internationalisation:</div>
                    <el-image :src="auFlag" style="height: 30px" fit="contain" />
                    <el-image :src="huFlag" style="height: 30px" fit="contain" />
                </div>
            </template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Thanks to our Hungarian friends the component supports internationalisation.
                        In the first instance English and Hungarian are supported but if you wish to
                        contribute another language please read
                        <a
                            href="https://github.com/describo/crate-builder-component#internationalisation"
                            target="_blank"
                            >https://github.com/describo/crate-builder-component#internationalisation</a
                        >
                    </div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-2">
                    <el-image :src="describoI18En" fit="contain" />
                    <el-image :src="describoI18Hu" fit="contain" />
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent :image="describoThemes">
            <template #title>Themes</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        The Describo component supports theming with the full support of
                        <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>. We
                        understand that you might not like the colour choices we made so we're
                        adding support for you to override them. If you find you want to restyle
                        something not yet covered, raise an issue in the component issue tracker.
                    </div>
                    <div>
                        Read the docs at
                        <a
                            href="https://github.com/describo/crate-builder-component#themes"
                            target="_blank"
                            >https://github.com/describo/crate-builder-component#themes</a
                        >
                    </div>
                    <div>
                        And we won't judge you. Colour it how you want. Even purple and yellow if
                        that's your thing!
                    </div>
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
                    <el-image :src="describoAddProperties" style="height: 400px" fit="contain" />
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
                    <el-image :src="describoReverseLinks" style="height: 400px" fit="contain" />
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Navigate the network</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Blue boxes navigate to the linked entity and with a profile you can tell
                        Describo to resolve the paths from the linked entity as well. This is
                        especially useful for complex entities like relationships and actions that
                        link other entities together into a narrative.
                    </div>
                    <div>
                        In this example we can see the source and target of the linked relationships
                        as well as the object, participant and agent of the CreateAction. The
                        properties to resolve and the entities for which they resolve is all
                        configurable in the profile so you can adapt it to the shape of your data.
                    </div>
                </div>
            </template>
            <template #content>
                <el-image :src="navigateTheNetwork" style="height: 400px" fit="contain" />
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
                <el-image :src="tabbedDataDisplay" style="height: 400px" fit="contain" />
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent :image="readOnlyMode">
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
    </div>
</template>

<script setup>
import InfoPanelComponent from "./InfoPanel.component.vue";
import LinkComponent from "./Link.component.vue";
import describoAddProperties from "../assets/describo-add-properties.png";
import describoReverseLinks from "../assets/describo-reverse-links.png";
import navigateTheNetwork from "../assets/describo-navigate-the-network.png";
import readOnlyMode from "../assets/describo-read-only-mode.png";
import controlsVideo from "../assets/describo-controls-video.mp4";
import controlsLanguage from "../assets/describo-controls-language.png";
import tabbedDataDisplay from "../assets/describo-tabbed-data-display.png";
import describoOverviewVideo from "../assets/describo-overview-video.mp4";
import describoI18En from "../assets/describo-i18-en.png";
import describoI18Hu from "../assets/describo-i18-hu.png";
import describoThemes from "../assets/describo-themes.png";
// import starUs from "../assets/describo-star-us.png";
import auFlag from "../assets/flag-au.png";
import huFlag from "../assets/flag-hu.png";
</script> -->
