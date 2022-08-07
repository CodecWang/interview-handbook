/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let ans = 0;
  let start = 0;
  let map = new Map();
  let i = 0;

  for (; i < s.length; i++) {
    const index = map.get(s[i]);
    if (index !== undefined && index >= start) {
      ans = Math.max(ans, i - start);
      start = index + 1;
    }
    map.set(s[i], i);
  }

  return Math.max(ans, i - start);
};
