/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // const map = new Map();

  // for (const str of strs) {
  //   const sorted = Array.from(str).sort().join("");
  //   const list = map.get(sorted) || new Array();
  //   list.push(str);
  //   map.set(sorted, list);
  // }

  // return map.values();

  // using counting
  // 这里不能用 new map()，因为 map 可以使用任何类型做 key，
  // 而对 Object 来说，countArr 会转换成 string，因此保障了 key 的唯一
  const map = {};

  for (const str of strs) {
    const countArr = new Array(26).fill(0);
    for (const ch of str) {
      countArr[ch.charCodeAt() - 97]++;
    }
    map[countArr] ? map[countArr].push(str) : (map[countArr] = [str]);
  }

  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
