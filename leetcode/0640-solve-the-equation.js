/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  let xCount = 0;
  let sum = 0;

  let index = 0;
  const n = equation.length;
  let sign1 = 1;
  while (index < n) {
    if (equation[index] === "=") {
      sign1 = -1;
      index++;
      continue;
    }

    let sign2 = sign1;
    let num = 0;
    let valid = false;
    if (equation[index] === "-" || equation[index] === "+") {
      sign2 = equation[index] === "-" ? -sign1 : sign1;
      index++;
    }

    while (index < n && equation[index] >= "0" && equation[index] <= "9") {
      num = num * 10 + (equation[index].charCodeAt() - "0".charCodeAt());
      index++;
      valid = true;
    }

    if (equation[index] === "x") {
      xCount += valid ? sign2 * num : sign2;
      index++;
    } else sum += sign2 * num;
  }

  if (xCount === 0 && sum !== 0) return "No solution";
  if (xCount === 0) return "Infinite solutions";
  return `x=${-sum / xCount}`;
};
