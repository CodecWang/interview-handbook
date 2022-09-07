const data = { name: "wang", age: 27, cAge: { age: 27 } };

// ${} 模版替换
String.prototype.render1 = function (data) {
  return this.replace(/\${(\w+)}/g, (...args) => {
    // console.log(args);
    return data[args[1]] || "";
  });
};

// {{}} 模版替换
String.prototype.render2 = function (data) {
  return this.replace(/{{(\w+)}}/g, (...args) => {
    // console.log(args);
    return data[args[1]] || "";
  });
};

console.log("${name} is ${age} years old".render1(data));
console.log("{{name}} is {{cAge.age}} years old".render2(data));
