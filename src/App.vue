<template>
  <div id="app">
    <TheNavbar/>
    <div class="container">
      <router-view />
      <AppSpinner />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import AppSpinner from '@/components/AppSpinner'

export default {
  components: {
    TheNavbar,
    AppSpinner
  },
  data () {
    return {
      showPage: false
    }
  },
  methods: {
    pageReady () {
      this.showPage = true
    }
  },
  created () {

  }
}
</script>

<style>
  @import "assets/css/style.css";

</style>
