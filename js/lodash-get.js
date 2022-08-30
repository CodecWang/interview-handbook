function get(source, path, defaultValue) {
  const ret = source ? traverse(source, path) : undefined;
  return ret || defaultValue;
}

function traverse(source, path) {
  const paths = convertPath(path);

  let index = 0;
  let tempObj = source;
  while (index < paths.length && tempObj) {
    tempObj = tempObj[paths[index++]];
  }

  return index && index === paths.length ? tempObj : undefined;
}

function convertPath(path) {
  if (Array.isArray(path)) return path;
  return path
    .replace(/\[(\w+)\]/g, ".$1")
    .replace(/\["(\w+)"\]/g, ".$1")
    .replace(/\['(\w+)'\]/g, ".$1")
    .split(".");
}

const object = { a: [{ b: { c: 3 } }] };
console.log(get(object, "a[0].b.c"));
console.log(get(object, 'a[0]["b"]["c"]'));
console.log(get(object, "a[100].b.c"));
console.log(get(object, ["a", 0, "b", "c"]));
