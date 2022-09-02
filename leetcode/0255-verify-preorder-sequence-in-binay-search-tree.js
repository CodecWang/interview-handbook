/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function (preorder) {
  const stack = [];
  let curRoot;
  for (const node of preorder) {
    if (node < curRoot) return false;
    while (stack.length && node > stack[stack.length - 1]) {
      curRoot = stack.pop();
    }
    stack.push(node);
  }

  return true;
};
