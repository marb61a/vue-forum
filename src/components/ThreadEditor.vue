<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <label for="thread_title">Title:</label>
      <input
        v-model="form.title"
        @blur="$v.form.title.$touch()"
        type="text"
        id="thread_title"
        class="form-input"
        name="title"
      >
      <template>

      </template>
    </div>
    <div class="form-group">

    </div>
  </form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      form: {
        title: this.title,
        text: this.text
      }
    }
  },
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(10)
      },
      text: {
        required,
        minLength: minLength(40)
      }
    }
  },
  computed: {
    isUpdate () {
      return !!this.title
    }
  },
  methods: {
    save () {

    }
  }
}
</script>

<style scoped>

</style>
