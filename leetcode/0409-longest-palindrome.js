/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const dict = new Array(52).fill(0);

  for (const ch of s) {
    const ascii = ch.charCodeAt();
    const index = ascii >= 97 && ascii <= 123 ? ascii - 97 + 26 : ascii - 65;
    dict[index]++;
  }

  let ans = 0;
  let hasRemain = false;
  for (const count of dict) {
    ans += count;
    const remain = count % 2;
    if (remain !== 0) {
      hasRemain = true;
      ans -= remain;
    }
  }

  return hasRemain ? ans + 1 : ans;
};
