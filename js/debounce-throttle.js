// https://zh.javascript.info/task/debounce

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

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

function sum(a, b) {
  console.log(a + b);
}

const sumFn = throttle(sum, 1);

for (let i = 0; i < 10000; i++) {
  sumFn(i, i + 1);
}
