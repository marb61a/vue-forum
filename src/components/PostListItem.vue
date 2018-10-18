<template>
  <div v-if="post && user" class="post">
    <div class="user-info">
      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="">
      </a>
    </div>
  </div>
</template>

<script>
import PostEditor from './PostEditor'

export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  components: {
    PostEditor
  },
  data () {
    return {
      editing: false
    }
  },
  computed: {
    user () {

    }
  }
}
</script>

<style scoped>

</style>
