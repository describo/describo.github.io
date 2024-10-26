---
layout: home
---

<div class="flex flex-col md:flex-row md:place-content-between my-10">
    <div class="flex flex-col space-y-4 items-center">
        <div>
          <img src="/images/logos/describo-logo.webp" class="h-16 lg:h-32" />
        </div>
        <div class="text-xl lg:text-3xl text-center text-slate-600">
        <!-- <TagLine class="text-center md:text-left md:pl-14 lg:pl-28" /> -->
        An AI-powered metadata editor and research tool that transforms your data into linked, discoverable insights.
        </div>
        <DescriboFeatures/>
  </div>
</div>

<div class="flex flex-col mt-10 lg:mt-20 space-y-5 lg:space-y-20">

  <!-- <InfoPanelComponent>
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
  </InfoPanelComponent> -->

<InfoPanelCarouselComponent
      :panels="[
          {
              title: 'An intuitive, intelligent and extensible metadata editor',
              text: `
                  <p>Describo enables you to describe your data. It creates linked data
                  conforming to the Research Object Crate (RO-Crate) specification.</p>
              `,
              content: '/images/tour/desktop4.webp'
          },
          {
              title: 'An intuitive, intelligent and extensible metadata editor',
              text: 'All of schema.org at your disposal.',
              content: '/images/tour/desktop5.webp'
          },
          {
              title: 'An intuitive, intelligent and extensible metadata editor',
              text: 'Controls to create all types of data. From linked entities to Geographies.',
              content: '/images/tour/desktop7.webp'
          },
           {
              title: 'An intuitive, intelligent and extensible metadata editor',
              text: `Tools to license your data.`,
              content: '/images/articles/creating-a-dataset/dataset1.webp'
          },
          {
              title: 'An intuitive, intelligent and extensible metadata editor',
              text: `
                  <p>Use the GenerativeAI Assistant to verify your data against the spec.</p>
              `,
              content: '/images/guide-working-with-a-crate/dataset17.webp'
          },
      ]"
  />

  <!-- <InfoPanelComponent  layout="rtl">
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
  </InfoPanelComponent> -->

<InfoPanelCarouselComponent
      layout="rtl"
      :panels="[
          {
              title: 'Create your own Vocabulary',
              text: `
                  <p>Choose from schema.org, MODS, Premis-3, Records in Context - Ontology and SKOS in addition
          to defining your own classes and properties.</p>
              `,
              content: '/images/guide-vocabulary/vocab1.webp'
          },
          {
              title: 'Create your own Vocabulary',
              text: 'Define the classes you need to describe your domain.',
              content: '/images/guide-vocabulary/vocab3.webp'
          },
          {
              title: 'Create your own Vocabulary',
              text: 'Specify their properties.',
              content: '/images/guide-vocabulary/vocab7.webp'
          },
          {
              title: 'Create your own Vocabulary',
              text: 'Configure how they should be displayed by Describo.',
              content: '/images/guide-vocabulary/vocab12.webp'
          },
          {
              title: 'Create your own Vocabulary',
              text: 'And publish your Vocabulary online.',
              content: '/images/articles/creating-a-dataset/dataset11.webp'
          },
      ]"
      documentation="/docs/guide/vocabulary.html"
  />

  <InfoPanelComponent>
    <template #title>Linked data - as a table</template>
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

  <!-- <InfoPanelComponent>
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
  </InfoPanelComponent> -->

<InfoPanelCarouselComponent
      :panels="[
          {
              title: 'Text extraction and Named Entity Recognition',
              text: `
                View your images alongside a powerful, yet easy to use transcription editor.
              `,
              content: '/images/guide-transcribing-content/transcribe6.webp'
          },
          {
              title: 'Text extraction and Named Entity Recognition',
              text: `
                Everything you mark up in the text will also be written into the RO-Crate.
              `,
              content: '/images/guide-transcribing-content/transcribe7.webp'
          },
          {
              title: 'Text extraction and Named Entity Recognition',
              text: `
                Engage the GenerativeAI Assistant to further analyse the text. Edit the metadata
                for the file directly.
              `,
              content: '/images/guide-transcribing-content-assistant/assistant1.webp'
          },
      ]"
      documentation="/docs/guide/transcribing-content.html"
  />

  <!-- <InfoPanelComponent  layout="rtl">
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
  </InfoPanelComponent> -->

<InfoPanelCarouselComponent
      layout="rtl"
      :panels="[
          {
              title: 'GenerativeAI powered e-Discovery',
              text: `
               Interrogate sets of files / folders to extract the themes and narratives that you
              might want to describe. Easily comprehend large swathes of data to find the insights
              hiding in the content. Use the assistant to provide different perspectives on what
              you find in order to test hypotheses and ideas.
              `,
              content: '/images/guide-discover/discover3.webp'
        },
           {
              title: 'GenerativeAI e-Discovery',
              text: `
                Download your conversation as a PDF.
              `,
              content: '/images/articles/taytay-sings-the-budget-blues/budget-conversation.pdf'
          },
      ]"
      documentation="/docs/guide/assistant-supported-discovery.html"
  />

  <!-- <InfoPanelComponent>
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
  </InfoPanelComponent> -->

<InfoPanelCarouselComponent
      :panels="[
          {
              title: 'Visualisation',
              text: `
              Describo connects your information in meaningful ways that help you explore and understand your data thoroughly. Using Describo's tools, you can quickly analyze large amounts of information that would normally take much longer to process.
              `,
              content: '/images/tour/desktop15.webp'
          },
          {
              title: 'Visualisation',
              text: `
                Manipulate the size and colour of nodes of interest to reveal the features.
              `,
              content: '/images/guide-visualise/visualise4.webp'
          },
          {
              title: 'Visualisation',
              text: `
                Select a node and visualise the connections. Connected files can be viewed directly.
              `,
              content: '/images/guide-visualise/visualise8.webp'
          },
      ]"
      documentation="/docs/guide/visualising-the-structure.html"
  />

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
  import DescriboFeatures from './vue-components/DescriboFeatures.vue'
  import InfoPanelCarouselComponent from './vue-components/InfoPanelCarousel.vue'
</script>
