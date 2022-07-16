/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  const res = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (!isAnagram(words[i - 1], words[i])) {
      res.push(words[i]);
    }
  }
  return res;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const table = new Array(26).fill(0);
  for (const ch of s) {
    table[ch.charCodeAt() - 97]++;
  }
  for (const ch of t) {
    table[ch.charCodeAt() - 97]--;
    if (table[ch.charCodeAt() - 97] < 0) {
      return false;
    }
  }

  return true;
};

console.log(removeAnagrams(["a", "b", "c", "d", "e"]));
