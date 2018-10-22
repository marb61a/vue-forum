<template>
  <div class="col-3 push-top">
    <div class="profile-card">
      <p class="text-center">
        <img :src="user.avatar" alt="" class="avatar-xlarge img-update">
      </p>
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

  },
  valiations: {
    activeUser : {
      name: {
        required
      },
      username: {
        required,
        unique () {

        }
      }
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
