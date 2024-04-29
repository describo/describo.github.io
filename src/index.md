---
layout: home
# hero:
#     name: Describo
#     tagline: Analyse and describe your data
#     image:
#         src: ./images/logos/describo-logo.webp
#         alt: Describo
#     actions:
#         - theme: brand
#           text: Take the product tour
#           link: /tour
#         - theme: brand
#           text: Get Describo Desktop
#           link: /desktop
---

<div class="flex flex-col md:flex-row md:place-content-between my-10">
  <div class="w-full md:w-1/2">
    <div class="flex flex-col space-y-2">
        <div>
          <img src="/images/logos/describo-logo.webp" class="h-16 lg:h-32" />
        </div>
      <div class="text-xl lg:text-3xl text-slate-600">Analyse and describe your data</div>
    </div>
  </div>
  <div class="w-full md:w-1/2 flex flex-row items-center">
    <div class="grow"></div>
    <div class="flex flex-col grow">
        <FeatureComponent link="/tour" :icon="['fas', 'route']" class="m-1 grow lg:grow-0 bg-blue-200">
            <template #title>
                  Take the product tour
            </template>
        </FeatureComponent>
        <FeatureComponent link="/desktop" :icon="['fas', 'download']" class="m-1 grow lg:grow-0 bg-blue-200">
          <template #title>
            Get Describo Desktop
          </template>
        </FeatureComponent>
    </div>
  </div>
</div>

<div class="flex flex-col space-x-4">
  <div class="flex flex-row flex-wrap place-content-center">
        <FeatureComponent link="/docs/component/introduction" :icon="['fas', 'code']" class="m-1  grow md:grow-0 bg-slate-200">
            <template #title>
                  Developers
            </template>
            <template #content>
                <div class="text-xs no-underline">
                  Use the Describo RO-Crate engine in your app
                </div>
            </template>
        </FeatureComponent>
      <FeatureComponent link="/docs/guide/five-minute-tutorial" :icon="['fas', 'person-chalkboard']" class="m-1 grow md:grow-0 bg-slate-200">
          <template #title>
                5 minute beginner tutorial
          </template>
          <template #content>
              <div class="text-xs no-underline">
                  New to RO-Crate and Describo?
              </div>
          </template>
      </FeatureComponent>
      <FeatureComponent link="/describo-users" :icon="['fas', 'users']" class="m-1 grow md:grow-0 bg-slate-200">
          <template #title>
              See who's using Describo
          </template>
      </FeatureComponent>
      <FeatureComponent link="https://github.com/describo/describo.github.io" target="_blank" :icon="['fas', 'star']" class="m-1 grow md:grow-0 bg-slate-200">
          <template #title>
                Like it? Star us on Github.
          </template>
      </FeatureComponent>
      <FeatureComponent :icon="['fas', 'book-open-reader']" class="m-1 grow md:grow-0 bg-slate-200">
          <template #title>
                Cite Describo
          </template>
          <template #content>
              <div class="text-xs no-underline">
                Marco La Rosa and contributors. 2023 - present. Describo. https://describo.github.io
              </div>
          </template>
      </FeatureComponent>
  </div>
</div>

<div class="flex flex-col mt-10 space-y-10">
  <InfoPanelComponent>
    <template #title>An intuitive, intelligent and extensible metadata editor.</template>
    <template #text>
      <p>
        Describo enables you to describe your data. It creates metadata
        conforming to the <LinkComponent link="https://www.researchobject.org/ro-crate/specification.html">Research Object Crate (RO-Crate) specification.</LinkComponent>
      </p>
      <p>
        <FeatureComponent link="/tour" :icon="['fas', 'route']" class="m-1 grow lg:grow-0 bg-blue-200">
            <template #title>
                  Take the product tour
            </template>
        </FeatureComponent>
      </p>
    </template>
    <template #content>
      <ImageComponent src="/images/tour/desktop1.webp" />
    </template>
  </InfoPanelComponent>
  <InfoPanelComponent>
    <template #title>Works with your data; is totally configurable.</template>
    <template #text>
      <p>
        Describo knows how to handle different file types and it automatically calculates
        file metadata for you. It can show you previews of your data files and the metadata
        adapts based on what you are describing.
      </p>
      <p>
          <LinkComponent link="/docs/profiles/introduction" target="">Describo is totally configurable via profiles.</LinkComponent>
          If schema.org doesn't allow you to describe
          what you want, you can create a domain specific profile that adapts the application
          to your needs.
        </p>
        <p>
          In this image, a cultural collection profile is loaded which defines specific properties
          for files and a tabbed layout.
        </p>
    </template>
    <template #content>
      <ImageComponent src="/images/tour/desktop4.webp" />
    </template>

  </InfoPanelComponent>

 <InfoPanelComponent>
    <template #title>Text extraction and named entity recognition.</template>
    <template #text>
      <p>
        You have images of manuscript pages that you want to transcribe and markup.
        Describo shows you the image and provides a text editor for you to transcribe the
        page content.
      </p>
      <p>
        Purchase credits to describo.cloud and you can run your images through Optical Character
        Recognition (OCR) and Named Entity Recognition (NER) tools to speed up your work.
      </p>
      <p>
        In the image we can see the entities that have been recognised by the software. Select them
        and mark / unmark them as required. Describo produces a HTML file with the marked up content
        and the entities are written into the metadata.
      </p>
    </template>
    <template #content>
      <ImageComponent src="/images/tour/desktop8.webp" />
    </template>
  </InfoPanelComponent>

  <InfoPanelComponent>
    <template #title>AI Assistant to interrogate your data.</template>
    <template #text>
      <p>
        Once you've extracted the content, use the assistant to interrogate it.
      </p>
      <p>
        Purchase credits to describo.cloud and use the conversational AI assistant to
        interrogate your data using natural language. It's your very own research
        assistant.
      </p>
      <!-- <p>
        Watch the video to see the assistant in action.
      </p> -->
    </template>
    <template #content>
      <!-- <video controls class="p-2 border border-slate-400">
         <source src="/images/tour/analysis.mp4" type="video/mp4">
      </video> -->
           <ImageComponent src="/images/tutorial-transcribing-content-assistant/assistant1.webp" />
    </template>
  </InfoPanelComponent>
</div>

<FooterComponent class="mt-6"/>
