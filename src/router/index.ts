import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '../views/HelloWorld.vue';
import Boilerplate from '../views/Boilerplate.vue';

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/boilerplate',
    name: 'Boilerplate',
    component: Boilerplate
  }
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHistory(),
  routes,
});

export default router;