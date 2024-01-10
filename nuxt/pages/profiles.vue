<template>
    <div class="flex flex-col space-y-20">
        <InfoPanelComponent :border="false">
            <template #title>Profiles</template>
            <template #text>
                <div class="flex flex-col space-y-2">
                    <div>Profiles are how you tell Describo what it can do.</div>
                    <div>
                        Detailed documentation on how to create your own profile can be found in the
                        repository.
                    </div>
                </div>
            </template>
            <template #content>
                <link-component link="https://github.com/describo/profiles#profile-documentation" />
            </template>
        </InfoPanelComponent>

        <Stack :cards="cards" class="p-4 bg-slate-100 rounded-lg"></Stack>
        <InfoPanelComponent>
            <template #title>View profile examples</template>
            <template #text>
                <div>
                    You can find examples in the repository to either use in your description
                    activities or as a base to develop your own profiles.
                    <link-component
                        link="https://github.com/describo/profiles/tree/master/domain-profiles"
                    />
                </div>
                <div>
                    Read the documentation:
                    <a
                        href="https://describo.github.io/documentation/profiles/get-started.html"
                        target="_blank"
                    >
                        https://describo.github.io/documentation/profiles/get-started.html
                    </a>
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
import InfoPanelComponent from "../components/InfoPanel.component.vue";
import RepositoryLinksComponent from "../components/RepositoryLinks.component.vue";
import LinkComponent from "../components/Link.component.vue";
import Stack from "../components/Stack.vue";

const cards = [
    {
        text: `In a profile
        you can define the layout to use for a crate (default or grouped);
        the entities that can be defined by the user and which properties are
        allowed for those entities; whether entities inherit from Schema.org
        or allow only what is in the profile; the datapacks that data can be sourced from.`,
        image: "/profile1.png",
    },
    {
        text: `Profiles can (and should) be shared.
        Issue a pull request to the repo to share your profile.
        Just read the instructions for inclusion. As a bonus,
        Describo Desktop and Web will make those profiles available to users! `,
        image: "/profile2.png",
    },
];
</script>
