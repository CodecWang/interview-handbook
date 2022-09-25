/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  const ans = [];
  const list = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  const backTracking = (path, start) => {
    if (start > digits.length) return;
    if (path.length === digits.length) return ans.push(path);

    const letters = list[digits[start] - 2];
    for (let i = 0; i < letters.length; i++) {
      backTracking(path + letters[i], start + 1);
    }
  };

  backTracking("", 0);
  return ans;
};
