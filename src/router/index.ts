import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '../views/HelloWorld.vue';
import Boilerplate from '../views/BoilerplateExamples.vue';

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/boilerplate-examples',
    name: 'BoilerplateExamples',
    component: Boilerplate
  }
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHistory(),
  routes
});

export default router;
