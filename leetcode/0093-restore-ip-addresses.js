/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const isValid = (str) => {
    if (str.length > 3) return false;
    if (str[0] === "0" && str.length > 1) return false;
    if (parseInt(str) > 255) return false;
    return true;
  };

  const ans = [];
  const n = s.length;
  const backTracking = (path, start) => {
    if (path.length === 4) {
      if (start < n) return;
      ans.push(path.join("."));
    }

    for (let i = start; i < n; i++) {
      const temp = s.slice(start, i + 1);
      if (!isValid(temp)) break;
      path.push(temp);
      backTracking(path, i + 1);
      path.pop();
    }
  };

  backTracking([], 0);
  return ans;
};
