<template>
    <div class="flex flex-col space-y-10">
        <InfoPanelComponent :border="false">
            <template #text>
                <div>January - May 2020: UTS</div>
                <div class="my-10">
                    Funded by:&nbsp;
                    <a href="https://www.uts.edu.au/" target="_blank"
                        ><img src="/logos/uts-logo.png"
                    /></a>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-4">
                    <div>
                        Peter Sefton (Technical Lead) engaged Marco La Rosa (Full stack developer
                        and Software Architect) to build the first proof of concept Describo
                        application. Peter, a co-editor of the RO Crate specification, envisaged a
                        tool that would enable users to create valid, spec compliant RO Crates.
                        Initial consultation with his team at UTS and other collaborators led to the
                        creation of the Describo Desktop application.
                    </div>
                    <div>
                        In that design, Describo Desktop was required to enable users to describe
                        entities using all of schema.org. As a development on top of that, Marco
                        developed the concept of profiles to drive the user interface. With both of
                        these capabilities Describo Desktop gave users the full power of schema.org
                        whilst also being extensible to custom domains and data models.
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #text>
                <div>October 2020 - December 2020: UTS</div>
                <div class="my-10">
                    Funded by:&nbsp;
                    <a href="https://www.uts.edu.au/" target="_blank"
                        ><img src="/logos/uts-logo.png"
                    /></a>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-4">
                    <div>
                        Whilst very well received and proof of the validity of the concept, the
                        Describo Desktop application had limitations. In a second engagement Peter
                        re-engaged Marco and developed a specification for the Describo Online
                        application. This was a web based version with an internal database to
                        manage entities and the ability to talk to various backend storage systems
                        via rclone. Peter's vision was to have a singular application that could be
                        deployed as a standalone tool or embed into external applications as the
                        metadata editor. The first integration was to be at UTS.
                    </div>
                    <div>
                        In the first iteration Describo Online used Microsoft OneDrive as a backend
                        storage system (via rclone) as this was the preferred data storage system at
                        UTS. In a short development cycle Marco ported the Describo Desktop code to
                        an online environment (Single Page VueJS Application and NodeJS API) and
                        further developed and improved the profile capability of the tool.
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #text>
                <div>
                    January 2021 - December 2021: CS3MESH4EOSC, University of Muenster, and the
                    Nyingarn Project
                </div>
                <div class="my-10 flex flex-col space-y-2">
                    <div>Funded by:&nbsp;</div>
                    <div>
                        <a href="https://cs3mesh4eosc.eu/" target="_blank">
                            <img src="/logos/cs3mesh-logo.png" class="h-16 bg-slate-800" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.uni-muenster.de/en/" target="_blank">
                            <img src="/logos/muenster-logo.png" class="h-24 bg-slate-800" />
                        </a>
                    </div>
                    <div>
                        <a href="https://nyingarn.net" target="_blank">
                            <img src="/logos/nyingarn-logo.png" class="h-32" />
                        </a>
                    </div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-4">
                    <div>
                        Throughout 2020 Peter engaged with the EOSC project brokering a consulting
                        engagement for himself and Marco to port the Describo Online environment
                        into their Research Data Management Tool - ScieboRDS.
                    </div>
                    <div>
                        Via a few sprints of effort during that year Marco worked with the ScieboRDS
                        developers to help them integrate Describo Online into their tool as the RO
                        Crate description capability. At the same time, Marco integrated Describo
                        Online into the nascent Nyingarn Workspace as the metadata description tool.
                    </div>
                    <div>
                        Development that year, with funding from EOSC, WWW Munster and the Nyingarn
                        Project resulted in the integration of S3 and Owncloud backends (also via
                        rclone) and the Reva backend storage systems via the Reva API. Significant
                        experience was gained in operating Describo Online in environments whose
                        requirements varied signifcantly.
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #text>
                <div>January 2022: LDACA</div>
                <div class="my-10 flex flex-col space-y-4">
                    <div>Funded by:&nbsp;</div>
                    <div>
                        <a href="https://ldaca.edu.au/" target="_blank">
                            <img src="/logos/ldaca-logo.png" class="h-28 bg-white" />
                        </a>
                    </div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-4">
                    <div>
                        With funding from the Language Data Commons Project (LDACA), Peter asked
                        Marco if he could create a version of Online that users could run on their
                        local machines. With all of Peter's efforts directed into the Online
                        version, a critical gap existed for users who just wanted a tool to edit RO
                        crates without needing to run a web application. To solve this problem Marco
                        developed a wrapper to run the Online version on a users' own computer via
                        docker containers.
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #text>
                <div>June to December 2022: The Nyingarn Project and Sztaki</div>
                <div class="my-10 flex flex-col space-y-4">
                    <div>Funded by:&nbsp;</div>
                    <div>
                        <a href="https://nyingarn.net" target="_blank">
                            <img src="/logos/nyingarn-logo.png" class="h-32" />
                        </a>
                    </div>
                </div>
            </template>
            <template #content>
                <div class="flex flex-col space-y-4">
                    <div>
                        By this time, difficulties using the Online version in external applications
                        (Sciebo RDS and the Nyingarn Workspace) were evident. The Sciebo team were
                        managing their own fork so that they could customise it to suit their
                        environment and Marco was finding it difficult to synchronise the Describo
                        internal state with the Nyingarn internal state.
                    </div>
                    <div>
                        Given these issues, and with support from the Nyingarn Project, Marco
                        conceptualised and developed the crate builder component as a plugin that
                        developers could use in their own applications. In short, the RO Crate
                        engine internal to Describo Online was extracted into a standalone VueJS
                        component others could use in their applications and customise without
                        needing to fork the whole environment or run what had become an overly
                        complex environment. As a tool trying to be all things to all groups (via
                        the design requirement to talk to various storage backends) Describo online
                        was already showing signs of significant technical debt.
                    </div>
                    <div>
                        During the year, Marco was contacted by the people at Sztaki in Hungary to
                        talk about how they wished to develop an RO Crate capability in Dataverse
                        using Describo Online. The standalone component developed by Marco in
                        Nyingarn went on to form the basis of their work.
                    </div>
                </div>
            </template>
        </InfoPanelComponent>

        <InfoPanelComponent>
            <template #text> 2023 </template>
            <template #content>
                <div class="flex flex-col space-y-4">
                    <div>
                        After extracting the RO Crate engine into a standalone component, Marco was
                        able to revive the Describo Desktop application as well as create a web
                        based application for users who didn't want, or weren't able, to install the
                        desktop version. The component enabled the development of different tools
                        for different users, all with a consistent user experience. And developers
                        using the component weren't required to deal with the technical debt
                        inherent in the design of Describo Online.
                    </div>
                    <div>
                        This was also a key turning point in the direction of Describo in that it
                        allowed users to decide how their environments should work without needing
                        to accept compromises or decisions made by the Describo technical
                        leadership. Marco designed all aspects of the component to be totally
                        configurable so developers could decide how it looked and worked in their
                        applications.
                    </div>
                    <div>
                        Around the same time, Marco registered the describo organisation in Github
                        to pull together all of the related Describo developments including profiles
                        and data packs. Marco also setup the profiles repository as a hosting point
                        for domain specific profiles that the Desktop and Web tools could
                        dynamically pull profiles from so users could get started quickly with
                        definitions created by others.
                    </div>
                    <div>
                        Marco has continued contributing to the Describo environment as an open
                        source developer when time permits. This includes maintaining the crate
                        component (with help from our Hungarian friends at Sztaki), the desktop and
                        web versions, profiles, data packs and this website. Marco is the current
                        Technical Lead of the Describo Project.
                    </div>
                    <div>
                        Peter envisioned a tool that copies most of the Describo innovations but is
                        architected differently and so decided to pursue that vision elsewhere using
                        funding from the Language Data Commons Project of Australia. Peter has not
                        been associated with the Describo project or any of its components since
                        early 2023.
                    </div>
                </div>
            </template>
        </InfoPanelComponent>
    </div>
</template>

<script setup>
import InfoPanelComponent from "../InfoPanel.component.vue";
</script>
