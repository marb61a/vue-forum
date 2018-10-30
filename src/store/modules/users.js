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
        const registeredAt = Math.floor(Date.now() / 1000)
        const usernameLower = username.toLowerCase()
        email = email.toLowerCase()
        const user = {
          avatar, email, name, username, usernameLower, registeredAt
        }

        firebase.database().ref('users')
          .child(id)
          .set(user)
          .then()
      })
    },
    updateUser ({commit}, user) {
      const updates = {
        avatar: user.avatar,
        username: user.username,
        name: user.name,
        bio: user.bio,
        website: user.website,
        email: user.email,
        location: user.location
      }

      return new Promise((resolve, reject) => {

      })
    }
  },
  mutations: {
    setUser (state, {user, userId}) {
      Vue.set(state.items, userId, user)
    },
    appendThreadToUser: makeAppendChildToParentMutation({
      parent: 'users',
      child: 'threads'
    })
  }
}
