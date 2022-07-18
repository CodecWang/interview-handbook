/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let count = 0;
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      count++;
      set.delete(num);
    } else set.add(num);
  }

  return [count, set.size];
};
