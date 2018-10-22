<template>
  <div class="col-3 push-top">
    <div class="profile-card">
      <p class="text-center">
        <img :src="user.avatar" alt="" class="avatar-xlarge">
      </p>
      <h1 class="title">
        {{user.username}}
      </h1>
      <p class="text-name">
        {{user.name}}
      </p>
      <p class="text-justify">
        <span v-if="user.bio">{{user.bio}}</span>
        <span v-else>No bio specified.</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
