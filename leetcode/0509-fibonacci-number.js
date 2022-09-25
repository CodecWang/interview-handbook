/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // using recursion
  // if (n === 0 || n === 1) {
  //   return n;
  // }
  // return fib(n - 1) + fib(n - 2);

  // using dp
  // const dp = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }
  // return dp[n];

  // using dp, optimized
  if (n === 0) return 0;

  let p = 0;
  let q = 1;
  for (let i = 2; i <= n; i++) {
    const sum = p + q;
    p = q;
    q = sum;
  }
  return q;
};
