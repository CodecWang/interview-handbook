/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.arr = [];
  this.size = 0;
  this.k = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.size >= this.k) return false;
  this.arr.push(value);
  this.size += 1;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.size === 0) return false;
  this.arr.shift();
  this.size -= 1;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.size === 0 ? -1 : this.arr[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  console.log(this.size);
  return this.size === 0 ? -1 : this.arr[this.size - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size >= this.k;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
