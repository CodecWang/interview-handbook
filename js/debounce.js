function debounce(fn, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

function demo(e, content) {
  console.log(e, content);
}

const testDebounce = debounce(demo, 1000);
document.onmousemove = function (e) {
  testDebounce(e, "debounce");
};
