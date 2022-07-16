/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hashMap = {};
  for (let index = 0; index < nums.length; index++) {
    if (hashMap[nums[index]]) {
      return true;
    }
    hashMap[nums[index]] = true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
