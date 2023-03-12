import { createRouter, createWebHistory, RouterView } from 'vue-router';
import HomeV from './views/HomeV.vue';
import ProfileV from './views/ProfileV.vue';
import store from './store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeV
    },
    {
      path: '/cars',
      component: RouterView,
      children: [
        { path: '', name: 'cars', component: () => import('./views/CarsV.vue') },
        { path: ':id', name: 'carDetails', component: () => import('./views/CarV.vue') }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileV,
      beforeEnter: (to, from) => {
        if (!store.isAuthenticated) {
          alert('you dont have access')
          return '/'
        }
      }
    }
  ]
});

export default router
