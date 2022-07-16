/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let cw = "";
  for (const word of words) {
    cw += word;
    if (cw.length === s.length) {
      for (let i = 0; i < cw.length; i++) {
        if (cw[i] !== s[i]) {
          return false;
        }
      }
      return true;
      // break;
    }
  }

  return false;
};

console.log(isPrefixString("a", ["aa", "ad", "cookie"]));
