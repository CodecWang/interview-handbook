/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const scores = [];

  ops.forEach((op) => {
    const count = scores.length;
    switch (op) {
      case "+":
        scores.push(scores[count - 1] + scores[count - 2]);
        break;
      case "D":
        scores.push(scores[count - 1] * 2);
        break;
      case "C":
        scores.pop();
        break;
      default:
        scores.push(+op);
        break;
    }
  });

  return scores.reduce((prev, cur) => prev + cur, 0);
};

console.log(calPoints(["1", "C"]));
