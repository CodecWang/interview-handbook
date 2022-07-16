/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // js 中 map 与 Object 的区别：map 的 key 有顺序
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    !map.has(ch) ? map.set(ch, i) : map.set(ch, -1);
  }

  for (const [key, value] of map) {
    if (value !== -1) {
      return value;
    }
  }

  return -1;
};

console.log(firstUniqChar("aabbc"));
