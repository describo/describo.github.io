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
                  conforming to the <a href='https://www.researchobject.org/ro-crate/' target='_blank'>Research
                  Object Crate (RO-Crate) specification.</a></p>
              `,
              content: '/images/tour/desktop4.webp'
          },
          {
              title: 'An intuitive, intelligent and extensible metadata editor',
              text: 'Describo puts all of schema.org at your disposal.',
              content: '/images/tour/desktop5.webp'
          },
          {
              title: 'An intuitive, intelligent and extensible metadata editor',
              text: `And it provides controls to create all types of data. From linked entities
              to Geographies; textual inputs to selection from controlled vocabularies and more.`,
              content: '/images/tour/desktop7.webp'
          },
           {
              title: 'An intuitive, intelligent and extensible metadata editor',
              text: `Licensing is a first class action in Describo with easy to use tools to apply
              licenses to your data and metadata.`,
              content: '/images/articles/creating-a-dataset/dataset1.webp'
          },
          {
              title: 'An intuitive, intelligent and extensible metadata editor',
              text: `
                  Describo provides a GenerativeAI Assistant to help you verify your work against the spec.
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
              <p>The Vocabulary is part of the RO-Crate so if you share the crate with others,
              they can continue from where you left off.
              Or, you can just create an RO-crate with a Vocabulary for others
              to use in their projects.</p>
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
              text: `For each class define the properties and their expected data inputs.`,
              content: '/images/guide-vocabulary/vocab7.webp'
          },
          {
              title: 'Create your own Vocabulary',
              text: `Configure how your classes should be displayed by Describo by grouping
              logical inputs together in the way that makes sense for your work.`,
              content: '/images/guide-vocabulary/vocab12.webp'
          },
          {
              title: 'Create your own Vocabulary',
              text: `And finally, publish your Vocabulary online for others when you're done.`,
              content: '/images/articles/creating-a-dataset/dataset11.webp'
          },
      ]"
      documentation="/docs/guide/vocabulary.html"
  />

  <InfoPanelComponent>
    <template #title>Linked data - as a table</template>
    <template #text>
      <p>
        Describo lets you view your data in a clean, organized table format that's as straightforward as a spreadsheet. You can easily search through your information and choose exactly which details you want to display.
      </p>
      <p>
        Quality assurance has never been easier.
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
            <li><font-awesome-icon :icon="faWandSparkles" /> Theme, topic and subject extraction powered by the GenerativeAI Assistant</li>
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
                Creating a knowledge graph is trivial.
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
              title: 'GenerativeAI powered e-Discovery',
              text: `
                Download your conversation as a PDF to save for later or share with others.
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
                Manipulate the visual display of the nodes of interest in order to reveal the features.
              `,
              content: '/images/guide-visualise/visualise4.webp'
          },
          {
              title: 'Visualisation',
              text: `
                Deep dive into connected entities. Select a node and visualise the connections; if there are connected files,
                they can be viewed directly so you don't lose your flow.
              `,
              content: '/images/guide-visualise/visualise8.webp'
          },
      ]"
      documentation="/docs/guide/visualising-the-structure.html"
  />

</div>

<FooterComponent class="mt-6"/>

<el-dialog v-model="dialogVisible" title="" width="80%">
  <div class="text-xl text-center flex flex-col space-y-10 p-20">
    <div class="text-3xl font-bold">The Describo products are no longer being developed or maintained.</div>
    <div>
      It's an unfortunate reality that the environment for academic research software is difficult, and often times, even hostile.
    </div>
    <div>
      Describo Started life as a product to enable users to create RO-Crate metadata for their research data. It went
      through a number of iterations and achieved a small degree of success across the research sector. But
      the funding to create the product was limited and available only in spurts.
    </div>
    <div>
      In 2024, in an effort to develop a recurring funding stream to support the open source RO Crate editor component,
      I invested a significant amount of personal effort to develop Describo into a product for HASS researchers to use
      to work with data as well as describe it. After a decade supporting archivists, historians and linguists I felt
      there was an opportunity to help the 95% who to this day are still being told to find their own support people
      and to run their own server applications. If you've worked in this space you know that this is neither feasible nor realistic for most people and projects.
    </div>
    <div>
      Describo was meant to help with that problem. As
      a personal application it aimed to reduce the friction associated with extracting textual content from images, marking
      up entities and relationships, analysing the network of connections and ultimately producing a well described
      data object.
    </div>
    <div>
      Sadly though, I wasn't able to develop an ongoing funding stream to support this effort so the time has come
      to shut the project down and move on.
    </div>
    <div>
    Marco; Describo Product Lead.
    </div>
  </div>
</el-dialog>

<script setup>
  import { ref, } from 'vue'

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
  import { ElDialog } from 'element-plus'
  import TagLine from "./vue-components/TagLine.vue";
  import DescriboFeatures from './vue-components/DescriboFeatures.vue'
  import InfoPanelCarouselComponent from './vue-components/InfoPanelCarousel.vue'

  const dialogVisible = ref(true)
</script>
