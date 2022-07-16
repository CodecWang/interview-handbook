/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  // const sorted = nums.sort((a, b) => a - b);

  // let findItem = original;
  // for (const item of sorted) {
  //   if (item === findItem) findItem *= 2;
  // }

  // return findItem;

  // method2: using set
  const set = new Set(nums);

  let findItem = original;
  while (set.has(findItem)) {
    findItem *= 2;
  }
  return findItem;
};

console.log(findFinalValue([2, 7, 9], 2));
