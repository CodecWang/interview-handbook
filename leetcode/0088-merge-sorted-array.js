/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let [p1, p2] = [m - 1, n - 1];
  let p = m + n - 1;

  while (p1 >= 0 || p2 >= 0) {
    let temp;
    if (p1 === -1) {
      temp = nums2[p2--];
    } else if (p2 === -1) {
      temp = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      temp = nums1[p1--];
    } else {
      temp = nums2[p2--];
    }
    nums1[p--] = temp;
  }
};

const nums1 = [1, 2, 5, 0, 0, 0, 0, 0];
const nums2 = [2, 3, 4, 5, 6];

merge(nums1, 3, nums2, 5);
console.log(nums1);
