/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // if (n === 0) return [0];

  // let last = 1;
  // let ans = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   if (last * 2 === i) {
  //     last *= 2;
  //     ans.push(1);
  //   } else ans.push(ans[last] + ans[i - last]);
  // }

  // return ans;

  // 利用位运算的更简洁写法
  const ans = new Array(n + 1).fill(0);

  let last = 0;
  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) === 0) last = i;
    ans[i] = ans[i - last] + 1;
  }

  return ans;
};
