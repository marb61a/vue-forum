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
  }
}
</script>

<style scoped>

</style>
