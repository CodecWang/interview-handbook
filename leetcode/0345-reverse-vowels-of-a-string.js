/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  const sArray = [...s];
  const sLower = s.toLowerCase();

  while (left < right) {
    while (left < s.length - 1 && !vowels.has(sLower[left])) {
      left++;
    }
    while (right > 0 && !vowels.has(sLower[right])) {
      right--;
    }

    if (left < right) {
      [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
      left++;
      right--;
    }
  }

  return sArray.join("");
};

console.log(reverseVowels("leetcode"));
