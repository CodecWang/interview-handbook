/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const res = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  for (const item of set1) {
    if (set2.has(item)) {
      res.push(item);
    }
  }
  return res;
};

console.log(intersection([4, 9, 5], []));
