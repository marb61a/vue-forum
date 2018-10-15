<template>
  <div class="forum-listing">
    <div class="forum-details">
      <router-link>
        {forum.name}
      </router-link>
      <p>{{forum.description}}</p>
    </div>
    <div class="threads-count">
      <p class="count">{{threadsCount}}</p>
      {{threadsCount === 1 ? 'thread' : 'threads'}}
    </div>
    <div class="last-thread">
      <!-- Todo -->

    </div>
  </div>
</template>

<script>
import {countObjectProperties} from '@/utils'

export default {
  props: {
    forum: {
      required: true,
      type: Object
    }
  },
  computed: {
    threadsCount () {
      return countObjectProperties(this.forum.threads)
    }
  }
}
</script>

<style scoped>

</style>
