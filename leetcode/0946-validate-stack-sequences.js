/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let i = 0;
  let j = 0;

  while (i < pushed.length) {
    if (i < pushed.length) stack.push(pushed[i++]);
    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }

  return stack.length === 0;
};
