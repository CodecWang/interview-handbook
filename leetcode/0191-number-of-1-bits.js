/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // let count = 0;
  // for (let i = 0; i < 32; i++) {
  //   if ((n & (1 << i)) !== 0) count++;
  // }
  // return count;

  // 利用 (n & n - 1) 会将 n 的最低位 1 变成 0
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
};
