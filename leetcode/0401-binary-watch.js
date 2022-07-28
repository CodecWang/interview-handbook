var readBinaryWatch = function (num) {
  if (num > 10) return []; // 边界
  const hours = getCases([1, 2, 4, 8], 4);
  const minutes = getCases([1, 2, 4, 8, 16, 32], 6);
  console.log("hours: ", hours, minutes);
  const ans = [];
  // hour 亮了 i 个灯，minutes 亮了 num-i 个灯
  for (let i = 0; i <= Math.min(4, num); i++) {
    if (num - i > 6) continue; // 边界
    // 枚举组合
    for (const h of hours[i]) {
      for (const m of minutes[num - i]) {
        const tmp = format(h, m);
        if (tmp) ans.push(tmp);
      }
    }
  }
  return ans;
};

function getCases(v, k) {
  const ans = [];
  const backtrack = (tmp, cur, sum, n, i) => {
    if (cur.length === n) return tmp.push(sum); // 符合
    if (i === v.length) return; // 不符合
    cur.push(v[i]); // 取
    backtrack(tmp, cur, sum + v[i], n, i + 1);
    cur.pop(); // 不取
    backtrack(tmp, cur, sum, n, i + 1);
  };
  // 回溯
  for (let i = 0; i <= k; i++) {
    const tmp = [];
    backtrack(tmp, [], 0, i, 0);
    ans.push(tmp);
  }
  return ans;
}

function format(h, m) {
  if (h > 11 || m > 59) return null;
  m = m < 10 ? "0" + m : m;
  return h + ":" + m;
}

console.log(readBinaryWatch(1));
