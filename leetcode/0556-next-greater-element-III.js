/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  // 我的思路：借助 https://leetcode.cn/problems/next-permutation/ 思想
  // 较小值尽量靠右，较大值尽量越小
  // const bits = [];
  // let count = null;
  // while (n) {
  //   const digit = n % 10;
  //   if (!count && bits.length && digit < bits[0]) {
  //     count = bits.length;
  //   }
  //   bits.unshift(digit);
  //   n = parseInt(n / 10);
  // }

  // if (!count) return -1;

  // let j = bits.length - 1;
  // let index = bits.length - count - 1;
  // while (j > index && bits[index] >= bits[j]) {
  //   j--;
  // }
  // [bits[j], bits[index]] = [bits[index], bits[j]];

  // let p = index + 1;
  // let q = bits.length - 1;
  // while (p < q) {
  //   [bits[p], bits[q]] = [bits[q], bits[p]];
  //   p++;
  //   q--;
  // }

  // const num = parseInt(bits.join(""));
  // return num > Math.pow(2, 31) - 1 ? -1 : num;

  // 官网方法
  let x = n;
  let cnt = 1;
  for (; x >= 10 && parseInt(x / 10) % 10 >= x % 10; x = parseInt(x / 10)) {
    cnt++;
  }
  console.log(cnt);
};
