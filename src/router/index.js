import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';

Vue.use(VueRouter);

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  // 切换新路由，页面默认回到顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
