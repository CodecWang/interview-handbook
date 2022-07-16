/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = new Map();
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  let minIndex = Infinity;
  let ret = [];
  for (let j = 0; j < list2.length; j++) {
    if (j > minIndex) {
      break;
    }
    const res = list2[j];
    if (map.has(res)) {
      const i = map.get(res);
      if (i + j === minIndex) {
        ret.push(res);
      } else if (i + j < minIndex) {
        minIndex = i + j;
        ret = [res];
      }
    }
  }

  return ret;
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
);
