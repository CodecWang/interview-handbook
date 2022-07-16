/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  const sArray = Array.from(s);
  for (let i = 0; i < sArray.length; i++) {
    const ch = sArray[i];
    sArray[i] =
      ch >= "A" && ch <= "Z" ? String.fromCharCode(ch.charCodeAt() + 32) : ch;
  }
  return sArray.join("");
};
