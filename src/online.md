---
layout: home
aside: false
---

<InfoPanelComponent :border="false" class="my-20">
    <template #title>Describo Web</template>
    <template #text>
        <div>
            Access it at
            <LinkComponent link="https://describo.github.io/web">https://describo.github.io/web</LinkComponent>. Use this version
            to get started quickly with the describo environment. For a more full
            featured environment take a look at
            <LinkComponent link="/desktop" target="">Describo desktop</LinkComponent>.
        </div>
    </template>
    <template #content>
        <div class="flex flex-col space-y-4">
            <div>
                Only available in Google Chrome and Microsoft Edge (unfortunately one of the
                capabilities it requires is not available in other browsers).
            </div>
            <div class="flex flex-row justify-center space-x-10">
                <div>
                    <img src="/images/logos/chrome.webp" class="h-20" />
                </div>
                <div>
                    <img src="/images/logos/edge.webp" class="h-20" />
                </div>
            </div>
        </div>
    </template>
</InfoPanelComponent>

<FooterComponent class="mt-6"/>
