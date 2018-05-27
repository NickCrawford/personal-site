module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nick Crawford',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `I'm a web designer and developer based in Akron, Ohio. Available to complete contract work. Formerly at DeepHire, Remesh and Hacksu. Currently working on my own startup.` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/flickity@2/dist/flickity.min.css' },
    ]
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // SCSS file in the project
    '@/assets/main.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~plugins/fullstory.js', ssr: false },
    { src: '~/plugins/flickity.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['buttercms', 'vue-flickity'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
