/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.capacity = k;
  this.array = [];
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;
  this.array.unshift(value);
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;
  this.array.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (!this.array.length) return false;
  this.array.shift();
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (!this.array.length) return false;
  this.array.pop();
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.array.length ? this.array[0] : -1;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  return this.array.length ? this.array[this.array.length - 1] : -1;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.array.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.array.length === this.capacity;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
