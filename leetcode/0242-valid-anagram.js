/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 方法一：排序
  // const sArray = Array.from(s).sort(); => [...s].sort()
  // const tArray = Array.from(t).sort();
  // return sArray.join() === tArray.join();

  // 方法二：哈希表字符出现的次数相同
  // if (s.length !== t.length) {
  //   return false;
  // }

  // const sMap = new Map();
  // const tMap = new Map();
  // for (let i = 0; i < s.length; i++) {
  //   const sCh = s[i];
  //   const tCh = t[i];
  //   sMap.set(sCh, sMap.get(sCh) ? sMap.get(sCh) + 1 : 1);
  //   tMap.set(tCh, tMap.get(tCh) ? tMap.get(tCh) + 1 : 1);
  // }

  // for (const [key, value] of sMap) {
  //   if (tMap.get(key) !== value) {
  //     return false;
  //   }
  // }

  // return true;

  // 方法三：查表法
  if (s.length !== t.length) {
    return false;
  }

  const table = new Array(26).fill(0);
  for (const ch of s) {
    table[ch.charCodeAt() - 97]++;
  }
  for (const ch of t) {
    table[ch.charCodeAt() - 97]--;
    if (table[ch.charCodeAt() - 97] < 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("rac", "acr"));
