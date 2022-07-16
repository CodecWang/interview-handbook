/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  let answer = -1;

  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    if (mid * mid <= x) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
};

console.log(mySqrt(2));
console.log(mySqrt(3));
console.log(mySqrt(4));
console.log(mySqrt(5));
console.log(mySqrt(6));
console.log(mySqrt(7));
console.log(mySqrt(8));
console.log(mySqrt(9));
console.log(mySqrt(99));
