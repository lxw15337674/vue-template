import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: () => import('src/views/Home.vue'),
    name: '',
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
