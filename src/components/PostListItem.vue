<template>
  <div v-if="post && user" class="post">
    <div class="user-info">
      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="">
      </a>
      <p class="desktop-only text-small">
        {{userThreadsCount}} threads
      </p>
      <p class="desktop-only text-small">
        {{userPostsCount}} posts
      </p>
    </div>
    <div class="post-content">
      <template v-if="!editing">
        <div>
          {{post.text}}
        </div>
        <a
          @click.prevent="editing = true"
          href="#"
          style="margin-left: auto;"
          class="link-unstyled" title="Make a change"
        >
          <i class="fa fa-pencil"></i>
        </a>
      </template>
      <div v-else>
        <PostEditor
          :post="post"
          @save="editing = false"
          @cancel="editing = false"
        >
      </div>
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
