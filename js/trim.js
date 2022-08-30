function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

console.log(trim("hello   ").length);
console.log(trim("    hello").length);
console.log(trim("    hello   ").length);
