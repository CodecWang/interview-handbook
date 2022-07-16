/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let digit = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + 1;
    if (sum === 10) {
      digits[i] = 0;
      digit = 1;
    } else {
      digits[i] = sum;
      digit = 0;
      break;
    }
  }

  return digit ? [1, ...digits] : digits;
};

// 优化写法
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] !== 0) return digits;
  }
  return [1, ...digits];
};

console.log(plusOne([0]));
