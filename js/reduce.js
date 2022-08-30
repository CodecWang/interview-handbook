// 注意不要写成箭头函数
Array.prototype.reduce = function (fn, initValue) {
  let data = this;
  let pre = initValue || data[0];
  let i = initValue ? 0 : 1;

  for (i; i < data.length; i++) {
    pre = fn(pre, data[i], i, data);
  }

  return pre;
};

console.log([1, 2, 3].reduce((p, c) => p + c, 100));
