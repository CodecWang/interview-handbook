/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.replace(/^\s+|\s+$/g, "");
  if (s === "" || s[0] === "e") return false;

  const isDigit = (ch) => ch >= "0" && ch <= "9";

  let eIndex;
  let hasDot = false;
  let hasPlus = false;
  let hasMinus = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    switch (ch) {
      case "+":
      case "-":
        if (ch === "+" && hasPlus) return false;
        if (ch === "-" && hasMinus) return false;
        if (i !== 0 && i !== eIndex + 1) return false;
        if (s[i + 1] !== "." && !isDigit(s[i + 1])) return false;
        ch === "+" ? (hasPlus = true) : (hasMinus = true);
        break;
      case ".":
        if (hasDot || eIndex) return false;
        if (isDigit(s[i - 1])) {
          if (s[i + 1] && s[i + 1] !== "e" && !isDigit(s[i + 1])) return false;
        } else if (!isDigit(s[i + 1])) return false;
        hasDot = true;
        break;
      case "e":
      case "E":
        if (eIndex || !s[i + 1]) return false;
        eIndex = i;
        hasPlus = false;
        hasMinus = false;
        break;
      default:
        if (!isDigit(ch)) return false;
        break;
    }
  }

  return true;
};
