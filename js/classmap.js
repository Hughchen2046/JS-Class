//JS array Map
//1.能將原始陣列運算後,重新組合回傳一個新陣列
//2.不會影響到原陣列
const arr = [1,5,10]
const newArr = arr.map(e => {
    return e*e;
})
console.log(newArr);
const data = [1,8,13,20];
const newData= data.map(e => {return e>10})
const objNewData = data.map(e => {
    let obj={}; //增加空物件
    obj.checkNum = e > 10  //在空物件中增加屬性
    return obj;
})
console.log(newData);
console.log(objNewData);

//對照使用forEach的方式
let arrTest = []
const arrForEach = [1,5,10]
arrForEach.forEach( e => {
    arrTest.push(e*e)
})
console.log(arrTest)
let newData2 = [];
const data2 = [1, 8, 13, 20];
data2.forEach(e => newData2.push(e > 10)); //想要的結果是true || false
console.log(newData2)

//array filter的用法
//1.篩選出符合條件的內容,組合後回傳新陣列
//2.不會影響到原陣列
const arrFilter = [1, 3, 5, 8, 10, 15, 20];
const nreArrMapTest = arrFilter.map(e => e >= 5);
const newArrFilter = arrFilter.filter(e => e >= 5); //如果改用map,會回傳true || false,這邊使用filter會回傳條件結果
console.log(nreArrMapTest);
console.log(newArrFilter);

const classScore=[{name:"小名",score:80},
                  {name:"小華",score:50},
                  {name:"小美",score:90},
                  {name:"小強",score:40}]
const passedStudent = classScore.filter(e => e.score >= 60).forEach(e => console.log(`${e.name}通過了考試`));//用filter + foreach
const passedStudent2 =classScore.filter(e => e.score >= 60).map(e => console.log(`${e.name}通過了考試`));//用filter + map
console.log(`${classScore.filter(e=> e.score >=60).map(e=> e.name).join("與")}通過了考試`);//用filter+map+join

const test = (x, y) => x < y ? `失敗` : `成功`; //三元運算子+箭頭函式
console.log(test(5, 10))