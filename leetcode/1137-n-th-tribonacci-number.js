/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) return 0;
  let tn3 = 0;
  let tn2 = 1;
  let tn1 = 1;

  for (let i = 3; i <= n; i++) {
    const v = tn1 + tn2 + tn3;
    tn3 = tn2;
    tn2 = tn1;
    tn1 = v;
  }

  return tn1;
};
