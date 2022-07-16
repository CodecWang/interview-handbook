/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  // method 1: sort and compare
  // const heightsCopy = [...heights].sort((a, b) => a - b);
  // let count = 0;
  // for (let i = 0; i < heights.length; i++) {
  //   if (heights[i] !== heightsCopy[i]) {
  //     count++;
  //   }
  // }

  // return count;

  // method 2: counting sort
  const countArr = new Array(101).fill(0);
  for (const height of heights) {
    countArr[height]++;
  }

  let count = 0;
  let idx = 0;
  for (let i = 0; i < countArr.length; i++) {
    for (let j = 0; j < countArr[i]; j++) {
      if (heights[idx] !== i) {
        count++;
      }
      idx++;
    }
  }

  return count;
};

console.log(
  heightChecker([
    31, 81, 41, 78, 48, 2, 83, 48, 21, 20, 43, 15, 26, 78, 96, 55, 5, 46, 35,
    89, 85, 54, 76, 64, 71, 36, 98, 94, 100, 7, 88, 92, 80, 43, 24, 89, 50, 61,
    59, 20, 94, 57, 99, 62, 82, 46, 28, 57, 66, 62, 56, 15, 12, 63, 19, 35, 12,
    26, 15, 59, 8, 44, 46, 45, 33, 20, 27, 31, 85, 15, 92, 63, 63, 40, 35, 95,
    91, 1, 4, 57, 55, 68, 53, 28, 15, 94, 74, 89, 77, 7, 25, 63, 77, 24, 76, 44,
  ])
);
