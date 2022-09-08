// 类型判断
// typeof 与 instanceOf 区别，为什么不用 instanceOf 判断类型？
Object.prototype.toString.call([1, 2, 3]);

// 用 apply 计算数组的最大值
console.log(Math.max(...[2, 3, 1]));
console.log(Math.max.apply(null, [2, 3, 1]));

// 不用临时变量交换两个变量的值
let a = 3;
let b = 4;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

// 实现累加函数 add(1)(2)(3)
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// 直接柯里化
function curry(fn) {
  console.log(fn.length);
}

function add2(...args) {
  return args.reduce((a, c) => a + c);
}

console.log(add(1)(2)(3));
console.log(curry(add2));
