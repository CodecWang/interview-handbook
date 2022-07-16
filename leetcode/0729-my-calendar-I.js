var MyCalendar = function () {
  this.dates = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  for (const [iStart, iEnd] of this.dates) {
    if (start < iEnd && end > iStart) {
      return false;
    }
  }

  this.dates.push([start, end]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
