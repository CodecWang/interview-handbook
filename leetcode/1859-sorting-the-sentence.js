/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const arr = new Array(9).fill("");

  let temp = "";
  let n = 0;
  for (const ch of s) {
    if (ch >= "0" && ch <= "9") {
      arr[ch - "1"] = temp;
      temp = "";
      n++;
    } else if (ch !== " ") {
      temp += ch;
    }
  }

  let ret = arr[0];
  for (let i = 1; i < n; i++) {
    ret += " " + arr[i];
  }

  return ret;
};

console.log(sortSentence("is2 sentence4 This1 a3"));
