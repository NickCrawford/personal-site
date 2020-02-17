<template>
  <div
    class="project-page"
    :style="{
      'background-color': project ? project.background_color : '#f5d6ba',
      color: textColor
    }"
  >
    <!-- <header-bar :fixed="false" :colorPalette="headerColorPalette"></header-bar> -->
    <div class="hero-container">
      <div v-if="project">
        <div class="heading-container container">
          <h1 class="title is-2">{{ $prismic.asText(project.title) }}</h1>
          <h2 class="subtitle is-3">{{ $prismic.asText(project.subtitle) }}</h2>
        </div>

        <div class="hero-image-container">
          <prismic-image
            :field="layer.image"
            v-for="(layer, index) in project.layers"
            :key="`layer-${index}`"
            :style="{ 'z-index': layer.depth }"
            class="hero-image"
            :class="{ background: layer.depth <= 0 }"
          />
        </div>
      </div>
    </div>

    <div v-if="project">
      <section v-for="(slice, index) in project.body" :key="'slice-' + index">
        <client-needs
          v-if="slice.slice_type === 'client_needs'"
          :services="project.services"
          :link="slice.primary.link_to"
        >
          <template>
            <prismic-rich-text :field="slice.primary.client_needs" />
          </template>
          <template slot="link_to" v-if="slice.primary.link_to.url">
            <p>
              <a :href="slice.primary.link_to.url" class="link-style">
                {{
                $prismic.asText(slice.primary.link_cta) ||
                'View the project live'
                }}
              </a>
            </p>
          </template>
        </client-needs>

        <two-column-sticky
          v-else-if="slice.slice_type === 'two-column-sticky'"
          :class="{ 'right-align': slice.primary.text_alignment == 'right' }"
        >
          <template slot="description">
            <prismic-rich-text :field="slice.primary.description" />
          </template>
          <template v-for="(item, index) in slice.items">
            <prismic-image :field="item.image" :key="'photo-item-' + index" />
          </template>
        </two-column-sticky>

        <large-media v-else-if="slice.slice_type === 'large_media'">
          <prismic-image :field="slice.primary.image" />
        </large-media>
      </section>
      <!-- <project-page-footer></project-page-footer> -->
    </div>
  </div>
</template>

<script>
// import HeaderBar from '@/components/HeaderBar.vue'
// import ProjectPageFooter from '@/components/Portfolio/ProjectPageFooter.vue'

import ClientNeeds from '@/components/Portfolio/slices/ClientNeeds.vue'
import TwoColumnSticky from '@/components/Portfolio/slices/TwoColumnSticky.vue'
import LargeMedia from '@/components/Portfolio/slices/LargeMedia.vue'

const hexToDec = function(hexString) {
  const decString = hexString.replace(/[^a-f0-9]/gi, '')
  return parseInt(decString, 16)
}

export default {
  name: 'ProjectPage',

  layout: 'project',

  components: {
    // HeaderBar,
    // ProjectPageFooter,
    ClientNeeds,
    TwoColumnSticky,
    LargeMedia
  },

  head() {
    return {
      title: this.$prismic.asText(this.project.title) + 'by Nick Crawford',
      link: [
        {
          rel: 'canonical',
          href: `https://nickcrawford.design${this.$prismic.linkResolver(
            this.document
          )}`
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$prismic.asText(this.project.subtitle)
        }
      ]
    }
  },

  async asyncData({ $prismic, error, params }) {
    console.log(params.uid)
    let document

    try {
      let ref = $prismic.api.refs.find(ref => ref.id === 'master').ref
      document = await $prismic.api.getByUID('project', params.uid, { ref })
    } catch (err) {
      console.error(err)
    }

    console.log('doc', document)

    if (document) {
      return { document, project: document.data }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  computed: {
    textColor() {
      let lightColor = '#FFFFFF',
        darkColor = '#000000'
      if (!this.project || !this.project.background_color) return lightColor

      let hex = this.project.background_color

      let red = hexToDec(hex.substr(1, 2)),
        green = hexToDec(hex.substr(3, 2)),
        blue = hexToDec(hex.substr(5, 2))

      var contrast = Math.sqrt(
        red * red * 0.241 + green * green * 0.691 + blue * blue * 0.068
      )

      if (contrast > 130) {
        this.headerColorPalette = 'gray'
        return darkColor
      }
      return lightColor
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables.scss';

.project-page {
  position: relative;
  width: 100%;
  max-width: 100vw;

  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: $light;
}

header {
  position: absolute;
}

.hero-container {
  position: relative;
}

.heading-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  // transform: translateY(33%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: left;
  z-index: 99;

  * {
    background-color: $darker;
    color: white;
    padding: 0.5rem;
    z-index: 10;
    transform: translate(0, 0);
  }

  font-size: 0.75em;

  @media screen and (min-width: $md-bp) {
    font-size: 1em;
  }
}

.subtitle {
  margin-top: 0;
}

.link-style {
  color: inherit;
}

.hero-image-container {
  position: relative;
  min-height: 100vh;
  background-color: $darker;
}

.hero-image {
  position: absolute;
  top: 5rem;
  bottom: 5rem;
  left: 0;

  width: 100%;
  height: calc(100% - 10rem);
  object-fit: contain;
}

.hero-image.background {
  top: 0;
  height: 100%;
  object-fit: cover;
}

section {
  width: 100%;
  margin-bottom: 4rem;
}

section:last-child {
  margin-bottom: 0;
}

.container {
  max-width: 82rem;
  padding: 1rem 2rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: $md-bp) {
    padding: 2rem 4rem;
  }
}
</style>
