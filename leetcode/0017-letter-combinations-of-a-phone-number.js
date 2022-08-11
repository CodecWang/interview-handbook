/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const ans = [];
  const list = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  const backTrack = (path, startIndex) => {
    if (path.length === digits.length) {
      ans.push([...path].join(""));
      return;
    }

    for (const v of list[digits[startIndex] - 2]) {
      path.push(v);
      backTrack(path, startIndex + 1);
      path.pop();
    }
  };

  backTrack([], 0);
  return ans;
};
