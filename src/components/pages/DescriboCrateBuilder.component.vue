<template>
    <div class="flex flex-col space-y-20">
        <InfoPanelComponent image="/describo-ui.png">
            <template #title>Embed the describo engine in your application</template>
            <template #text>
                <div class="flex flex-col space-y-4">
                    <div>
                        Are you developing an application and want to use the Describo RO crate
                        engine?
                    </div>
                    <div>
                        Embed a self contained, VueJS 3 component into your app. Load the RO crate
                        file and optionally a profile, pass it to the component and let the
                        component manage the rest for you. When the data changes it will be emitted
                        back to your app for saving or handling as you wish.
                    </div>
                    <div>
                        Get the component from:
                        <link-component
                            link="https://github.com/describo/crate-builder-component"
                        />
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>React Developers</template>
            <template #text>
                <div class="flex flex-row space-x-2">
                    <div>
                        Our friends in Hungary at<br />
                        <link-component
                            link="https://www.sztaki.hu/en/science/departments/dsd"
                            text="SZTAKI - Department of Distributed Systems"
                        />
                        <br />
                        extended the component to produce a web component that they then wrapped
                        into a nice, self contained, react component.
                    </div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-2 items-center">
                    <div>
                        <el-image
                            src="/react-logo.png
                        "
                            fit="contain"
                            style="height: 120px"
                        />
                    </div>
                    <link-component
                        link="https://github.com/describo/crate-builder-component-react"
                    />
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Questions, Issues, Bugs?</template>
            <template #content>
                <RepositoryLinksComponent
                    issueTrackerLink="https://github.com/describo/crate-builder-component/issues"
                >
                </RepositoryLinksComponent>
            </template>
        </InfoPanelComponent>
    </div>
</template>

<script setup>
import RepositoryLinksComponent from "../RepositoryLinks.component.vue";
import LinkComponent from "../Link.component.vue";
import InfoPanelComponent from "../InfoPanel.component.vue";
</script>
