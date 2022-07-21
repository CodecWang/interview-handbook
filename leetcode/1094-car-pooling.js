/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const arr = new Array(1001).fill(0);
  for (const trip of trips) {
    arr[trip[1]] += trip[0];
    arr[trip[2]] -= trip[0];
  }

  let count = 0;
  for (const item of arr) {
    count += item;
    if (count > capacity) return false;
  }

  return true;
};
