/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const sArray = getActualArray(s);
  const tArray = getActualArray(t);

  return sArray.join("") === tArray.join("");
};

var getActualArray = function (str) {
  const ret = [];
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    ch === "#" ? ret.pop() : ret.push(ch);
  }
  return ret;
};

console.log(backspaceCompare("a#c", "b"));
