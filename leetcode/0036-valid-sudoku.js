/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const colSet = new Array(9).fill(0).map(() => new Set());
  let blockSet = null;

  for (let i = 0; i < 9; i++) {
    const rowSet = new Set();
    if (i % 3 === 0) blockSet = new Array(3).fill(0).map(() => new Set());
    for (let j = 0; j < 9; j++) {
      const ch = board[i][j];
      if (ch !== ".") {
        if (
          rowSet.has(ch) ||
          colSet[j].has(ch) ||
          blockSet[parseInt(j / 3)].has(ch)
        )
          return false;
        rowSet.add(ch);
        colSet[j].add(ch);
        blockSet[parseInt(j / 3)].add(ch);
      }
    }
  }

  return true;
};
