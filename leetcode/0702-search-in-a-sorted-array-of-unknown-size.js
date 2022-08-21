/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
  const BORDER = Math.pow(2, 31) - 1;
  let left = 0;
  let right = 9999;

  while (left <= right) {
    const mid = left + parseInt((right - left) / 2);
    if (reader[mid] === target) return mid;

    if (
      reader[mid] === undefined ||
      reader[mid] === BORDER ||
      reader[mid] > target
    )
      right = mid - 1;
    else left = mid + 1;
  }

  return -1;
};
