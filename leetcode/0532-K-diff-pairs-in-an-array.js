/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const res = new Set();
  const visited = new Set();

  for (const num of nums) {
    if (visited.has(num + k)) {
      res.add(num);
    }
    if (visited.has(num - k)) {
      res.add(num - k);
    }
    visited.add(num);
  }

  return res.size;
};

console.log(findPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3));
