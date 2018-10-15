<template>
  <header class="header" id="header">
    <router-link
      :to="{name: 'Home'}"
      class="logo"
    >
      <img src="">
    </router-link>
    <div class="btn-hamburger">
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <!-- Use .navbar-open to open the nav -->
    <nav class="navbar">
      <ul v-if="user">
        <li class="navbar-user">
          <a @click.prevent="userDropdownOpen = !userDropdownOpen">
            <img class="avatar-small" :src="user.avatar" alt="">
            <span>
              {{user.name}}
              <img
                class="icon-profile"
                src="../assets/img/arrow-profile.svg"
                alt=""
              >
            </span>
          </a>

          <!-- dropdown menu -->
          <div id="user-dropdown" :class="{'active-drop': userDropdownOpen}">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item">

              </li>
              <li class="dropdown-menu-item">

              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    data () {

    }
  }
</script>

<style scoped>
</style>
