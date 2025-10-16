//在 JavaScript 裡，要計算一個「超大數（BigInt）」的平方根到最接近整數，不能直接用 Math.sqrt()，因為那只支援 Number，超過 2⁵³ 就不準了。
//可以自己寫個 整數牛頓法 (Newton’s method) 來求平方根

function bigIntSqrt(value) {
  if (value < 0n) throw new Error("Negative numbers not supported");
  if (value < 2n) return value;

  let x0 = value;
  let x1 = (value >> 1n) + 1n; // 初始猜測值

  while (x1 < x0) {
    x0 = x1;
    x1 = (x1 + value / x1) >> 1n; // 牛頓法更新
  }
  return x0;
}

// === 測試 ===
const num = 301904327994696326891450041128728452191068355773949623861976745826740387167126718987268922364696433666342701263745805058600559109994459677117490037560943316176064238999723627198716357824471097779468309n;
const num2 = 128365852634019259900119421188903097553353325620517520496867546937324986443938555286903783702895889578487957069944851474753245444847618239297974660272663081814524257803047929282664050145632673862279633n;

console.log(bigIntSqrt(num).toString());
console.log(bigIntSqrt(num2).toString());