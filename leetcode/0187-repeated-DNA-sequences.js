/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  // if (s.length < 10) return [];

  // const ans = new Set();
  // const set = new Set();
  // for (let i = 0; i <= s.length - 10; i++) {
  //   const str = s.substr(i, 10);
  //   if (set.has(str)) ans.add(str);
  //   else set.add(str);
  // }

  // return Array.from(ans);

  // 官网使用位运算
  const LEN = 10;
  const ans = [];
  if (s.length <= 10) return ans;

  const bin = new Map();
  bin.set("A", 0);
  bin.set("C", 1);
  bin.set("G", 2);
  bin.set("T", 3);

  let x = 0;
  for (let i = 0; i < LEN - 1; i++) {
    x = (x << 2) | bin.get(s[i]);
  }

  const map = new Map();
  for (let i = 0; i <= s.length - LEN; i++) {
    x = ((x << 2) | bin.get(s[i + LEN - 1])) & ((1 << 20) - 1);
    map.set(x, (map.get(x) || 0) + 1);
    if (map.get(x) === 2) ans.push(s.slice(i, i + LEN));
  }

  return ans;
};
