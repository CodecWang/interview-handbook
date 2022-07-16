/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 双指针的方式
  // const lowerS = s.toLowerCase();
  // const isValidChar = (ch) =>
  //   (ch >= "0" && ch <= "9") ||
  //   (ch >= "A" && ch <= "Z") ||
  //   (ch >= "a" && ch <= "z");
  // let left = 0;
  // let right = s.length - 1;
  // while (left < right) {
  //   while (left < right && !isValidChar(lowerS[left])) {
  //     left++;
  //   }
  //   while (left < right && !isValidChar(lowerS[right])) {
  //     right--;
  //   }
  //   if (lowerS[left] !== lowerS[right]) {
  //     return false;
  //   }
  //   left++;
  //   right--;
  // }
  // return true;

  // 正则表达式的方式
  const s2 = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const rs2 = s2.split("").reverse().join("");
  return s2 === rs2;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
