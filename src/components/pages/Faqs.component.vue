<template>
    <div class="flex flex-col space-y-10">
        <InfoPanel :border="false">
            <template #title>How is this work funded?</template>
            <template #text>
                <div>
                    Various elements of the describo ecosystem have been developed via project
                    funding from various sources. You can read about the history and who has
                    provided funding for this work on the
                    <router-link to="/about">about page.</router-link>
                </div>
                <div
                    class="flex flex-row space-x-4 items-center bg-yellow-200 p-4 text-slate-800 rounded-lg my-4"
                >
                    <div><i class="text-red-600 fa-solid fa-circle-info fa-2x"></i></div>
                    <div>
                        Describo is currently unfunded. It you like it and find it useful, please
                        reach out to discuss how you can support further development.
                        <a href="mailto:m@lr.id.au" target="_blank">Email Marco La Rosa.</a>
                    </div>
                </div>
            </template>
        </InfoPanel>

        <InfoPanel>
            <template #title>
                Why is the desktop application more functional than the web version?
            </template>
            <template #text>
                <div>
                    Browser environments are locked down extremely tightly as they are a common
                    attack vector for computers. Because of this, there are many capabilities that
                    are impossible to implement in environments like that.
                </div>
                <div>
                    Typically, a web application is the 'client' part of a client/ server
                    application. This is known as a SAAS (Software as a Service) application. Whilst
                    a SAAS application can do all of the things Desktop can do, it requires the
                    operation of central services (virtual machines and cloud resources) that are
                    out of reach of an unfunded project like Describo. Further, SAAS applications
                    depend upon user management and managing people's data which is difficult to do
                    securely, and well. The Describo web tool is the client part of a SAAS
                    application without the server part so it has to abide by the restrictions of
                    the browser.
                </div>
                <div>
                    By contrast, Describo desktop is like a client/server application bundled
                    together. User and user data management is handled by the person's own computer;
                    that is, they work in their own home directory with their own data. This enables
                    the development of capabilities that couldn't operate in a standalone browser
                    environment without the complexity of managing users and their data on a server.
                </div>
            </template>
        </InfoPanel>

        <InfoPanel>
            <template #title>How do other tools compare to Describo?</template>
            <template #text>
                <div>
                    Peter Sefton, the original lead of the Describo project, has created an
                    alternative tool using funding from the Language Data Commons of Australia.
                    Whilst it does the same thing as Describo, the internal implementation is quite
                    different.
                </div>
                <div>
                    Unfortunately, their README is misleading about the differences between it and
                    Describo and over time, they have copied many of the Describo innovations
                    including most recently, making an embeddable component available.
                </div>
                <div>
                    To address the comment of a "general purpose tool": Describo is a general
                    purpose tool. As browser environments are extremely limited in what they can do,
                    the web version of Describo is only targetted at simple usage where one wants to
                    browse an RO-Crate. Describo desktop is like a a client / server application all
                    in one and that enables the capabilities coming soon!
                </div>
            </template>
        </InfoPanel>

        <InfoPanel>
            <template #title>
                How do RO-Crate Editor Profiles compare to Describo Profiles?
            </template>

            <template #text>
                <div>In short, they are a limited version of Describo Profiles.</div>
                <div>
                    One of the key innovations of Describo was the development of profiles to drive
                    the user interface. When Marco invented this capability, he designed it so that
                    a profile author could selectively augment schema.org definitions. Consider
                    'Dataset' which is a subclass of 'CreativeWork' which is itself a subclass of
                    'Thing'. In all, 133 properties are defined for a Dataset when considering the
                    full entity hierarchy. In Describo, a profile author can define a Dataset class
                    as 'inherit' and then add to those properties. In the UI, the user is presented
                    with a control to view all of the available properties along with the extra ones
                    defined in the profile.
                </div>
                <div>
                    In this way, the profile author does not need to re-define every single one of
                    the properties and overwhelm the user in the interface. Further, with inherit,
                    any properties defined in the profile are made visible in the UI (including any
                    that overlap the schema.org definitions) with the others always available. This
                    allows the profile author complete control over what is shown and how.
                </div>
                <div>
                    Another difference is how the layouts are defined. In Describo Profiles, the
                    profile author can define their own layouts per entity. Further, the profile
                    author has complete control over how the properties are grouped and what those
                    groups are called. This is not possible with RO-Crate editor profiles.
                </div>
                <div>
                    Describo profiles have a resolve property where the profile author can define
                    how to resolve for complex linking entities like actions. Where an action
                    defines an object, agent and a participant, the profile author can choose to
                    make the linked entities visible in the UI. RO-Crate editor profiles do not have
                    this capability.
                </div>
                <div>
                    The authors claim that their profiles are no longer compatible with Describo but
                    that is incorrect and misleading. There are elements of their profiles that
                    Describo would ignore but for the most part, the profiles are still compatible
                    even though Describo Profiles are more powerful as they copy the same basic
                    structure.
                </div>
                <div>
                    Unfortunately, the maintainers chose to not engage with Describo Profiles and
                    when asked why, refused to communicate.
                    <Linker
                        link="https://github.com/Language-Research-Technology/ro-crate-editor-profiles/issues/3"
                    />
                </div>
            </template>
        </InfoPanel>
    </div>
</template>

<script setup>
import InfoPanel from "../InfoPanel.component.vue";
import Linker from "../Link.component.vue";
</script>
