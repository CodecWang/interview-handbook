/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  // 我最开始的方法：有点多余
  // const zeros = [];
  // const ones = [];

  // for (const ch of s) {
  //   const defaultZ = zeros[zeros.length - 1] || 0;
  //   const defaultO = ones[ones.length - 1] || 0;
  //   const z = ch === "0" ? defaultZ + 1 : defaultZ;
  //   const o = ch === "0" ? defaultO : defaultO + 1;
  //   zeros.push(z);
  //   ones.push(o);
  // }

  // let ans = -Infinity;
  // const o = ones[ones.length - 1];
  // for (let i = 0; i < s.length - 1; i++) {
  //   ans = Math.max(ans, zeros[i] + (o - ones[i]));
  // }

  // return ans;

  // 我的方法二：
  let count0 = 0;
  let count1 = 0;
  let max = -Infinity;

  for (let i = 0; i < s.length; i++) {
    s[i] === "0" ? count0++ : count1++;
    if (i !== s.length - 1) max = Math.max(count0 - count1, max);
  }

  return count1 + max;
};
