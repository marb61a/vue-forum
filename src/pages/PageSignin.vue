<template>
  <div class="flex-grid justify-center">
    <div class="col-2">
      <form @submit.prevent="signIn" class="card card-form">
        <h1 class="text-center">Login</h1>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="form.email"
            @blur="$v.form.email.$touch()"
            id="email"
            type="text"
            class="form-input"
          >
          <template>

          </template>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="form.password"
            @blur="$v.form.password.$touch()"
            id="password"
            type="password"
            class="form-input"
          >
          <template>

          </template>
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
    },
    validations: {
      form: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        }
      }
    },
    methods: {
      signIn () {

      }
    }
  }
</script>
