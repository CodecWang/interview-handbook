/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const sArr = sentence.split(" ");

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i].length < searchWord) continue;

    let j = 0;
    for (; j < searchWord.length; j++) {
      if (sArr[i][j] !== searchWord[j]) break;
    }
    if (j === searchWord.length) return i + 1;
  }

  return -1;
};
