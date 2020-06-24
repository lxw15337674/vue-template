import { get, post } from './axios/index.js';
export default {
  install(Vue) {
    Vue.prototype.$get = get;
    Vue.prototype.$post = post;
  },
};
