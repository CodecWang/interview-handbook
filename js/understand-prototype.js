/**
 * 1. JS 只有一种结构：对象
 * 2. 每个实例对象都有一个私有属性 __proto__ 指向它的构造函数的原型对象
 * 3. 该原型对象也有自己的 __proto__，层层向上知道 null
 * 4. null 没有原型，作为原型链的最后一个环节
 * 5. 几乎所有对象都是 Object 的实例
 * 6. ES 规范使用 [[Prototype]]，而非常用浏览器实现的 __proto__
 *
 * 6. 函数有一个特别的属性 prototype
 */

const a = new Object();
const b = "sth";
console.log(a.__proto__);
console.log(b.__proto__);

let f = function () {
  this.a = 1;
  this.b = 2;
};

f.prototype.b = 3;
f.prototype.c = 4;

let o = new f();

console.log(o.__proto__, f.prototype.__proto__, o.a, o.b, o.c);

var doSomething = function () {};
console.log(doSomething.prototype);
