<template>
  <div class="flex-grid justify-center">
    <div class="col-2">
      <form @submit.prevent="signIn" class="card card-form">
        <h1 class="text-center">Login</h1>
        <div class="form-group">
          <label for="email">Email</label>
          <input

          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input

          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { required, email, minLength } from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
        form: {
          email: null,
          password: null
        }
      }
    }
  }
</script>
