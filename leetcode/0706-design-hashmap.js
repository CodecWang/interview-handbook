var MyHashMap = function () {
  this.BASE = 769;
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const hash = this.hashCode(key);
  for (const pair of this.data[hash]) {
    if (pair[0] === key) {
      pair[1] = value;
      return;
    }
  }
  this.data[hash].push([key, value]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const hash = this.hashCode(key);
  for (const pair of this.data[hash]) {
    if (pair[0] === key) {
      return pair[1];
    }
  }
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const hash = this.hashCode(key);
  for (let i = 0; i < this.data[hash].length; i++) {
    const pair = this.data[hash][i];
    if (pair[0] === key) {
      this.data[hash].splice(i, 1);
      return;
    }
  }
};

MyHashMap.prototype.hashCode = function (key) {
  return key % this.BASE;
};

var obj = new MyHashMap();
obj.put(1, "abc");
obj.put(770, "abcd");
obj.remove(7700);
console.log(obj.get(10), obj.data);
