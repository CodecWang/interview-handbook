function curry(fn, ...args) {
  console.log(fn, args, fn.length, args.length);
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2));
