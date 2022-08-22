/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let mapT = new Map();
  for (const ch of t) {
    mapT.set(ch, (mapT.get(ch) || 0) + 1);
  }

  let size = mapT.size;
  let start = 0;
  let end = 0;
  let ans = "";
  while (end < s.length) {
    const ch = s[end];
    end++;
    if (mapT.has(ch)) {
      mapT.set(ch, mapT.get(ch) - 1);
      if (mapT.get(ch) === 0) size -= 1;
    }

    while (size === 0) {
      const temp = s.substring(start, end);
      if (!ans || temp.length < ans.length) ans = temp;

      if (mapT.has(s[start])) {
        mapT.set(s[start], mapT.get(s[start]) + 1);
        if (mapT.get(s[start]) === 1) size += 1;
      }
      start++;
    }
  }

  return ans;
};
