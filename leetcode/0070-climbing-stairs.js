/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // f(n) = f(n - 1) + f(n - 2)
  let fn1 = 0;
  let fn2 = 0;
  let fn = 1;

  for (let i = 1; i <= n; i++) {
    fn2 = fn1;
    fn1 = fn;
    fn = fn1 + fn2;
  }

  return fn;
};
