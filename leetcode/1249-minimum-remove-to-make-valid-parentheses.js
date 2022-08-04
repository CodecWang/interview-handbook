/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const removedIndex = [];
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else if (s[i] === ")") {
      if (stack.length) stack.pop();
      else removedIndex.push(i);
    }
  }

  let ans = "";
  const set = new Set([...removedIndex, ...stack]);
  for (let i = 0; i < s.length; i++) {
    if (!set.has(i)) ans += s[i];
  }

  return ans;
};
