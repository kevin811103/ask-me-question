
module.exports = {
  mode: 'universal',
  server: {
    port: 5914, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: "zh-Hant"
      // 不設定會一直跑出翻譯
      // https://www.injerry.com/blog-view.php?PID=5&sn=125
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: "~/components/loading.vue",
  /*
  ** Global CSS
  */
  css: [
    '~/assets/transition.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // ['@nuxtjs/google-adsense', {
    //   id: 'ca-pub-4332619546942595'
    // }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    // "/api/": "http://icanhelpyou.ml:5914/", //  在打api 的時候會變成  https://opendata.cwb.gov.tw/api/
    "/authinit/": {
      target:  "http://icanhelpyou.ml:5914/api/",
      pathRewrite: { "^/authinit/": "" ,
      "secure": false,
      "changeOrigin": true} // 這邊會變成    https://opendata.cwb.gov.tw/   會自己將authinit 取代掉
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  //serverMiddleware
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ],

}
