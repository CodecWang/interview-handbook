/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let shortest = Infinity;

  for (const str of strs) {
    if (str.length < shortest) {
      shortest = str.length;
    }
  }

  let res = "";
  for (let i = 0; i < shortest; i++) {
    const ch = strs[0][i];
    let j = 1;
    for (; j < strs.length; j++) {
      if (strs[j][i] !== ch) {
        break;
      }
    }
    if (j === strs.length) {
      res += ch;
    } else {
      break;
    }
  }

  return res;
};

console.log(longestCommonPrefix(["cir", "car"]));
