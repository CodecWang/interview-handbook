/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sArray = s.split(" ");
  if (pattern.length !== sArray.length) {
    return false;
  }

  const map = new Map();
  const used = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    const word = sArray[i];

    if (
      (map.get(ch) && map.get(ch) !== word) ||
      (!map.get(ch) && used.has(word))
    ) {
      return false;
    }
    map.set(ch, word);
    used.add(word);
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
