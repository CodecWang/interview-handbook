/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map1 = new Map();

  for (const n of nums1) {
    map1.set(n, map1.get(n) ? map1.get(n) + 1 : 1);
  }

  const res = [];
  for (const n of nums2) {
    if (map1.get(n)) {
      res.push(n);
      map1.set(n, map1.get(n) - 1);
      if (map1.get(n) < 0) {
        res.pop();
      }
    }
  }

  return res;
};

console.log(intersect([1, 2, 2, 1], [2]));
