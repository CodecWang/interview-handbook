/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let ret = [];
  for (let i = A.length - 1; i >= 0; i--) {
    K += A[i];
    ret.unshift(K % 10);
    K = parseInt(K / 10);
  }

  while (K) {
    ret.unshift(K % 10);
    K = parseInt(K / 10);
  }
  return ret;
};

console.log(addToArrayForm([1], 99));
