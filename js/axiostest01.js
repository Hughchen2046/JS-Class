let ary = [];
let sheet = [];

axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) {
    // console.log(response)
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
    ary = response.data;
    console.log(ary);
    console.log(ary[0].name);
    document.querySelector('.title').textContent = ary[0].name;
    sheet = ary;
    renderData();   //使用function來讓上面的function可以呼叫,來處理axios非同步觀念
  })

function renderData(){   //使用function來讓上面的function可以呼叫,來處理axios非同步觀念
    console.log(ary);
    console.log(sheet);
    document.querySelector('.title').textContent = ary[0].name;
}

  console.log(sheet) //axios非同步觀念,在網頁上會看到先執行這行程式,才會回去執行function內的程式

let checkData = [];
const answer = document.querySelector('.answer');
const targetName=document.getElementById('targetName');
const targetImg=document.getElementById('targetImg');
const targetArea=document.getElementById('targetArea');
  axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
  .then(function(response1){
    checkData = response1.data;
    // console.log(checkData);
    showData();
  })
  function showData(){
    console.log(checkData)
    answer.innerHTML= `
    <li>該 JSON 的陣列資料總共有多少個物件? Ans:${checkData.length}個.</li>
    <li>請輸出該 JSON 陣列資料的第一筆物件，屬性 id 所對應的值。 Ans:${checkData[0].id}</li>
    <li>請輸出該 JSON 陣列資料的第一筆物件，屬性 name 所對應的值。 Ans:${checkData[0].name}</li>
    <li>請輸出該 JSON 陣列資料的第一筆物件，屬性 imgUrl 所對應的值。 Ans:${checkData[0].imgUrl}</li>
    <li>請輸出該 JSON 陣列資料的第一筆物件，屬性 area 所對應的值。 Ans:${checkData[0].area}</li>
    <li>請輸出該 JSON 陣列資料的第二筆物件，屬性 description 所對應的值。 Ans:${checkData[1].description}</li>
    <li>請輸出該 JSON 陣列資料的第二筆物件，屬性 group 所對應的值。 Ans:${checkData[1].group}</li>
    <li>請輸出該 JSON 陣列資料的第二筆物件，屬性 price 所對應的值。 Ans:${checkData[1].price}</li>
    <li>請輸出該 JSON 陣列資料的最後一筆物件，屬性 rate 所對應的值。 Ans:${checkData.at(-1).rate}</li>    
    `
    targetName.textContent = checkData[0].name;
    targetImg.setAttribute("src" ,checkData[0].imgUrl);
    targetArea.textContent = checkData[0].area;
  }

// 該 JSON 的陣列資料總共有多少個物件?
// 請輸出該 JSON 陣列資料的第一筆物件，屬性 id 所對應的值。
// 請輸出該 JSON 陣列資料的第一筆物件，屬性 name 所對應的值。
// 請輸出該 JSON 陣列資料的第一筆物件，屬性 imgUrl 所對應的值。
// 請輸出該 JSON 陣列資料的第一筆物件，屬性 area 所對應的值。
// 請輸出該 JSON 陣列資料的第二筆物件，屬性 description 所對應的值。
// 請輸出該 JSON 陣列資料的第二筆物件，屬性 group 所對應的值。
// 請輸出該 JSON 陣列資料的第二筆物件，屬性 price 所對應的值。
// 請輸出該 JSON 陣列資料的最後一筆物件，屬性 rate 所對應的值。
// 請將 JSON 陣列資料的第一筆物件，屬性 name 所對應的值用 textContent 填入 id 為 targetName 的 p 標籤內。
// 請將 JSON 陣列資料的第一筆物件，屬性 imgUrl 所對應的值用 setAttribute 的方式替 id 為 targetImg 的 img 標籤設定 src 屬性。
// 請將 JSON 陣列資料的第一筆物件，屬性 area 所對應的值用 textContent 填入 id 為 targetArea 的 p 標籤內。

let testData=[];
axios.get('/Data/test.json')
.then(function(res1){
    testData = res1.data;
    testShow();
})
function testShow(){
    console.log(testData[0].description);
}