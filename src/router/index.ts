import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHistory('/YAVBT/'),
  routes
});

export default router;
