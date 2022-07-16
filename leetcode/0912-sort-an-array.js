/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // merge sort: divide and conquer algorithm

  const sortRec = (start, end) => {
    // base condition
    if (start === end) {
      return [nums[start]];
    }

    // 1. half the array nums
    const mid = parseInt((start + end) / 2);

    // 2. sort each half
    const left = sortRec(start, mid);
    const right = sortRec(mid + 1, end);

    // 3. merge two parts
    return merge(left, right);
  };

  return nums.length ? sortRec(0, nums.length - 1) : [];
};

function merge(arr1, arr2) {
  let p = 0;
  let q = 0;
  const res = [];

  while (p < arr1.length && q < arr2.length) {
    res.push(arr1[p] <= arr2[q] ? arr1[p++] : arr2[q++]);
  }

  while (p < arr1.length) {
    res.push(arr1[p++]);
  }

  while (q < arr2.length) {
    res.push(arr2[q++]);
  }

  return res;
}
