/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");

  const n = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < n; i++) {
    const v1 = arr1[i] === undefined ? 0 : +arr1[i];
    const v2 = arr2[i] === undefined ? 0 : +arr2[i];
    if (v1 > v2) return 1;
    if (v1 < v2) return -1;
  }

  return 0;
};
