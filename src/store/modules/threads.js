import Vue from 'vue'
import firebase from 'firebase'
import {countObjectProperties} from '@/utils'
import {makeAppendChildToParentMutation} from '@/store/assetHelpers'

export default {
  namespaced: true,
  state: {
    items: {}
  },
  getters: {
    threadRepliesCount: state => id =>
      countObjectProperties(state.items[id].posts) - 1
  },
  actions: {
    createThread ({state, commit, dispatch, rootState}, {text, title, forumId}) {
      return new Promise((resolve, reject) => {
        const threadId = firebase.database().ref('threads').push().key
        const postId = firebase.database().ref('posts').push().key
        const userId = rootState.auth.authId
        const publishedAt = Math.floor(Date.now() / 1000)

        const thread = {
          title, forumId, publishedAt, userId, firstPostId: postId, posts: {}
        }
        thread.posts[postId] = postId
        const post = {text, publishedAt, threadId, userId}
      })
    },
    updateThread ({state, commit, dispatch, rootState}, {title, text, id}) {
      return new Promise((resolve, reject) => {

      })
    }
  },
  mutations: {
    setThread (state, {thread, threadId}) {
      Vue.set(state.items, threadId, thread)
    },
    appendPostToThread: makeAppendChildToParentMutation({
      parent: 'threads', child: 'posts'
    }),
    appendContributorToThread: makeAppendChildToParentMutation({
      parent: 'threads', child: 'contributors'
    })
  }
}
