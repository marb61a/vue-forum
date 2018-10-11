<template>
  <div class="flex-grid justify-center">
    <div class="col-2">
      <form @submit.prevent="register" class="card card-form">
        <h1 class="text-center">Register</h1>
        <div class="form-group">
          <label for="name">Full Name</label>
          <input

          >
          <template>
            <span></span>
          </template>
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
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
</style>
