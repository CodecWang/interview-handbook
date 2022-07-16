/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // const sum = (s) => {
  //   let res = 0;
  //   for (const ch of s) {
  //     res += ch.charCodeAt();
  //   }
  //   return res;
  // };

  // return String.fromCharCode(sum(t) - sum(s));

  // 使用异或
  let res = 0;
  for (const ch of s) {
    res ^= ch.charCodeAt();
  }
  for (const ch of t) {
    res ^= ch.charCodeAt();
  }
  return String.fromCharCode(res);
};
