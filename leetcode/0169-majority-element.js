/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // const sortNums = nums.sort();
  // return sortNums[parseInt(sortNums.length / 2)];

  // 方法二：因为出现次数大于 n/2，所以随机选个数字，大概率是，统计其出现的次数

  // 方法三：分而治之

  const majorityRec = (left, right) => {
    // base condition: end recursion
    if (left === right) {
      return nums[left];
    }

    const mid = parseInt((right + left) / 2);
    const val1 = majorityRec(left, mid);
    const val2 = majorityRec(mid + 1, right);

    // 如果两边的众数一致
    if (val1 === val2) {
      return val1;
    }

    // 否则统计每个元素的数量
    let val1_count = 0;
    let val2_count = 0;
    for (let i = left; i <= right; i++) {
      if (nums[i] === val1) {
        val1_count++;
      }
      if (nums[i] === val2) {
        val2_count++;
      }
    }

    return val1_count > val2_count ? val1 : val2;
  };

  return majorityRec(0, nums.length - 1);
};

console.log(majorityElement([3, 2, 3]));
