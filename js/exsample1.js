// const list = document.querySelector(".list");
// const inli = document.querySelector(".innerli");
// const lin= document.createElement("li");
// lin.innerHTML = "<strong>這是粗體文字</strong>";
// inli.parentElement.innerHTML += "<li>增加或是刪除</li>";
// console.log(inli.parentNode)
// inli.parentNode.appendChild(lin);

//題目一 選取 DOM
// Todo 待完成
// 01. 使用 getElementById + getAttribute("id") 來獲取 01 的 id 內容
console.log(document.getElementById("target").getAttribute("id"));
// 02. 使用 getElementsByClassName 來獲取一個 HTMLCollection
console.log(document.getElementsByClassName("target"))
// 03. 使用 querySelector 來獲取一個 Element
console.log(document.querySelector(".target"))
// 04. 使用 querySelectorAll 來獲取一個 NodeList
console.log(document.querySelectorAll(".target"))
// 05. 使用 nextSibling 來獲取一個 Node
console.log(document.querySelector(".target").nextSibling)

// Output 輸出
// "target"
// HTMLCollection { 0: div#target.target, length: 1, … }
// <div id="target" class="target" data-target="">
// NodeList [ div#target.target, div ]
// #text "\n"

// 題目二 修改 DOM
//Todo 待修改
const selectMe = document.getElementById("target");
selectMe.textContent = "被選了01";
selectMe.style.color = "red";
selectMe.classList.add("hello");

//題目三 監聽 DOM
let clickCount = false; //先設定不成立
selectMe.addEventListener("click", e => {
    clickCount = !clickCount; //開關切換成立or不成立
    selectMe.style.color = clickCount ? "yellow" : "red"; //?成立為何 :不成立為何
    selectMe.textContent = clickCount ? "已被點擊" : "被選了01";
});

//題目四 創造、插入 DOM
const btn = document.querySelector("button");
const createp = document.createElement("p");
createp.textContent = "你好世界"
btn.addEventListener("click", e => {
    document.querySelector("body").appendChild(createp);
})

//題目五 監聽表單
const formGet = document.querySelector("form");
formGet.addEventListener("submit", e => {
    e.preventDefault();
    const username = formGet.elements["user"].value;
    console.log(formGet.elements[0].value);
    console.log(`輸入的資料為:${username}`)
})

//題目六 加減計數器

// let storageCount = 0;
// const numCount = document.getElementById("numCount");
// const addBtn = document.getElementById("addBtn");
// const resetBtn = document.getElementById("resetBtn");
// const discountBtn = document.getElementById("discountBtn");
// addBtn.addEventListener("click", e => { 
//     if(formNum != null){ storageCount += parseInt(formNum); numCount.textContent = storageCount;}  
//     else {++storageCount; numCount.textContent = storageCount;}
//      })
// discountBtn.addEventListener("click", e => { --storageCount; numCount.textContent = storageCount; })
// resetBtn.addEventListener("click", e =>{ storageCount = 0; numCount.textContent = storageCount;})

//題目七 加減計數器(進階)

const formGetNum = document.getElementById("formGetNum");
formGetNum.addEventListener("submit", f => {
    f.preventDefault();
    const formNum = formGetNum.elements[0].value;
    addBtn.textContent = `+${formNum}`;
    discountBtn.textContent = `-${formNum}`
})
let storageCount = 0;
const numCount = document.getElementById("numCount");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const discountBtn = document.getElementById("discountBtn");
addBtn.addEventListener("click", e => {
    if (formGetNum.elements[0].value != 0) { storageCount += parseInt(formGetNum.elements[0].value); numCount.textContent = storageCount; }
    else { ++storageCount; numCount.textContent = storageCount; }
})
discountBtn.addEventListener("click", e => {
    if (formGetNum.elements[0].value != 0) { storageCount -= parseInt(formGetNum.elements[0].value); numCount.textContent = storageCount; }
    else { --storageCount; numCount.textContent = storageCount; }

})
resetBtn.addEventListener("click", e => { storageCount = 0; numCount.textContent = storageCount; })

//題目八 手風琴
let accClick = false;
const accHeads = document.querySelectorAll(".according-header");
accHeads.forEach(accHeader => {
  accHeader.addEventListener("click", () => {
    const accContent = accHeader.nextElementSibling; // 取得下一個兄弟元素 (就是內容區)
    accClick = !accClick;
    accContent.classList.toggle("open");
    accHeader.querySelectorAll("span")[1].textContent = accClick ? "-" : "+";
  });
});

// 題目九 頁籤
const pgheaders = document.querySelectorAll(".page-header");
pgheaders.forEach(pgheader => {
    pgheader.addEventListener("click", () => {
        if (pgheader.textContent === "London"){
            document.querySelector(".page-body").innerHTML = "<h5>Lonon</h5><p>London is the capital city of England.</p>"
        }else if (pgheader.textContent === "Paris"){
            document.querySelector(".page-body").innerHTML = "<h5>Paris</h5><p>Paris is the capital of France.</p>"
        }else document.querySelector(".page-body").innerHTML = "<h5>Tokyo</h5><p>Tokyo is the capital of Japan.</p>"
    })
})

//題目十 代辦事項
const todoForm = document.querySelector(".todo-form");
const todoLists = document.querySelector(".todoLists");
todoForm.addEventListener("submit", t => {
    t.preventDefault();
    const todoInput = todoForm.elements["todoInput"].value;
    const todoList =  todoLists.appendChild(document.createElement("div"));
    todoList.className = "todo-list";
    todoList.innerHTML = `
        <input type="checkbox" class="todoChk" >
        <span class="todo-item">${todoInput}</span>
        <button type="button" class="todoDel">刪除</button>
    `;
    todoLists.appendChild(todoList);
    todoForm.reset()
})
todoLists.addEventListener("click", e => {
    if(e.target.classList == "todoDel"){
        e.target.closest(".todo-list").remove();
    }
})
todoLists.addEventListener("change", e => {
    if(e.target.classList == "todoChk"){
        const span = e.target.closest(".todo-list").querySelector(".todo-item");
        span.style.textDecoration = e.target.checked ? "line-through" : "none";
        span.style.color = e.target.checked ? "gray" : "black";
    }
})