/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const digitsSum = (num) => {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = parseInt(num / 10);
    }
    return sum;
  };

  // let ans = -1;
  // const map = new Map();
  // const sortedNums = nums.sort((a, b) => a - b);

  // for (const num of sortedNums) {
  //   const sum = digitsSum(num);
  //   const arr = map.get(sum) ? [...map.get(sum), num] : [num];
  //   map.set(sum, arr);
  //   if (arr && arr.length >= 2) {
  //     ans = Math.max(ans, arr[arr.length - 1] + arr[arr.length - 2]);
  //   }
  // }

  // return ans;

  // 更简洁的写法
  let ans = -1;
  const map = new Map();
  for (const num of nums) {
    const sum = digitsSum(num);
    if (map.has(sum)) {
      ans = Math.max(ans, num + map.get(sum));
      map.set(sum, Math.max(map.get(sum), num));
    } else map.set(sum, num);
  }

  return ans;
};
