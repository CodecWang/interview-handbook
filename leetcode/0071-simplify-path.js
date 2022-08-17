/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 我的方式：稍微复杂了点
  // const paths = [];
  // let index = 0;

  // while (index < path.length) {
  //   if (path[index] === "/") {
  //     let str = "";
  //     while (index < path.length && path[++index] === "/") {}
  //     while (index < path.length && path[index] !== "/") {
  //       str += path[index++];
  //     }
  //     if (str === "..") paths.pop();
  //     else if (str !== "." && str !== "") paths.push(str);
  //   }
  // }

  // return "/" + paths.join("/");

  // 官方方式：直接用 split 分割，更简单
  const paths = path.split("/");
  const stack = [];

  for (const p of paths) {
    if (p === "..") stack.pop();
    else if (p.length && p !== ".") stack.push(p);
  }

  return "/" + stack.join("/");
};
