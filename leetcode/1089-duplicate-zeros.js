/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  // 标记所有 0 的位置
  const zeros = [];
  for (let i = 0; i < arr.length; i++) {
    const length = zeros.length;
    if (arr[i] === 0 && i + length < arr.length) {
      zeros.push(i + length);
    }
  }

  // 整个数组重新赋值
  for (let i = arr.length - 1; i >= 0; i--) {
    const length = zeros.length;
    if (zeros[length - 1] === i) {
      arr[i] = 0;
      zeros.pop();
    } else if (zeros[length - 1] === i - 1) {
      arr[i] = 0;
    } else {
      arr[i] = arr[i - length];
    }
  }
};

// console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZeros([1, 0, 3]));
