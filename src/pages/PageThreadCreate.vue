<template>
  <div>
    <h1>
      Create a new thread
    </h1>
    <ThreadEditor />
  </div>
</template>

<script>
import ThreadEditor from '@/components/ThreadEditor'
import asyncDataStatus from '@/mixins/asyncDataStatus'

export default {
  components: {
    ThreadEditor
  },
  mixins: [asyncDataStatus],
  props: {
    forumId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      saved: false
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
