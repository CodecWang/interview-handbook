/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let p = 0;
  let q = s.length - 1;

  while (p < q) {
    const temp = s[p];
    s[p] = s[q];
    s[q] = temp;
    p++;
    q--;
  }
};

s = ["H", "a", "n", "n", "a", "h"];
reverseString(s);
console.log(s);
