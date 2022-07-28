/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  let i = 0;
  let num = "";
  let x = 0; // 分母
  let y = 1; // 分子
  const n = expression.length;

  while (i <= n) {
    const ch = expression[i];
    if (i === n || (i !== 0 && (ch === "+" || ch === "-"))) {
      const [a, b] = num.split("/");
      x = x * +b + y * +a;
      y = y * +b;
      num = ch === "-" ? "-" : "";
    } else num += ch;
    i++;
  }

  if (x === 0) return `0/1`;
  const g = gcd(x > 0 ? x : -x, y);

  return `${x / g}/${y / g}`;
};

// 最大公约数
function gcd(a, b) {
  let remain = a % b;
  while (remain !== 0) {
    a = b;
    b = remain;
    remain = a % b;
  }

  return b;
}
