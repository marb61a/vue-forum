import firebase from 'firebase'

export default {
  namespaced: true,
  state: {
    items: {}
  },
  actions: {
    fetchAllCategories ({state, commit}) {
      console.log('all')
      return new Promise((resolve, reject) => {
        firebase.database()
          .ref()
          .once('value', snapshot => {
            const categoriesObject = snapshot.val()
            Object.keys(categoriesObject).forEach(categoryId => {

            })
          })
      })
    },
    fetchCategory: (),
    fetchCategories:()
  }
}
