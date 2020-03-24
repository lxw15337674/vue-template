export default {
  debounce(fun, time) {
    var _that = this;

    /**
     * 初始化函数属性
     * 舍弃对象属性，防止外部修改属性值
     * debounce_init: 0,debounce_count: 0,
     */
    var init = function() {
      _that.debounce.init = true;
      _that.debounce.debounce_init = 0;
      _that.debounce.debounce_count = 0;
    };

    if (!_that.debounce.init) {
      init();
    }
    _that.debounce.debounce_count = _that.debounce.debounce_count + 1; // 模拟进栈
    setTimeout(function() {
      _that.debounce.debounce_count = _that.debounce.debounce_count - 1; // 模拟出栈
      if (_that.debounce.debounce_count === _that.debounce.debounce_init) {
        fun();
        _that.debounce.init = false;
      }
    }, time);
  },
};
