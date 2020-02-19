const Prismic = require('prismic-javascript')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nick Crawford',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: `I'm an independent graphic designer and web developer currently living in Brooklyn, NY. I create products & brands that are fun, user-friendly, and good for the world.`
      },
      {
        property:"og:title",
        content: "Nick Crawford"
      },
      {
        property:"og:description",
        content: "I'm a founder/web designer in Brooklyn, NY making products that are good for the world."
      },
      {
        property: "og:image",
        content:"https://nickcrawford.design/social-preview.jpg"
      },
      {
        property:"og:url",
        content:"https://nickcrawford.design"
      },
      {
        name:"twitter:card",
        content:"summary_large_image"
      },
      {
        property:"og:site_name",
        content:"Nick Crawford"
      }, 
      {
        name:"twitter:image:alt",
        content="Nick Crawford. Web developer, designer, and founder."
      }, 
      {
        name: "twitter:site",
        content:"@_NickCrawford"
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel:"manifest",
        href:"/site.webmanifest"
      },
      {
        rel:"icon",
        type:"image/png",
        sizes:"16x16",
        href:"/favicon-16x16.png"
      },
      {
        rel:"icon",
        type:"image/png",
        sizes:"32x32",
        href:"/favicon-32x32.png"
      },
      {
        rel:"apple-touch-icon",
        
        sizes:"180x180",
        href:"/apple-touch-icon.png"
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Prompt:800|Open+Sans:400|Zilla+Slab:400'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles/reset.css', '~/assets/styles/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/svg',
    '@nuxtjs/prismic',
    '@nuxtjs/netlify-files'
  ],

  /*
   ** Module Configs
   */
  prismic: {
    preview: false, // default value
    endpoint: 'https://stirfry.cdn.prismic.io/api/v2'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  generate: {
    routes: function() {
      return Prismic.getApi('https://stirfry.prismic.io/api/v2', {})
        .then(function(api) {
          return api.query(Prismic.Predicates.at('document.type', 'project'), {
            /* options */
          })
        })
        .then(function(response) {
          // console.log("Prismic response", response);
          return response.results.map(project => {
            console.log('Prismic uid', project.uid)
            return '/project/' + project.uid
          })
        })
    }
  }
}
