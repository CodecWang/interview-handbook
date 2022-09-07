Array.prototype.flat = function () {
  const arr = this;
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      const res = item.flat();
      result = [...result, ...res];
    } else {
      result.push(item);
    }
  }

  return result;
};

console.log([1, [2, [3, 4]]].flat(2));
