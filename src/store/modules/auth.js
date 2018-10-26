import firebase from 'firebase'

export default {
  namespaced: true,
  state: {
    authId: null,
    unsubscribeAuthObserver: null
  },
  getters: {
    authUser (state, getters, rootState) {
      return state.authId ? rootState.users.items[state.authId] : null
    }
  },
  actions: {
    initAuthentication ({dispatch, commit, state}) {
      return new Promise((resolve, reject) => {
        // If already listening unsubscribe observer
        if (state.unsubscribeAuthObserver) {
          state.unsubscribeAuthObserver()
        }

        const unsubscribe = firebase.auth()
          .onAuthStateChanged(user => {
            console.log('User has changed')
            if (user) {
              dispatch('fetchAuthUser')
                .then(dbUser => resolve(dbUser))
            } else {
              resolve(null)
            }
          })

        commit('setUnsubscribeAuthObserver', unsubscribe)
      })
    },
    registerUserWithEmailAndPassword ({dispatch}, {
      email, name, username, password, avatar = null
    }) {
      return firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          return dispatch('users/createUser', {
            id: user.uid, email, name, username, password, avatar
          }, {root: true})
        })
        .then(() => dispatch('fetchAuthUser'))
    },
    signInWithEmailAndPassword () {

    },
    signInWithGoogle ({dispatch}) {

    },
    signOut ({commit}) {
      return firebase.auth().signOut()
        .then(() => {
          commit('setAuthId', null)
        })
    },
    fetchAuthUser ({dispatch, commit}) {

    }
  },
  mutations: {
    setAuthId (state, id) {
      state.authId = id
    },
    setUnsubscribeAuthObserver (state, unsubscribe) {
      state.unsubscribeAuthObserver = unsubscribe
    }
  }
}
