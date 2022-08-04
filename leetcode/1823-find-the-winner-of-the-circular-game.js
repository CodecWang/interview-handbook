/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  // const arr = [];
  // for (let i = 1; i <= n; i++) {
  //   arr.push(i);
  // }

  // let start = 0;
  // while (arr.length !== 1) {
  //   const index = (start + k - 1) % arr.length;
  //   arr.splice(index, 1);
  //   start = index >= arr.length ? 0 : index;
  // }

  // return arr[0];

  // 官方更简单的写法
  let ans = 1;
  for (let i = 2; i <= n; i++) {
    ans = ((ans + k - 1) % i) + 1;
  }
  return ans;
};
