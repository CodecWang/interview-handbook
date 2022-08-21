/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  // 我的方法：使用两次二分查找，O(nlogn)
  // if (c === 0) return true;

  // const binarySearch = (target, isLower) => {
  //   let left = 1;
  //   let right = target;
  //   let ans = -1;

  //   while (left <= right) {
  //     const mid = left + parseInt((right - left) >> 1);
  //     if (!isLower && mid * mid === target) return mid;
  //     if (mid * mid < target || (isLower && mid * mid <= target)) {
  //       left = mid + 1;
  //       if (isLower) ans = mid;
  //     } else right = mid - 1;
  //   }

  //   return ans;
  // };

  // const ans = binarySearch(c, true);
  // for (let i = 0; i <= ans; i++) {
  //   if (binarySearch(c - i * i, false) !== -1) return true;
  // }

  // return false;

  // 其实只需要用双指针：
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const sum = left * left + right * right;
    if (sum === c) return true;
    if (sum > c) right--;
    else left++;
  }

  return false;
};
