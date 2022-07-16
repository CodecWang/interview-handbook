/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let count = 0;
  let lines = 1;

  for (const ch of s) {
    const index = ch.charCodeAt() - 97;
    const current = widths[index];

    count += current;
    if (count > 100) {
      lines++;
      count = current;
    }
  }

  return [lines, count];
};
const widths = [
  4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10,
];
const s = "a";
console.log(numberOfLines(widths, s));
