// 1. 浏览器自带的深拷贝 WebAPI：structuredClone
{
  const obj1 = { a: 1, b: [1, 2, 3], map: new Map(), re: /hello/, f() {} };
  const obj2 = structuredClone(obj1);
  const obj3 = { ...obj1 };

  obj1.b[0] = 2;

  console.log(obj1);
  console.log(obj2);
  console.log(obj3);
}

// 2. 使用 JSON.stringify/JSON.parse 转换
{
  const obj1 = { a: 1, b: [1, 2, 3] };
  const obj2 = JSON.parse(JSON.stringify(obj1));

  obj1.b[0] = 2;

  console.log(obj1);
  console.log(obj2);
}

/**
 * 前面两种方式的局限在于只能用于可序列化的对象，
 * 有些 JS 对象是无法被序列化的，如 functions/Symbols...
 */

// 3. 自行判断手写
{
  function deepClone(source, memory) {
    memory || (memory = new WeakMap());
    let result = null;
    const type = Object.prototype.toString.call(source);

    // primitive
    if (/Number|Boolean|String|Null|Undefined|Symbol|Function/.test(type)) {
      result = source;
    } else if (type === "[object Array]") {
      result = source.map((value) => deepClone(value, memory));
    } else if (type === "[object Date]") {
      result = new Date(source);
    } else if (type === "[object RegExp]") {
      result = new RegExp(source);
    } else if (type === "[object Set]") {
      result = new Set();
      for (const value of source) {
        result.add(deepClone(value, memory));
      }
    } else if (type === "[object Map]") {
      result = new Map();
      for (const [key, value] of source) {
        result.set(key, deepClone(value, memory));
      }
    } else {
      if (memory.has(source)) {
        result = memory.get(source);
      } else {
        result = Object.create(null);
        memory.set(source, result);
        Object.keys(source).forEach((key) => {
          const value = source[key];
          result[key] = deepClone(value, memory);
        });
      }
    }

    return result;
  }

  const obj1 = {
    re: /hello/,
    f() {},
    date: new Date(),
    map: new Map(),
    list: [1, 2, 3],
    a: 3,
    b: 4,
  };

  const obj2 = deepClone(obj1);

  obj1.list[0] = 2;
  obj1.map.set("name", "wang");

  console.log(obj1);
  console.log(obj2);
}
