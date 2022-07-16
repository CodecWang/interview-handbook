/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let res = 0;
  let multi = 1;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const val = columnTitle[i].charCodeAt() - 64;
    res += val * multi;
    multi *= 26;
  }

  return res;
};

console.log(titleToNumber("A"));
