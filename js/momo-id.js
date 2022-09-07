// 用闭包写一个自增 id
function genGlobalID() {
  let count = 0;

  return () => {
    return count++;
  };
}

const id = genGlobalID();
console.log("id: ", id());
console.log("id: ", id());
console.log("id: ", id());
console.log("id: ", id());
