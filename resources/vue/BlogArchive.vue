<template>
  <div class="h-100">
    <input class="input-reset ba w-100 pa2 mb3" type="search" v-model="query" autofocus placeholder="Cari judul artikel">

    <div v-for="item in result" v-show="query">
      <a class="db black-80 no-underline pv2" :href="item.url">
        <section class="flex items-center">
          <div class="w2 tc flex-none" v-if="item.featured">⭐️</div>
          <h2 class="rubik f5 lh-title ma0 truncate normal flex-auto mr3">{{ item.title }}</h2>
          <div class="flex-none w3 tr f7">{{ new Date(item.published_at).toLocaleDateString() }}</div>
        </section>
      </a>
    </div>

    <div v-for="item in response.posts" v-show="!query">
      <a class="db black-80 no-underline pv2" :href="item.url">
        <section class="flex items-center">
          <div class="w2 tc flex-none" v-if="item.featured">⭐️</div>
          <h2 class="rubik f5 lh-title ma0 truncate normal flex-auto mr3">{{ item.title }}</h2>
          <div class="flex-none w3 tr f7">{{ new Date(item.published_at).toLocaleDateString() }}</div>
        </section>
      </a>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Fuse from 'fuse.js'

  export default {
    data () {
      return {
        fuse: '',
        query: '',
        response: {
          meta: '',
          posts: []
        }
      }
    },
    computed: {
      result () {
        return this.fuse.search(this.query)
      }
    },
    created () {
      this.fetchPosts()
    },
    methods: {
      fetchPosts () {
        axios.get(window.ghost.url.api('posts', { limit: 'all', filter: '' }))
             .then(response => {
               this.response = response.data
               this.fuse = new Fuse(this.response.posts, {
                 shouldSort: true,
                 threshold: 0.6,
                 location: 0,
                 distance: 100,
                 maxPatternLength: 32,
                 minMatchCharLength: 1,
                 keys: ['title']
               })
             })
             .catch(e => {
               window.console.error(e)
             })
      }
    }
  }
</script>
