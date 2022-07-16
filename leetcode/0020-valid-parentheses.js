/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stacks = [];

  for (const ch of s) {
    if (pairs[ch]) {
      stacks.push(ch);
      continue;
    }
    if (pairs[stacks.pop()] !== ch) {
      return false;
    }
  }

  return stacks.length === 0;
};

console.log(isValid("(]"));
