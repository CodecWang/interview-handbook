/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  const d1 = distance(p1, p2);
  const d2 = distance(p1, p3);
  const d3 = distance(p1, p4);
  const d4 = distance(p2, p3);
  const d5 = distance(p2, p4);
  const d6 = distance(p3, p4);

  const arr = [d1, d2, d3, d4, d5, d6];
  const set = new Set(arr);
  if (set.size !== 2) return false;
  const dArr = Array.from(set.values());

  return set.size === 2 && (dArr[1] === 2 * dArr[0] || dArr[0] === 2 * dArr[1]);
};

function distance(p1, p2) {
  return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
}
