/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const set = new Set();
  const n = words.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === i) continue;
      if (words[j].length >= words[i].length) continue;

      if (words[i].includes(words[j])) set.add(words[j]);
    }
  }

  return Array.from(set);
};
