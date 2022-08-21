/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    const mid = left + parseInt((right - left) / 2);
    if (mid * mid === num) return true;
    if (mid * mid > num) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};
