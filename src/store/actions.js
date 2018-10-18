import firebase from 'firebase'

export default {
  fetchItem ({state, commit}, {id, emoji, resource}) {
    console.log('fire', emoji, id)

    return new Promise((resolve, reject) => {
      firebase.database().ref()
        .child()
        .once('value', snapshot => {

        })
    })
  },
  fetchItems () {

  }
}
