import {createRouter, createWebHashHistory} from 'vue-router';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Index from '@/components/bookshelf/Index';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'login',
      path: '/',
      component: Login
    },
    {
      name: 'register',
      path: '/register',
      component: Register
    },
    {
      name: 'index',
      path: '/index',
      component: Index
    }
  ]
});