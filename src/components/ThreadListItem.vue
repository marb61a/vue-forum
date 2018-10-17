<template>
  <div v-if="thread && user" class="thread">
    <div>
      <p>
        <router-link>
          {{thread.title}}
        </router-link>
      </p>
      <p class="text-faded text-xsmall">

      </p>
    </div>
    <div class="activity">
      <p class="replies-count">

      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thread: {
      required: true,
      type: Object
    }
  },
  computed: {

  }
}
</script>
