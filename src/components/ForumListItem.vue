<template>
  <div class="forum-listing">
    <div class="forum-details">
      <router-link>
        {forum.name}
      </router-link>
      <p>{{forum.description}}</p>
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

  }
}
</script>

<style scoped>

</style>
