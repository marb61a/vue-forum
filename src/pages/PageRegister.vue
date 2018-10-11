<template>
  <div class="flex-grid justify-center">
    <div class="col-2">
      <form @submit.prevent="register" class="card card-form">
        <h1 class="text-center">Register</h1>
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            v-model="form.name"
            @blur="$v.form.name.$touch()"
            id="name"
            type="text"
            class="form-input"
          >
          <template v-if="$v.form.name.$error">
            <span v-if="!$v.form.name.required" class="form-error">
              This is a required field
            </span>
          </template>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            v-model.lazy="form.username"
            @blur="$v.form.username.$touch()"
            id="username"
            type="text"
            class="form-input"
          >
        </div>
        <div class="form-actions">
          <button type="submit" class="btn-blue btn-block">
            Register
          </button>
        </div>
      </form>
      <div text-center push-top>
        <button>

        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          name: null,
          username: null,
          email: null,
          password: null,
          avatar: null
        }
      }
    },
    validations: {
      form: {
        name: {
          required
        },
        username: {
          required,
          unique: uniqueUsername
        },
        email: {
          required,
          email,
          unique: uniqueEmail
        },
        password: {
          required,
          minLength: minLength(6)
        },
        avatar: {
          url,
          supportedImageFile,
          responseOk
        }
      }
    },
    methods: {
      register () {

      }
    }
  }
</script>

<style scoped>
</style>
