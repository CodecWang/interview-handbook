/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const partition = (start, end) => {
    let pivot = arr[end];
    let bound = start - 1;

    for (let i = start; i <= end; i++) {
      if (arr[i] <= pivot) {
        bound++;
        [arr[i], arr[bound]] = [arr[bound], arr[i]];
      }
    }

    return bound;
  };

  let left = 0;
  let right = arr.length - 1;
  let bound = partition(left, right);

  while (bound !== k) {
    if (bound < k) {
      bound = partition(++left, right);
    } else if (bound > k) {
      bound = partition(left, --right);
    }
  }

  return arr.slice(0, k);
};

console.log(getLeastNumbers([3, 2, 1], 0));
