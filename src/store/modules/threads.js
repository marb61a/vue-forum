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

  },
  actions: {
    createThread () {

    }
  },
  mutations: {
    setThread (state, {thread, threadId}) {
      Vue.set(state.items, threadId, thread)
    }
  }
}
