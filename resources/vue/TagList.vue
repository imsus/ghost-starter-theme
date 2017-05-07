<template>
  <div>
    <div class="mb3 mr3-l w-100 dib pa2 ba" v-for="tag in response.tags">
      <div class="flex justify-between">
        <a class="no-underline blue" :href="`/tag/${tag.slug}`">{{ tag.name }}</a><span>x{{ tag.count.posts }}</span>
      </div>
      <p class="lh-copy f7 mt2 mb0" v-if="tag.description">{{ tag.description }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        response: {
          meta: '',
          tags: []
        }
      }
    },
    created () {
      this.fetchTags()
    },
    methods: {
      fetchTags () {
        axios.get(window.ghost.url.api('tags', { include: 'count.posts', limit: 'all' }))
             .then(response => {
               this.response = response.data
             })
             .catch(e => {
               window.console.error(e)
             })
      }
    }
  }
</script>
