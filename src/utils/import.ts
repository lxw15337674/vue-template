/**
 * 不同环境下执行不同的导入方式，用于vue-router组件导入。
 * - 在生产环境中才使用懒加载，加快首屏开启速度。
 - 在开发环境不使用懒加载，加快编译速度。
 *
 * @param { string} environment 编译环境
 * @return {function} 导入函数
 */

export function _import(environment: 'development' | 'production'): Function {
  if (environment === 'development') {
    return (file: string) => {
      require('@/views/' + file + '.vue').default;
    };
  } else {
    return (file: string) => () => import('@/views/' + file + '.vue');
  }
}
