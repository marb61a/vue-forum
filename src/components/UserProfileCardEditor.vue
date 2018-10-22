<template>
  <div class="col-3 push-top">
    <div class="profile-card">
      <p class="text-center">
        <img :src="user.avatar" alt="" class="avatar-xlarge img-update">
      </p>
      <div class="form-group">
        <input
          v-model.lazy="activeUser.username"
          @blur="$v.activeUser.username.$touch()"
          type="text"
          placeholder="Username"
          class="form-input text-lead text-bold"
        >
        <template>
          <span>
            This is a required field
          </span>
          <span>
            Username is already taken
          </span>
        </template>
      </div>
      <div class="form-group">
        <input

        >
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { uniqueUsername, uniqueEmail } from '@/utils/validators'

export default {
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      activeUser: {...this.user}
    }
  },
  computed: {
    userThreadsCount () {

    },
    userPostsCount () {

    }
  },
  valiations: {
    activeUser : {
      name: {
        required
      },
      username: {
        required,
        unique (value) {

        }
      },
      email: {
        required,
        email,
        unique (value) {

        }
      }
    }
  },
  methods: {
    save () {
      this.$v.activeUser.$touch()
    },
    cancel () {

    }
  }
}
</script>

<style scoped>

</style>
