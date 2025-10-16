// console.log("Hello Would~JS")

// const list = document.querySelector(".list")
// list.innerHTML = "<span>span</span>"
// document.querySelector(".list span").textContent = "Changed"

//forEach
let a = [1, 2, 3, 4, 5]
a.forEach(item => { console.log(item) })
//迴圈寫法
let ary = [2, 3, 5, 7, 9];
let total = 100;
ary.forEach(item1 => { total -= item1 })
console.log(total);
//搭配物件做法
let data = [
    { num: 10 }, { num: 30 }, { num: 140 }
]
let total1 = 0;
data.forEach(e => { total1 += e.num })
console.log(total1);
