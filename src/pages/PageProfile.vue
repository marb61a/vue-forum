<template>
  <div class="flex-grid">
    <div class="col-7 push-top">
      <div class="profile-header">

      </div>
    </div>
  </div>
</template>

<script>
import asyncDataStatus from '@/mixins/asyncDataStatus'

export default {
  components:{

  },
  mixins: [asyncDataStatus],
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  computed: {

  },
  created () {

  }
}
</script>

<style scoped>

</style>
