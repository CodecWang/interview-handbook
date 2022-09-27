// 判断一个正整数的二进制是不是 01 交叉序列

/**
 * 思路：
 * 1. 数 n 右移一位为 m，这样 01 会变成 10，10 会变成 01
 * 2. m 与 n 异或变成全 1 序列 t
 * 3. 判断全 1 序列：t & (t + 1) === 0
 */

function is01Cross(n) {
  const m = n >> 1;
  const t = n & m;
  return (t && t + 1) === 0;
}

console.log(is01Cross(10));
console.log(is01Cross(42));
console.log(is01Cross(11));
