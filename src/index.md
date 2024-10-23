---
layout: home
---

<div class="flex flex-col md:flex-row md:place-content-between my-10">
  <div class="w-full">
    <div class="flex flex-col space-y-4 items-center">
        <div>
          <img src="/images/logos/describo-logo.webp" class="h-16 lg:h-32" />
        </div>
        <div class="text-xl lg:text-3xl text-center text-slate-600">
        <!-- <TagLine class="text-center md:text-left md:pl-14 lg:pl-28" /> -->
        An AI-powered metadata editor and research tool that transforms your data into linked, discoverable insights.
        </div>
    </div>
    <div class="w-full flex flex-row flex-wrap place-content-center mt-10">
        <FeatureComponent link="/desktop" :icon="faDownload" class="m-1 grow lg:grow-0 bg-blue-200">
          <template #title>
            Get Describo - free download
          </template>
        </FeatureComponent>
        <FeatureComponent link="/tour" :icon="faRoute" class="m-1 grow lg:grow-0 bg-blue-200">
          <template #title>
            Take the product tour
          </template>
        </FeatureComponent>
        <FeatureComponent link="/docs/articles/why-use-it" :icon="faFileLines" class="m-1 grow lg:grow-0 bg-blue-200">
          <template #title>
            Why Describo?
          </template>
        </FeatureComponent>
         <FeatureComponent link="/docs/articles/articles-index" :icon="faFileLines" class="m-1 grow lg:grow-0 bg-blue-200">
          <template #title>
            Feature Articles
          </template>
        </FeatureComponent>
    </div>
    <div class="w-full flex flex-row flex-wrap place-content-center">
        <FeatureComponent link="/docs/guide/five-minute-tutorial" :icon="faPersonChalkboard" class="m-1 grow md:grow-0 bg-slate-200">
            <template #title>
                  5 minute beginner tutorial
            </template>
            <template #content>
                <div class="text-xs no-underline">
                    New to RO-Crate and Describo?
                </div>
            </template>
        </FeatureComponent>
          <FeatureComponent link="/docs/component/introduction" :icon="faCode" class="m-1  grow md:grow-0 bg-slate-200">
            <template #title>
                  Developers
            </template>
            <template #content>
                <div class="text-xs no-underline">
                  Use the Describo RO-Crate engine in your app
                </div>
            </template>
        </FeatureComponent>
        <FeatureComponent link="/describo-users" :icon="faUsers" class="m-1 grow md:grow-0 bg-slate-200">
            <template #title>
                See who's using Describo
            </template>
        </FeatureComponent>
    </div>
    <div class="w-full flex flex-row flex-wrap place-content-center">
        <FeatureComponent link="https://github.com/describo/describo.github.io" target="_blank" :icon="faStar" class="m-1 grow md:grow-0 bg-slate-200">
            <template #title>
                  Like it? Star us on Github.
            </template>
        </FeatureComponent>
        <FeatureComponent :icon="faBookOpenReader" class="m-1 grow md:grow-0 bg-slate-200">
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
</div>

