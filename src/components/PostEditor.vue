<template>
  <form @submit.prevent="save">
    <div class="form-actions">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="form-input"
        v-model="text"
      >
      </textarea>
    </div>
    <div class="form-group">

    </div>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: {
    threadId: {
      required: false
    },
    post: {
      type: Object
    }
  },
  data () {

  }
}
</script>

<style scoped>

</style>
