export function throttle(fn, delay) {
  let timer;
  return (...args) => {
    if (timer) return;
    setTimeout(() => {
      fn(args);
      timer = null;
    }, delay);
  };
}
