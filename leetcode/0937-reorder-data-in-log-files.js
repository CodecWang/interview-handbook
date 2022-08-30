/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const strLogs = [];
  const numLogs = [];

  const isDigit = (ch) => ch >= "0" && ch <= "9";

  for (const log of logs) {
    const [, first] = log.split(" ");
    if (isDigit(first[0])) numLogs.push(log);
    else strLogs.push(log);
  }

  const temp = strLogs.sort((log1, log2) => {
    const [head1, ...content1] = log1.split(" ");
    const [head2, ...content2] = log2.split(" ");
    const c1 = content1.join();
    const c2 = content2.join();
    if (c1 === c2) return head1 > head2 ? 1 : head1 === head2 ? 0 : -1;
    return c1 > c2 ? 1 : c1 === c2 ? 0 : -1;
  });

  return [...temp, ...numLogs];
};
