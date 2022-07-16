/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let origin = [0, 0];
  for (const move of moves) {
    switch (move) {
      case "L":
        origin[0]--;
        break;
      case "R":
        origin[0]++;
        break;
      case "U":
        origin[1]++;
        break;
      case "D":
        origin[1]--;
        break;
      default:
        break;
    }
  }

  return origin[0] === 0 && origin[1] === 0;
};

console.log(judgeCircle("LL"));
