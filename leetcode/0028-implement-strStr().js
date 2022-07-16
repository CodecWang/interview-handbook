/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }

  const n = haystack.length;
  const m = needle.length;

  for (let i = 0; i + m <= n; i++) {
    let found = true;
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("a", "baaa"));
