/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  // const stack = [1];
  // const arr = preorder.split(",");

  // for (const ch of arr) {
  //   if (!stack.length) return false;

  //   stack[stack.length - 1]--;
  //   if (stack[stack.length - 1] === 0) stack.pop();
  //   if (ch !== "#") stack.push(2);
  // }

  // return stack.length === 0;

  // 更简洁的写法
  let slots = 1;
  const arr = preorder.split(",");

  for (const ch of arr) {
    if (slots === 0) return false;

    slots--;
    if (ch !== "#") slots += 2;
  }

  return slots === 0;
};