<div class="flex flex-col mt-10 lg:mt-20 space-y-5 lg:space-y-20">

  <InfoPanelComponent>
    <template #title>An intuitive, intelligent and extensible metadata editor</template>
    <template #text>
      <p>
        Describo enables you to describe your data. It creates linked data
        conforming to the <LinkComponent link="https://www.researchobject.org/ro-crate/specification">Research Object Crate (RO-Crate) specification.</LinkComponent>
      </p>
      <p> <font-awesome-icon :icon="faWandSparkles" /> Use the GenAI Assistant to verify your data against the spec.</p>
      <p>
        <FeatureComponent link="/tour" :icon="['fas', 'route']" class="text-sm bg-blue-100">
            <template #title>
                  Take the product tour
            </template>
        </FeatureComponent>
      </p>
    </template>
    <template #content>
      <ImageComponent src="/images/tour/desktop4.webp" />
    </template>
  </InfoPanelComponent>

  <InfoPanelComponent  layout="rtl">
      <template #title>Create your own Vocabulary</template>
      <template #text>
        <p>
          For when you need more than just what schema.org offers.
        </p>
        <p>
          Choose from schema.org, MODS, Premis-3, Records in Context - Ontology and SKOS in addition
          to defining your own classes and properties.
        </p>
        <p>Define the domain you wish to describe and then
          use Describo to describe it!</p>
        <FeatureComponent link="/docs/guide/vocabulary.html" :icon="faBook" class="text-sm bg-blue-100">
          <template #title>
            Read the docs
          </template>
        </FeatureComponent>
      </template>
      <template #content>
        <ImageComponent src="/images/tour/desktop16.webp" />
      </template>
    </InfoPanelComponent>

  <InfoPanelComponent>
    <template #title>Linked data to tables</template>
    <template #text>
      <p>
        Describo lets you view your data in a clean, organized table format that's as straightforward as a spreadsheet. You can easily search through your information and choose exactly which details you want to display on screen.
      </p>
      <FeatureComponent link="/docs/guide/browse.html" :icon="faBook" class="text-sm bg-blue-100">
        <template #title>
          Read the docs
        </template>
      </FeatureComponent>
    </template>
    <template #content>
      <ImageComponent src="/images/tour/desktop8.webp" />
    </template>
  </InfoPanelComponent>

  <InfoPanelComponent  layout="rtl">
      <template #title>Bulk Data transformation and Information Extraction</template>
      <template #text>
          <ul class="list-disc">
            <li>Image manipulation - creation of thumbnails and web formats</li>
            <li>Entity recognition and markup</li>
            <li><font-awesome-icon :icon="faWandSparkles" /> Theme, topic and subject extraction powered by the GenAI Assistant</li>
          </ul>
        <FeatureComponent link="/docs/guide/transforming-content" :icon="faBook" class="text-sm bg-blue-100">
          <template #title>
            Read the docs
          </template>
        </FeatureComponent>
      </template>
      <template #content>
        <ImageComponent src="/images/tour/desktop10.webp" />
      </template>
  </InfoPanelComponent>

  <InfoPanelComponent>
    <template #title>Text extraction and Named Entity Recognition</template>
    <template #text>
      <ul class="list-disc">
        <li>View textual images alongside a powerful, yet easy to use transcription editor</li>
        <li>Tools to markup entities</li>
        <li>Text extraction (OCR) and Named Entity Recognition capabilities</li>
        <li><font-awesome-icon :icon="faWandSparkles" /> Page analysis powered by the GenAI Assistant</li>
      </ul>
      <FeatureComponent link="/docs/guide/transcribing-content.html" :icon="faBook" class="text-sm bg-blue-100">
        <template #title>
          Read the docs
        </template>
      </FeatureComponent>
    </template>
    <template #content>
      <ImageComponent src="/images/tour/desktop11.webp" />
    </template>
  </InfoPanelComponent>

  <InfoPanelComponent  layout="rtl">
    <template #title> <font-awesome-icon :icon="faWandSparkles" /> GenAI powered e-Discovery</template>
    <template #text>
      <p>
        Interrogate sets of files / folders to extract the themes and narratives that you
        might want to describe. Easily comprehend large swathes of data to find the insights
        hiding in the content. Use the assistant to provide different perspectives on what
        you find in order to test hypotheses and ideas.
      </p>
      <FeatureComponent link="/docs/guide/assistant-supported-discovery" :icon="faBook" class="text-sm bg-blue-100">
        <template #title>
          Read the docs
        </template>
      </FeatureComponent>
    </template>
    <template #content>
      <div class="flex flex-col space-y-1">
        <ImageComponent src="/images/tour/desktop14.webp" />
      </div>
    </template>
  </InfoPanelComponent>

  <InfoPanelComponent>
      <template #title>Visualisation</template>
      <template #text>
        <p>
          Describo connects your information in meaningful ways that help you explore and understand your data thoroughly. Using Describo's tools, you can quickly analyze large amounts of information that would normally take much longer to process.
        </p>
        <FeatureComponent link="/docs/guide/visualising-the-structure" :icon="faBook" class="text-sm bg-blue-100">
          <template #title>
            Read the docs
          </template>
        </FeatureComponent>
      </template>
      <template #content>
        <ImageComponent src="/images/tour/desktop15.webp" />
      </template>
  </InfoPanelComponent>

</div>

<FooterComponent class="mt-6"/>

<script setup>
  import {
    faRoute,
    faDownload,
    faCode,
    faPersonChalkboard,
    faUsers,
    faStar,
    faBookOpenReader,
    faBook,
    faFileLines,
    faWandSparkles
  }  from "@fortawesome/free-solid-svg-icons";
  import TagLine from "./vue-components/TagLine.vue";
</script>
