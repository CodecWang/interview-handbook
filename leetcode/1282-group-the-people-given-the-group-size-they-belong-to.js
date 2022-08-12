/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const map = new Map();
  const ans = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const group = groupSizes[i];
    const arr = map.get(group);
    if (!arr) map.set(group, [i]);
    else if (arr.length === group) {
      ans.push(arr);
      map.set(group, [i]);
    } else arr.push(i);
  }

  return [...ans, ...Array.from(map.values())];
};

// 2147483486
