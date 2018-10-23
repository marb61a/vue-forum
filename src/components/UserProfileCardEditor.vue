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
          v-model="activeUser.name"
          @blur="$v.activeUser.name.$touch()"
          type="text"
          placeholder="Full Name"
          class="form-input text-lead"
        >
        <template  v-if="$v.activeUser.name.$error">
          <span v-if="!$v.activeUser.name.required" class="form-error">
            This is a required field
          </span>
        </template>
      </div>
      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea
          v-model="activeUser.bio"
          class="form-input"
          id="user_bio"
          placeholder="Write a few words about yourself."
        >
        </textarea>
      </div>
      <div class="stats">
        <span>{{userPostsCount}} posts</span>
        <span>{{userThreadsCount}} threads</span>
      </div>
      <hr>
      <div class="form-group">

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
