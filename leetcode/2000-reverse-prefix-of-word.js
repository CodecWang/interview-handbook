/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const index = findIndex(word, ch);
  if (index <= 0) {
    return word;
  }

  const wordArr = Array.from(word);
  let p = 0;
  let q = index;
  while (p < q) {
    const temp = wordArr[p];
    wordArr[p++] = wordArr[q];
    wordArr[q--] = temp;
  }

  return wordArr.join("");
};

function findIndex(word, ch) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      return i;
    }
  }
  return -1;
}

console.log(reversePrefix("xyxzxe", "d"));
