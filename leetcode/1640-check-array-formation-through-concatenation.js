/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  for (const piece of pieces) {
    let beforeIndex = -1;
    for (const item of piece) {
      if (!map.has(item)) return false;
      const index = map.get(item);
      if (beforeIndex !== -1 && index - beforeIndex !== 1) return false;
      beforeIndex = index;
    }
  }

  return true;
};
