/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  // 搜索子字符串
  // return s.length === goal.length && (s + s).indexOf(goal) !== -1;

  if (s.length !== goal.length) {
    return false;
  }

  const count = s.length;

  // 模拟旋转
  for (let i = 0; i < count; i++) {
    let ret = true;
    for (let j = 0; j < count; j++) {
      if (s[(i + j) % count] !== goal[j]) {
        ret = false;
        break;
      }
    }
    if (ret) {
      return true;
    }
  }

  return false;
};

rotateString("abcd", "dabc");
