/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const ch of tokens) {
    if (/^[\+|\-|\*|\/]{1}$/.test(ch)) {
      const op2 = +stack.pop();
      const op1 = +stack.pop();
      let ret = null;
      switch (ch) {
        case "+":
          ret = op1 + op2;
          break;
        case "-":
          ret = op1 - op2;
          break;
        case "/":
          ret = parseInt(op1 / op2);
          break;
        case "*":
          ret = op1 * op2;
          break;
      }
      stack.push(ret);
    } else stack.push(ch);
  }

  return stack.pop();
};
