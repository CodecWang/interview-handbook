function throttle(fn, delay) {
  let timer;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

function demo(e, content) {
  console.log(e, content);
}
// 节流函数
const testThrottleFn = throttle(demo, 1000);
// 节流函数
document.onmousemove = function (e) {
  testThrottleFn(e, "throttle");
};
