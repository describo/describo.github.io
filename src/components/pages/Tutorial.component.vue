<template>
    <div class="flex flex-col space-y-20">
        <InfoPanelComponent image="/tutorial1.png">
            <template #title
                >Beginner Tutorial: Research Object Crates (RO-Crate) and Describo</template
            >
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        The RO-Crate specification describes "a method of aggregating and describing
                        research data with associated metadata".
                        <link-component
                            link="https://www.researchobject.org/ro-crate/1.1/introduction.html"
                        />
                    </div>
                    <div>
                        In this 5 minute tutorial, you will get started describing your data as
                        RO-Crates!
                    </div>
                </div>
            </template>
            <template #content> </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Audience: about you.</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        You've heard about these nifty RO-Crate things and want to start describing
                        your data in an open and spec conformant way. Maybe you can explain what
                        JSON-LD is and maybe you've looked at the spec but your core interest here
                        is that you want to describe your research data.
                    </div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-2">
                    <div>
                        Useful links where you can learn more <br />(this is just for reference, you
                        won't be tested on this):
                    </div>
                    <div>
                        <link-component
                            text="RO-Crate specification"
                            link="https://www.researchobject.org/ro-crate/specification.html"
                        />&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                    <div>
                        <link-component text="JSON-LD" link="https://json-ld.org/" />&nbsp;<i
                            class="fa-solid fa-arrow-up-right-from-square"
                        ></i>
                    </div>
                    <div>
                        <link-component text="schema.org" link="https://schema.org/" />&nbsp;<i
                            class="fa-solid fa-arrow-up-right-from-square"
                        ></i>
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent image="/tutorial2.png">
            <template #title>Start the Describo web application</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        <link-component
                            text="Describo Web application"
                            link="https://describo.github.io/web"
                        />
                        &nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                    <div></div>
                    <div class="flex flex-row space-x-2">
                        <div class="">(Remember, it only works in Google Chrome for now.</div>
                        <el-image src="/chrome.png" style="height: 30px" fit="contain" />
                        )
                    </div>
                    <div>In the application, select a folder to describe.</div>
                </div>
            </template>
            <template #content> </template>
        </InfoPanelComponent>

        <InfoPanelComponent image="/tutorial3.png">
            <template #title>Apply the RO-Crate profile</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        The main description view. A default RO-Crate describo profile has been
                        created for you.
                    </div>
                    <div>Apply the profile.</div>
                </div>
            </template>
            <template #content> </template>
        </InfoPanelComponent>

        <InfoPanelComponent image="/tutorial4.png">
            <template #title>Profile Selector</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>The profile selector. Locate the RO-Crate profile and select it.</div>
                </div>
            </template>
            <template #content> </template>
        </InfoPanelComponent>

        <InfoPanelComponent image="/tutorial5.png">
            <template #title>Describe your data</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        When the RO-Crate profile has been applied, you will be presented with a
                        view that contains the absolute bare minimum required to describe your data
                        as an RO-Crate.
                    </div>
                    <div>Useful information:</div>
                    <div>
                        <link-component
                            text="Root data entity"
                            link="https://www.researchobject.org/ro-crate/1.1/root-data-entity.html"
                        />
                    </div>
                    <div>
                        <link-component
                            text="Contextual entities"
                            link="https://www.researchobject.org/ro-crate/1.1/contextual-entities.html"
                        />
                    </div>
                    <div>
                        <link-component
                            text="Data entities"
                            link="https://www.researchobject.org/ro-crate/1.1/data-entities.html"
                        />
                    </div>
                </div>
            </template>
            <template #content> </template>
        </InfoPanelComponent>

        <InfoPanelComponent image="/tutorial6.png">
            <template #title>Go further: describe more</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Click the add button in the toolbar and inject properties into the data.
                    </div>
                    <div>
                        <el-image :src="tutorial7" style="height: 50px" fit="contain" />
                    </div>
                    <div>
                        The properties you can inject come from schema.org and the describo profile
                        if one is applied. They are defined on the type of data you are working
                        with. In this case a Dataset. When you add the property Describo will tell
                        you what type of data it expects.
                    </div>
                </div>
            </template>
            <template #content> </template>
        </InfoPanelComponent>

        <InfoPanelComponent image="/tutorial8.png">
            <template #title>Where did that property go?</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        With a profile that defines a grouped interface, for example the RO-Crate
                        profile, extra properties that you add will be visible in the '...' tab.
                        Don't worry, just remove the profile and you get a list view with all of
                        your properties, sorted alphabetically. Or go back to the tabbed view. Work
                        the way that suits you best.
                    </div>
                </div>
            </template>
            <template #content> </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>And that's an RO-Crate!</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Well done, you created an RO-Crate by describing your data in a standard,
                        spec compliant way!
                    </div>
                    <div class="text-center">
                        <i class="fa-solid fa-champagne-glasses text-yellow-500 fa-4x"></i>
                    </div>
                </div>
            </template>
            <template #content> </template>
        </InfoPanelComponent>
    </div>
</template>

<script setup>
import InfoPanelComponent from "../InfoPanel.component.vue";
import LinkComponent from "../Link.component.vue";
</script>
