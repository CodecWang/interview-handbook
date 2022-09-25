/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const isPalindrome = (str, start, end) => {
    while (start < end) {
      if (str[start++] !== str[end--]) return false;
    }
    return true;
  };

  const ans = [];
  const backTracking = (path, start) => {
    if (start >= s.length) return ans.push([...path]);

    for (let i = start; i < s.length; i++) {
      if (!isPalindrome(s, start, i)) continue;
      path.push(s.slice(start, i + 1));
      backTracking(path, i + 1);
      path.pop();
    }
  };

  backTracking([], 0);
  return ans;
};
