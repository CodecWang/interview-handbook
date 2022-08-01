/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  // let ans = [];
  // for (let i = 0; i < n; i++) {
  //   if (i === n - 1 && i % 2 !== 0) ans.push("b");
  //   else ans.push("a");
  // }
  // return ans.join("");

  // 更简洁的写法：
  if (n % 2 === 1) return "a".repeat(n);
  return "a".repeat(n - 1) + "b";
};
