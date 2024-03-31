---
title: Frequently Asked Questions
aside: false
---

# FAQs

[[toc]]

## How is this work funded?

Describo is currently an unfunded project.

Various elements of the describo ecosystem have been developed via project funding from various
sources. You can read about the history and who has provided funding for this work on the
[about page](/about).

<!-- <div class="flex flex-row space-x-4 justify-center bg-slate-100 p-4 text-slate-800 rounded-lg my-4 text-lg">
    <div>
        <i class="fa-solid fa-circle-info text-red-600 fa-2x"></i>
    </div>
    <div>
        Describo is currently unfunded.
    </div>
</div>

Please see the page [`Support this work`](/support) if you are able to provide funding to keep
development going. -->

## Why is the desktop application more functional than the web version?

Browser environments are locked down extremely tightly as they are a common attack vector for
computers. Because of this, there are many capabilities that are impossible to implement in
browsers.

Typically, a web application is the 'client' part of a client/ server application. This is known as
a SAAS (Software as a Service) application. Whilst a SAAS application can do all of the things
Desktop can do, it requires the operation of central services (virtual machines and cloud resources)
that are out of reach of an unfunded project like Describo. Further, SAAS applications depend upon
user management and managing people's data which is difficult to do securely, and well. The Describo
web tool is the client part of a SAAS application without the server part so it has to abide by the
restrictions of the browser without the capabilities of the server.

By contrast, Describo desktop is like a client/server application bundled together. User and user
data management is handled by the person's own computer; that is, they work in their own home
directory with their own data. This enables the development of capabilities that couldn't operate in
a standalone browser environment without the complexity of managing users and their data on a
server.

## How do other tools compare to Describo?

Peter Sefton, the original lead of the Describo project, has created an alternative tool using
funding from the Language Data Commons of Australia. Whilst it does the same thing as Describo, the
internal implementation is quite different.

Unfortunately, their README is misleading about the differences between it and Describo and over
time, they have copied many of the Describo innovations including most recently, making an
embeddable component available .

To address his comment of a "general purpose tool": Describo is a general purpose tool. As browser
environments are extremely limited in what they can do, the web version of Describo is only targeted
at simple usage where one wants to browse an RO-Crate and possibly make a few metadata edits.
Describo desktop is like a a client / server application all in one and that enables the
capabilities coming soon!

## How do RO-Crate Editor Profiles compare to Describo Profiles?

In short, they are a limited version of Describo Profiles.

One of the key innovations of Describo was the development of profiles to drive the user interface.
When Marco invented this capability, he designed it so that a profile author could selectively
augment schema.org definitions. Consider 'Dataset' which is a subclass of 'CreativeWork' which is
itself a subclass of 'Thing'. In all, 133 properties are defined for a Dataset when considering the
full entity hierarchy. In Describo, a profile author can define a Dataset class as 'inherit' and
then add to those properties. In the UI, the user is presented with a control to view all of the
available properties along with the extra ones defined in the profile.

In this way, the profile author does not need to re-define every single one of the properties and
overwhelm the user in the interface. Further, with inherit, any properties defined in the profile
are made visible in the UI (including any that overlap the schema.org definitions) with the others
always available. This allows the profile author complete control over what is shown and how.

Another difference is how the layouts are defined. In Describo Profiles, the profile author can
define their own layouts per entity. Further, the profile author has complete control over how the
properties are grouped and what those groups are called. This is not possible with RO-Crate editor
profiles.

Describo profiles have a resolve property where the profile author can define how to resolve complex
linking entities like actions. Where an action defines an object, agent and a participant, the
profile author can choose to make the linked entities visible in the UI. RO-Crate editor profiles do
not have this capability.

::: warning NOTE

On one of their sites they claim that RO-Crate Editor files are definitely not compatible with
Describo. This is untrue and following is an explanation of why.

:::

The authors claim that their profiles are no longer compatible with Describo but that is untrue and
purposefully misleading. There are elements of their profiles that Describo would ignore but for the
most part, the profiles are still compatible as they copy the same basic structure. Further, they
could easily be mapped to the Describo Profiles format if the project lead were interested in
maintaining tool compatibility and mitigating the complexity confronting the user base.

Unfortunately, the maintainers chose to not engage with Describo Profiles and when asked why,
refused to communicate.
[https://github.com/Language-Research-Technology/ro-crate-editor-profiles/issues/3](https://github.com/Language-Research-Technology/ro-crate-editor-profiles/issues/3)
