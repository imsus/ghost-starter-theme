const { mix } = require('laravel-mix')
const WorkboxPlugin = require('workbox-webpack-plugin')

mix.js('resources/js/app.js', 'assets/js')
   .stylus('resources/styl/app.styl', 'assets/css')
   .extract(['barba.js', 'vue', 'axios', 'vue-async-computed', 'fuse.js', 'lodash'])
   .webpackConfig({
     plugins: [
       new WorkboxPlugin({
         globPatterns: [
           './assets/css/*.css',
           './assets/js/*.js'
         ],
         swDest: './assets/service-worker.js'
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
