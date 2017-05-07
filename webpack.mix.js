const { mix } = require('laravel-mix')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

mix.copy('node_modules/tachyons/css/tachyons.min.css', 'assets/css/tachyons.min.css')
   .stylus('resources/styl/app.styl', 'assets/css')
   .js('resources/js/app.js', 'assets/js')
   .extract(['barba.js', 'vue', 'axios', 'vue-async-computed', 'fuse.js', 'lodash'])
   .sourceMaps()
   .webpackConfig({
     plugins: [
       new SWPrecacheWebpackPlugin({
         filepath: 'assets/service-worker.js',
         staticFileGlobs: [
           './assets/img/**.*',
           './assets/css/**/*.css',
           './assets/js/**/*.js'
         ],
         stripPrefix: '.'
       })
     ]
   })
   .browserSync({
     proxy: 'localhost:2368',
     files: [
       '*.hbs',
       'resources/**/*.js',
       'resources/**/*.styl'
     ],
     notify: false
   })
   .disableNotifications()
