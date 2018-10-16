<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link>

      </router-link>
    </h2>
    <ForumList />
  </div>
</template>

<script>
import ForumList from './ForumList'

export default {
  components: {
    ForumList
  },
  props: {
    category: {
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
