/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  if (s === t) return false;

  const countArr = new Array(26).fill(0);
  for (const ch of s) {
    countArr[ch.charCodeAt() - 97]++;
  }

  for (const ch of t) {
    countArr[ch.charCodeAt() - 97]--;
    if (countArr[ch.charCodeAt() - 97] < 0) return false;
  }

  return true;
};

console.log(isAnagram("ara", "re"));
