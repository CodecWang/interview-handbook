/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // const used = new Set();
  // for (const ch of ransomNote) {
  //   let found = false;
  //   for (let i = 0; i < magazine.length; i++) {
  //     if (used.has(i)) {
  //       continue;
  //     }
  //     if (magazine[i] === ch) {
  //       used.add(i);
  //       found = true;
  //       break;
  //     }
  //   }
  //   if (!found) {
  //     return false;
  //   }
  // }

  // return true;

  // 更好的方式：统计计数
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const arr = new Array(26).fill(0);
  for (const ch of magazine) {
    arr[ch.charCodeAt() - 97]++;
  }

  for (const ch of ransomNote) {
    const index = ch.charCodeAt() - 97;
    if (--arr[index] < 0) return false;
  }

  return true;
};

console.log(canConstruct("a", "ab"));
