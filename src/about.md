---
title: About Describo
---

# About Describo

## January - May 2020

Peter Sefton (Technical Lead) engaged Marco La Rosa (Full stack developer) to build the first proof
of concept Describo application. Peter, a co-editor of the RO Crate specification, envisaged a tool
that would enable users to create valid, spec compliant RO Crates. Initial consultation with his
team at UTS and other collaborators led to the creation of the Describo Desktop application.

In that design, Describo Desktop was required to enable users to describe entities using all of
schema.org. As a development on top of that, Marco developed the concept of profiles to drive the
user interface. With both of these capabilities Describo Desktop gave users the full power of
schema.org whilst also being extensible to custom domains and data models.

Funded by: [![](/images/logos/uts-logo.png)](https://uts.edu.au)

## October 2020 - December 2020

In a second engagement Peter designed a specification for an online application. This was a web
based version with an internal database to manage entities and the ability to talk to various
backend storage systems via rclone. Peter's vision was to have a singular application that could be
deployed as a standalone tool or embed into external applications as the metadata editor. The first
integration was to be at UTS.

In the first iteration Describo Online used Microsoft OneDrive as a backend storage system (via
rclone) as this was the preferred data storage system at UTS. In this development cycle Marco ported
the Describo Desktop code to an online environment (Single Page VueJS Application and NodeJS API)
and further developed and improved the profile capability of the tool.

Funded by: [![](/images/logos/uts-logo.png)](https://uts.edu.au)

## January 2021 - December 2021

Throughout 2020 Peter engaged with the EOSC project brokering a consulting engagement for himself
and Marco to port the Describo Online environment into their Research Data Management Tool -
ScieboRDS.

Via a few sprints of effort during that year Marco worked with the ScieboRDS developers to help them
integrate Describo Online into their tool as the RO Crate description capability. At the same time,
Marco integrated Describo Online into the nascent Nyingarn Workspace as the metadata description
tool.

Development that year, with funding from EOSC, WWW Munster and the Nyingarn Project resulted in the
integration of S3 and Owncloud backends (also via rclone) and the Reva backend storage systems via
the Reva API. Significant experience was gained in operating Describo Online in environments whose
requirements varied signifcantly.

Funded by:

<div class="flex flex-row flex-wrap justify-around">
    <a href="https://cs3mesh4eosc.eu" target="_blank" class="bg-black">
        <img src="/images/logos/cs3mesh-logo.png" class="h-20"/>
    </a>
    <a href="https://www.uni-muenster.de/en/" target="_blank">
        <img src="/images/logos/muenster-logo.png" class="h-32"/>
    </a>
    <a href="https://nyingarn.net" target="_blank">
        <img src="/images/logos/nyingarn-logo.png" class="h-32"/>
    </a>
</div>

## January 2022

With funding from the Language Data Commons Project (LDACA), Peter again engaged Marco to create a
version of Online that users could run on their local machines. With all of Peter's efforts directed
into the Online version, a critical gap existed for users who just wanted a tool to edit RO crates
locally without needing to run a SAAS service. To solve this problem Marco developed a wrapper to
run the Online version on a users' own computer via docker containers.

Funded by:

<a href="https://ldaca.edu.au" target="_blank">
    <img src="/images/logos/ldaca-logo.png" class="h-32"/>
</a>

## June to December 2022

By this time, difficulties using the Online version in external applications (Sciebo RDS and the
Nyingarn Workspace) were evident. The Sciebo team were managing their own fork so that they could
customise it to suit their environment and Marco was finding it difficult to synchronise the
Describo internal state with the Nyingarn internal state. Furthermore, different backends supported
different capabitiies.

<!-- For example, OneDrive for business supported short lived file url's that
could be used to display file previews but OneDrive personal did not (and neither did Owncloud). -->

<!-- Given these issues, and with support from the Nyingarn Project, Marco developed the crate builder
component as an RO-Crate plugin that developers could use in their own applications. That is, the RO
Crate engine internal to Describo Online was extracted into a standalone VueJS component others
could use in their applications and customise without needing to fork the whole environment or run
what had become an overly complex environment. -->

Given these issues, and with support from the Nyingarn Project, Marco extracted the RO Crate engine
internal to Describo Online into a standalone VueJS component that could be embedded in applications
and customised as required.

<!-- As a tool trying to be all things to all groups (via
the design requirement to talk to various storage backends) Describo online was already showing
signs of significant technical debt. -->

During the year, Marco was contacted by the people at Sztaki in Hungary to talk about how they
wished to develop an RO Crate capability in Dataverse using Describo Online. The standalone
component developed by Marco in Nyingarn went on to form the basis of their work.

Funded by:

<a href="https://nyingarn.net" target="_blank">
    <img src="/images/logos/nyingarn-logo.png" class="h-32"/>
</a>

## 2023

Extraction of the RO Crate engine into a standalone component allowed the revival of the Describo
Desktop application as well as the creation of a web based application for users who needed basic
RO-Crate editing capability. The component enabled the development of different tools for different
users, all with a consistent user experience. And developers using the component weren't required to
deal with the technical debt inherent in the design of Describo Online.

<!-- This was also a key turning point in the direction of Describo in that it allowed users to decide
how their environments should work without needing to accept compromises or decisions made by the
Describo technical leadership. Marco designed all aspects of the component to be totally
configurable so developers could decide how it looked and worked in their applications. -->

Around the same time, Marco registered the describo organisation in Github to pull together all of
the related Describo developments including profiles and data packs.

<!-- Marco also setup the profiles
repository as a hosting point for domain specific profiles that the Desktop and Web tools could
dynamically pull profiles from so users could get started quickly with definitions created by
others. -->

Displeased with these developments Peter declined the invitation to join the GitHub organisation and
decided to pursue his vision with elsewhere.

<!-- Shortly after, Peter took the considerable funding of the Language Data Commons and directed it to
an alternative product that copies many of the Describo innnovations; including most recently, an
embeddable component. -->

<!-- Meanwhile, Marco has continued building the Describo environment as an open source developer when
time permits. This includes maintaining the crate component (with help from our Hungarian friends at
Sztaki), the desktop and web versions, profiles, data packs the website and this documentation. -->

`Peter has not been associated with the Describo project or any of its components since early 2023`.
