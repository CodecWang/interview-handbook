/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 我的方式：太过复杂，
  // 其实就是找第一个等于 target 的元素作为 left，第一个大于 target 的元素 -1 作为 right 就行
  // if (!nums.length) return [-1, -1];
  // let s = Infinity;
  // let e = -Infinity;
  // const search = (left, right) => {
  //   let p = left;
  //   let q = right;
  //   while (p <= q) {
  //     const mid = p + parseInt((q - p) >> 1);
  //     if (nums[mid] === target) {
  //       const start = search(p, mid - 1);
  //       const end = search(mid + 1, q);
  //       if (start === -1) s = Math.min(s, mid);
  //       if (end === -1) e = Math.max(e, mid);
  //       return mid;
  //     }
  //     if (nums[mid] > target) q = mid - 1;
  //     else p = mid + 1;
  //   }
  //   return -1;
  // };
  // search(0, nums.length - 1);
  // return s === Infinity ? [-1, -1] : [s, e];

  const binarySearch = (nums, target, isLower) => {
    let left = 0;
    let right = nums.length - 1;
    let ans;

    while (left <= right) {
      const mid = left + parseInt((right - left) / 2);
      if (nums[mid] > target || (isLower && nums[mid] >= target)) {
        right = mid - 1;
        ans = mid;
      } else left = mid + 1;
    }

    return ans;
  };

  const left = binarySearch(nums, target, true);
  const right = binarySearch(nums, target, false) - 1;
  return left <= right &&
    right < nums.length &&
    nums[left] === target &&
    nums[right] === target
    ? [left, right]
    : [-1, -1];
};
