/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  const starts = [];
  const ends = [];
  intervals.forEach((i) => {
    starts.push(i[0]);
    ends.push(i[1]);
  });
  const sortedStarts = starts.sort((a, b) => a - b);
  const sortedEnds = ends.sort((a, b) => a - b);

  let p = 0;
  let ans = 0;
  for (let q = 0; q < intervals.length; q++) {
    while (p < intervals.length && sortedStarts[p++] < sortedEnds[q]) {
      ans++;
    }
    if (p >= intervals.length) break;
  }

  return ans;
};
