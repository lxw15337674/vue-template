import {
  get,
  post
} from './axios.js';
export default {
  install(Vue) {
    Vue.prototype.$login = function () {
      Vue.$store.commit('beforeLoginRoute/setRouteName', vue.$route.name);
    };
    Vue.prototype.$get = get;
    Vue.prototype.$post = post;
  },
};
