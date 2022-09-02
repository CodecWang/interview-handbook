/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  let ans = "";
  let index = 0;
  while (index < length) {
    ans += S[index] === " " ? "%20" : S[index];
    index++;
  }
  return ans;

  // js 简洁写法
  // return S.replace(/\s/g, (...match) => (match[1] >= length ? "" : "%20"));
};
