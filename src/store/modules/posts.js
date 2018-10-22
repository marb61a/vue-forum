import Vue from 'vue'
import firebase from 'firebase'

export default {
  namespaced: true,
  state: {
    items: {}
  },
  actions: {
    createPost ({commit, state, rootState}, post) {
      const postId = firebase.database().ref('posts').push().key
    },
    updatePost ({state, commit, rootState}, {id, text}) {
      return new Promise((resolve, reject) => {

      })
    },
    fetchPost: ({dispatch}, {id}) => dispatch('fetchItem'),
    fetchPosts: ({dispatch}, {ids}) => dispatch('fetchItems')
  },
  mutations: {
    setPost (state, {post, postId}) {
      Vue.set(state.items, postId, post)
    }
  }
}
