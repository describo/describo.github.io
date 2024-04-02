export const sidebar = [
    // {
    //     text: "About",
    //     link: "/about",
    // },
    // {
    //     text: "Frequently Asked Questions",
    //     link: "/faqs",
    // },
    // { text: "Product Tour", link: "/tour" },
    { text: "Beginner Tutorial", link: "/docs/guide/five-minute-tutorial" },
    { text: "Team", link: "/team" },
    {
        text: "User Guide",
        collapsed: false,
        items: [
            { text: "Installation", link: "/docs/guide/installation" },
            {
                text: "Configuration",
                collapsed: false,
                items: [
                    {
                        text: "General Settings",
                        link: "/docs/guide/configuration/general-settings",
                    },
                ],
            },
            {
                text: "Tutorials",
                collapsed: false,
                items: [
                    {
                        text: "What is JSON-LD and RO-Crate?",
                        link: "/docs/guide/tutorials/explainer-rocrate-and-jsonld",
                    },
                    {
                        text: "Working with an RO-Crate",
                        link: "/docs/guide/tutorials/working-with-a-crate",
                    },
                    {
                        text: "Content Transcription and Entity Markup",
                        link: "/docs/guide/tutorials/transcribing-content",
                    },
                    {
                        text: "Using the assistant when transcribing",
                        link: "/docs/guide/tutorials/transcribing-content-assistant",
                    },
                ],
            },
        ],
    },
    {
        text: "Profiles",
        collapsed: true,
        items: [
            { text: "Introduction", link: "/docs/profiles/introduction" },
            { text: "Get Started", link: "/docs/profiles/get-started" },
            { text: "Profile Structure", link: "/docs/profiles/profile-structure" },
            { text: "Context", link: "/docs/profiles/contexts" },
            { text: "Layouts", link: "/docs/profiles/layouts" },
            { text: "Localisation", link: "/docs/profiles/localisation" },
            { text: "Resolve", link: "/docs/profiles/resolve" },
            { text: "Classes and Inputs", link: "/docs/profiles/classes-and-inputs" },
            { text: "Lookups", link: "/docs/profiles/lookups" },
            { text: "Data Types", link: "/docs/profiles/types" },
        ],
    },
    {
        text: "Component",
        collapsed: true,
        items: [
            { text: "Introduction", link: "/docs/component/introduction" },
            { text: "Get Started", link: "/docs/component/get-started" },
            {
                text: "Usage & Configuration",
                link: "/docs/component/usage-and-configuration",
            },
            { text: "Data Validation", link: "/docs/component/validation" },
            { text: "Identifiers", link: "/docs/component/identifiers" },
            { text: "Advanced Usage", link: "/docs/component/advanced-usage" },
            { text: "Crate Manager", link: "/docs/component/crate-manager" },
            { text: "Internationalisation", link: "/docs/component/internationalisation" },
            { text: "Themes", link: "/docs/component/themes" },
        ],
    },
];
