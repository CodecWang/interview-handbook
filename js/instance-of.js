function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left); // left.__proto__
  const prototype = right.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}

function foo() {}

console.log("3" instanceof String);
console.log(foo instanceof Function);
console.log(foo instanceof Object);
console.log(myInstanceOf("3", String));
console.log(myInstanceOf(foo, Function));
console.log(myInstanceOf(foo, Object));
