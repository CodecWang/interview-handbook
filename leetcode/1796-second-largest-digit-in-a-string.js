/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let subMax = -1;
  let max = -1;

  for (const ch of s) {
    if (ch >= "0" && ch <= "9") {
      const num = ch - "0";
      if (num > max) {
        subMax = max;
        max = num;
      }
      if (num < max && num > subMax) {
        subMax = num;
      }
    }
  }

  return subMax;
};

console.log(secondHighest("sjhtz4"));
