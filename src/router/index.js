import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/PageHome'
import Forum from '@/pages/PageForum'
import Profile from '@/pages/PageProfile'
import Register from '@/pages/PageRegister'
import SignIn from '@/pages/PageSignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum
    },
    {
      path: '/me',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
