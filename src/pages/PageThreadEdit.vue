<template>
  <div v-if="asyncDataStatus_ready" class="col-full push-top">
    <h1>Editing <i>{{thread.title}}</i></h1>
    <ThreadEditor
      ref="editor"
      :title="thread.title"
      :text="text"
      @save="save"
      @cancel="cancel"
    >
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import ThreadEditor from '@/components/ThreadEditor'
import asyncDataStatus from '@/mixins/asyncDataStatus'

export default {
  components: {
    ThreadEditor
  },
  mixins: [asyncDataStatus],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    thread () {
      return this.$store.state.thread.items[this.id]
    },
    text () {
      const post = this.$store.state.posts.items[this.thread.firstPostId]
      return post ? post.text : null
    },
    hasUnsavedChanges () {
      // Automatically becomes false when thread is updated
      return this.$refs.editor.form.title !== this.thread.title
      || this.$refs.editor.form.text !== this.text
    }
  },
  methods: {
    ...mapActions('threads', ['updateThread', 'fetchThread']),
    ...mapActions('posts', ['fetchPost']),
    save ({title, text}) {
      this.updateThread({
        id: this.id,
        title,
        text
      })
        .then(thread => {
          this.$router.push({name: 'ThreadShow', params: {id: this.id}})
        })
    }
  }
}
</script>

<style scoped>

</style>
