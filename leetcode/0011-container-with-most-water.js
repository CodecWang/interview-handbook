/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let ans = 0;

  while (left < right) {
    const area = Math.min(height[right], height[left]) * (right - left);
    ans = Math.max(ans, area);
    if (height[right] > height[left]) {
      left++;
    } else {
      right--;
    }
  }

  return ans;
};

console.log(maxArea([1, 1]));
