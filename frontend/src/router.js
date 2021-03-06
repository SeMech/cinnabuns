import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Canteen from './components/Canteen.vue';
import Admin from './components/Admin.vue';

Vue.use(Router);

/**
 * routing library for Vue.js
 */

export default new Router({
  mode: 'history',
  routes: [
    /**
     * route for home page
     */
    {
      path: '/',
      name: 'home',
      component: Home
    },
    /**
     * route for canteen page
     */
    {
      path: '/canteen/:id',
      name: 'canteen',
      component: Canteen
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})