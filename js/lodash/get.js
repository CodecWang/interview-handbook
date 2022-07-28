const object = { a: [{ b: { c: 3 } }] };
// get(object, "a[0].b.c");
get(object, ["a", 0, "b", "c"]);
// get(object, "", "default");

function get(object, path, defaultValue) {
  const result = object ? baseGet(object, path) : undefined;
  return result || defaultValue;
}

function baseGet(object, path) {
  const paths = castPath(path);

  let tempObject = object;
  let index = 0;
  const length = paths.length;

  while (tempObject && index < length) {
    tempObject = tempObject[paths[index++]];
  }

  return index && index === length ? tempObject : undefined;
}

function castPath(path) {
  if (Array.isArray(path)) return path;
  return stringToPath(path); // 正则，比较复杂，待实现
}
