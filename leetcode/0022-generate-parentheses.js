/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (!n) return [];

  const ans = [];

  const dfs = (str, left, right) => {
    if (left === 0 && right === 0) {
      ans.push(str);
      return;
    }

    if (left > right) {
      return;
    }

    if (left > 0) {
      dfs(str + "(", left - 1, right);
    }

    if (right > 0) {
      dfs(str + ")", left, right - 1);
    }
  };

  dfs("", n, n);
  return ans;
};
