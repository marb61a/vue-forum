<template>
  <div>
    <h1>
      {{thread.title}}
      <router-link>

      </router-link>
    </h1>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'
import {countObjectProperties} from '@/utils'
import asyncDataStatus from '@/mixins/asyncDataStatus'

export default {
  components: {
    PostList,
    PostEditor
  },
  mixins: [asyncDataStatus],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      authUser: 'auth/authUser'
    }),
    thread () {
      return this.$store.state.threads.items[this.id]
    },
    repliesCount () {
      return this.$store.getters['threads/threadRepliesCount'](this.thread['.key'])
    },
    user () {
      return this.$store.state.users.items[this.thread.userId]
    },
    contributorsCount () {
      return countObjectProperties(this.thread.contributors)
    },
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(this.$store.state.posts.items)
        .filter(post => postIds.includes(post['.key']))
    }
  },
  methods: {
    ...mapActions('threads', ['fetchThread']),
    ...mapActions('users', ['fetchUser']),
    ...mapActions('posts', ['fetchPosts'])
  },
  created () {
    // Fetch the thread
    this.fetchThread({id: this.id})
      .then(thread => {
        // Fetch user

      })
      .then(posts => {

      })
      .then(() => { this.asyncDataStatus_fetched() })
  }
}
</script>
