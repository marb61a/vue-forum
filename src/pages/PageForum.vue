<template>
  <div v-if="asyncDataStatus_ready" class="forum-wrapper">
    <div class="col-full push-top">

    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import ThreadList from '@/components/ThreadList'

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

  }
}
</script>

<style scoped>
  .forum-wrapper {
    width: 100%;
  }
</style>
