import Vue from 'vue'
import {countObjectProperties, removeEmptyProperties} from '@/utils'
import firebase from 'firebase'
import {makeAppendChildToParentMutation} from '@/store/assetHelpers'

export default {
  namespaced: true,
  state: {
    items: {}
  },
  getters: {
    userPosts: (state, getters, rootState) => id => {
      const user = state.items[id]

      if (user.posts) {

      }
    }
  },
  actions: {
    createUser ({state, commit}, {id, email, name, username, avatar = null}) {
      return new Promise((resolve, reject) => {

      })
    }
  },
  mutations: {

  }
}
