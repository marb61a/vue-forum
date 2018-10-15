<template>
  <div v-if="asyncDataStatus_ready" class="forum-wrapper">
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{forum.name}}</h1>
          <p class="text-lead">{{forum.description}}</p>
        </div>
        <router-link
          class="btn-green btn-small"
        >
          Start a thread
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import ThreadList from '@/components/ThreadList'
import asyncDataStatus from '@/mixins/asyncDataStatus'

export default {
  components: {
    ThreadList
  },
  mixins: [],
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {

  },
  methods: {

  },
  created () {

  }
}
</script>

<style scoped>
  .forum-wrapper {
    width: 100%;
  }
</style>
