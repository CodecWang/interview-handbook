function getObjectPathByValue(obj, value) {
  let path = [];
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    if (obj[key] === value) {
      path.push(key);
    } else if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
      const result = getObjectPathByValue(obj[key], value);
      if (result.length) {
        path = [key, ...result];
        break;
      }
    }
  }

  return path;
}

const object = { a: 1, b: { c: 2, d: { e: 3, f: 4 } } };
console.log(getObjectPathByValue(object, 5));
