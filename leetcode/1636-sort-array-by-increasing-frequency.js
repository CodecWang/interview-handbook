/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const sorted = nums.sort((a, b) => {
    const fna = map.get(a);
    const fnb = map.get(b);
    return fna === fnb ? b - a : fna - fnb;
  });
  return sorted;
};
