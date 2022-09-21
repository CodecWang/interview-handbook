/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  if (start === destination) return 0;

  let d1 = countDistance(start, destination, distance);
  let d2 = countDistance(destination, start, distance);
  return Math.min(d1, d2);
};

function countDistance(start, destination, distance) {
  const n = distance.length;
  let d = 0;
  while (start !== destination) {
    d += distance[start];
    if (start + 1 >= n) start = (start + 1) % n;
    else start = start + 1;
  }
  return d;
}
