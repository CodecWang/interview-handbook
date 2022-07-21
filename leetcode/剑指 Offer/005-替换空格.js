/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  // return s.split(" ").join("%20");
  // return s.replaceAll(" ", "%20");

  let s2 = "";
  for (const ch of s) {
    s2 = s2.concat(ch === " " ? "%20" : ch);
  }
  return s2;
};
