/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
  let ret = [];
  let sum = A.reduce((a, b) => (b % 2 === 0 ? a + b : a), 0);

  for (let i = 0; i < queries.length; i++) {
    const [val, index] = queries[i];
    const temp = A[index] + val;
    if (A[index] % 2 === 0) sum -= A[index];
    if (temp % 2 === 0) sum += temp;
    A[index] = temp;
    ret.push(sum);
  }

  return ret;
};

console.log(
  sumEvenAfterQueries(
    [1, 2, 3, 4],
    [
      [1, 0],
      [-3, 1],
      [-4, 0],
      [2, 3],
    ]
  )
);
