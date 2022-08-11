/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const nStack = [];
  const sStack = [];

  for (const ch of s) {
    if (ch >= "0" && ch <= "9") nStack.push(ch);
    else sStack.push(ch);
  }

  if (Math.abs(nStack.length - sStack.length) > 1) return "";

  const merge = (n1, n2) => {
    let p = 0;
    let q = 0;

    let ans = "";
    while (q < n2.length || p < n1.length) {
      ans += n1[p++] + (n2[q++] || "");
    }

    return ans;
  };

  return nStack.length > sStack.length
    ? merge(nStack, sStack)
    : merge(sStack, nStack);
};
