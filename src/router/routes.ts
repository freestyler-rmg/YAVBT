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

export default routes;
