/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const sArray = Array.from(s);
  for (let i = 0; i < s.length; i += k * 2) {
    let p = i;
    let q = i + k - 1;
    while (p < q) {
      const temp = sArray[p];
      sArray[p] = sArray[q];
      sArray[q] = temp;
      p++;
      q--;
    }
  }
  return sArray.join("");
};

console.log(reverseStr("abcd", 1));
