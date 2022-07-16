/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let count = 0;
  let pSet = new Set();

  for (const word of words) {
    if (pSet.has(word)) {
      count++;
      continue;
    }

    if (s.startsWith(word)) {
      count++;
      pSet.add(word);
    }
  }
  return count;
};

function isPrefix(pattern, s) {
  if (pattern.length > s.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] !== s[i]) {
      return false;
    }
  }

  return true;
}

console.log(countPrefixes(["a", "a", "c"], "ab"));
