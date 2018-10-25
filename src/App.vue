<template>
  <div id="app">
    <TheNavbar/>
    <div class="container">
      <router-view
        :key="$route.path"
        v-show="showPage"
        @ready="pageReady"
      />
      <AppSpinner v-show="!showPage"/>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import AppSpinner from '@/components/AppSpinner'
import NProgress from 'nprogress'

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
      NProgress.done()
    }
  },
  created () {

  }
}
</script>

<style>
  @import "assets/css/style.css";
  @import "~nprogress/nprogress.css";

  #nprogress .bar {
    background: #57AD8D;
  }
</style>
