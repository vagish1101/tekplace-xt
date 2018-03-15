import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CreateConfession from '@/components/CreateConfession'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/create',
      name: 'CreateConfession',
      component: CreateConfession
    }
  ]
})
