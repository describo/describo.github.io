<template>
    <div class="flex flex-col space-y-20">
        <NavigationComponent />
        <InfoPanelComponent :image="profile1">
            <template #title>Profiles describe the interface</template>
            <template #text>
                <div>
                    Profiles are how you tell Describo what it can do. In a profile you can define
                    the layout to use for a crate (default or grouped); the entities that can be
                    defined by the user and which properties are allowed for those entities; whether
                    entities inherit from Schema.org or allow only what is in the profile; the
                    datapacks that data can be sourced from.
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>Documentation</template>
            <template #text>
                <div>
                    Detailed documentation on how to create your own profile can be found in the
                    repository.
                </div>
            </template>
            <template #content>
                <link-component link="https://github.com/describo/profiles#profile-documentation" />
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #title>View profile examples</template>
            <template #text>
                <div>
                    You can find examples in the repository to either use in your description
                    activities or as a base to develop your own profiles.
                </div>
            </template>
            <template #content>
                <link-component
                    link="https://github.com/describo/profiles/tree/master/domain-profiles"
                />
            </template>
        </InfoPanelComponent>
        <InfoPanelComponent :image="profile2">
            <template #title>Profiles can (and should) be shared</template>
            <template #text>
                <div>
                    Share your profiles with the community! Issue a pull request to the repo to
                    share your profile. Just read the instructions for inclusion. As a bonus,
                    Describo Desktop and Web will make those profiles available to users!
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent :image="profile3">
            <template #title>Profiles can be validated</template>
            <template #text>
                <div>
                    Use the online validator @
                    <link-component link="https://describo.github.io/profiles/" />
                    to check your profile.
                </div>
            </template>
        </InfoPanelComponent>
        <InfoPanelComponent>
            <template #title>Questions, Issues, Bugs?</template>
            <template #content>
                <RepositoryLinksComponent
                    repositoryText="Learn more about describo profiles"
                    repositoryLink="https://github.com/describo/profiles"
                    issueTrackerLink="https://github.com/describo/profiles/issues"
                >
                </RepositoryLinksComponent>
            </template>
        </InfoPanelComponent>
    </div>
</template>

<script setup>
import InfoPanelComponent from "./InfoPanel.component.vue";
import RepositoryLinksComponent from "./RepositoryLinks.component.vue";
import LinkComponent from "./Link.component.vue";
import NavigationComponent from "./Navigation.component.vue";
import profile1 from "../assets/profile-1.png";
import profile2 from "../assets/profile-2.png";
import profile3 from "../assets/profile-3.png";
</script>
