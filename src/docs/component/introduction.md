---
layout: doc
aside: false
---

<div class="flex flex-col space-y-20">
    <InfoPanelComponent :border="false">
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
                    <LinkComponent link="/docs/component/get-started" target="">Read on to get started.</LinkComponent>
                </div>
            </div>
        </template>
        <template #content>
            <ImageComponent src="/images/component/component1.webp" />
        </template>
    </InfoPanelComponent>
    <InfoPanelComponent>
        <template #title>React Developers</template>
        <template #text>
            <div class="flex flex-row space-x-2">
                <div>
                    Our friends in Hungary at
                    <LinkComponent link="https://www.sztaki.hu/en/science/departments/dsd">
                        SZTAKI - Department of Distributed Systems
                    </LinkComponent>
                    wrapped the VueJS component into a nice, self contained, react component.
                </div>
            </div>
        </template>
        <template #content>
            <div class="flex flex-col space-y-2 items-center">
                <div>
                    <img
                        src="/images/logos/react-logo.webp"
                        class="object-contain"
                        style="height: 120px"
                    />
                </div>
                <LinkComponent
                    link="https://github.com/describo/crate-builder-component-react">
                    Get it from https://github.com/describo/crate-builder-component-react
                </LinkComponent>
            </div>
        </template>
    </InfoPanelComponent>
    <InfoPanelComponent>
        <template #title>Themable</template>
        <template #text>
            Control all aspects of the styling of the component to suit your application. See
            <LinkComponent link="/docs/component/themes" target="">the themes documentation for
            more information.</LinkComponent>
        </template>
        <template #content>
            <ImageComponent src="/images/component/component2.webp" />
        </template>
    </InfoPanelComponent>
    <InfoPanelComponent>
        <template #title>Configurable</template>
        <template #text>
            Control all aspects of the behaviour like rendering crates in read only mode.
            <LinkComponent link="/docs/component/usage-and-configuration" target="">the configuration documentation for
            more information.</LinkComponent>
        </template>
        <template #content>
            <ImageComponent src="/images/component/component3.webp" />
        </template>
    </InfoPanelComponent>

</div>
