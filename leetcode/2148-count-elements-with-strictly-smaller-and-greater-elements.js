/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  let min = Infinity;
  let max = -Infinity;

  for (const item of nums) {
    if (item > max) max = item;
    if (item < min) min = item;
  }

  let ans = 0;
  for (const item of nums) {
    if (item > min && item < max) ans++;
  }

  return ans;
};

console.log(countElements([-3, 4]));
