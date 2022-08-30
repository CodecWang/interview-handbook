function myNew() {
  const constructor = Array.prototype.shift.call(arguments);
  if (typeof constructor !== "function") throw new Error("TypeError");

  let newObj = Object.create(constructor.prototype);
  let result = constructor.apply(newObj, arguments);
  if (result && (typeof result === "object" || typeof result === "function"))
    return result;
  return newObj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

console.log(myNew(Person, "wang", 29));
