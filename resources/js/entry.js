import Vue from 'vue'
import VueAsyncComputed from 'vue-async-computed'

import TagList from '../vue/TagList.vue'
import BlogArchive from '../vue/BlogArchive.vue'

Vue.use(VueAsyncComputed)

export default {
  init () {
    new Vue({
      el: '#app',
      components: {
        TagList, BlogArchive
      }
    })
  }
}
