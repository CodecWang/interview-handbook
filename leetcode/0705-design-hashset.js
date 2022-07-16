var MyHashSet = function () {
  this.BASE = 769;
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const hash = this.hashCode(key);
  if (this.data[hash].indexOf(key) === -1) {
    this.data[hash].push(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const hash = this.hashCode(key);
  for (let i = 0; i < this.data[hash].length; i++) {
    if (this.data[hash][i] === key) {
      this.data[hash].splice(i, 1);
      return;
    }
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const hash = this.hashCode(key);
  return this.data[hash].indexOf(key) !== -1;
};

MyHashSet.prototype.hashCode = function (key) {
  return key % this.BASE;
};

var obj = new MyHashSet();
obj.add(1);
obj.add(2);
obj.add(1);
console.log("obj: ", obj);
