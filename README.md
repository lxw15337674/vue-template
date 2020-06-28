# vue 架子

## 实现功能

- vuex
  - 增加 vuex 持久化（默认全部缓存，利用[vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate))
  - vuex 自动导入（利用[require.context()](https://webpack.js.org/guides/dependency-management/#require-context))
- vue-router
  - 根据环境判断是否懒加载（利用[DefinePlugin 和 require.context()](https://github.com/lxw15337674/blog/blob/master/%E8%84%9A%E6%89%8B%E6%9E%B6/%E7%BB%84%E4%BB%B6%E6%A0%B9%E6%8D%AE%E7%8E%AF%E5%A2%83%E6%87%92%E5%8A%A0%E8%BD%BD.md)
- webpack
  - 配置 stylus 全局变量
  - 集成 ESlint、prettier
  - 集成 typescript
  - 集成速度分析
  - 生产环境
    - 暴露当前环境
    - 开启 gzip 压缩
    - 单独打包第三方模块
  - 开发环境
    - 暴露当前环境
- 集成 elementUI
- 集成 axios
  - axios 错误封装
