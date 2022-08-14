/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const sArr = [];
  for (const ch of s) {
    const last = sArr[sArr.length - 1];
    if (ch === last) sArr.pop();
    else sArr.push(ch);
  }
  return sArr.join("");
};
