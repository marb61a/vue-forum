<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="form-input"
        v-model="text"
      >
      </textarea>
    </div>
    <div class="form-actions">
      <button v-if="isUpdate" @click.prevent="cancel" class="btn btn-ghost">
        Cancel
      </button>
      <button class="btn-blue">
        {{isUpdate ? 'Update' : 'Submit post'}}
      </button>
    </div>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: {
    threadId: {
      required: false
    },
    post: {
      type: Object,
      validator: obj => {
        const keyIsValid = typeof obj['.key'] === 'string'
        const textIsValid = typeof obj.text === 'string'
        const valid = keyIsValid && textIsValid

        if (!textIsValid) {
          console.error('The post prop object must include a `text` attribute.')
        }
        if (!key.keyIsValid) {
          console.error('The post prop object must include a `.key` attribute.')
        }

        return valid
      }
    }
  },
  data () {
    return {
      text: this.post ? this.post.text : ''
    }
  },
  computed: {
    isUpdate () {
      return !!this.post
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
