let data = [
  {
    "id": 0,
    "name": "綠島自由行套裝行程",
    "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",
    "area": "台東",
    "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
    "group": 8,
    "price": 1280,
    "rate": 8.6
  },
  {
    "id": 1,
    "name": "清境高空觀景步道二日遊",
    "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",
    "area": "南投",
    "description": "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
    "group": 12,
    "price": 2580,
    "rate": 8.2
  },
  {
    "id": 2,
    "name": "南庄度假村露營車二日遊",
    "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_6.png?raw=true",
    "area": "台中",
    "description": "南庄雲水豪華露營車，擁有最愜意的露營體驗吧！一泊一食，輕鬆享受露營車樂趣。獨立衛浴與私人戶外露臺。入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
    "group": 2,
    "price": 1280,
    "rate": 9.6
  },
  {
    "id": 3,
    "name": "山林悠遊雙人套票",
    "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",
    "area": "台中",
    "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。（含雙龍瀑布入場券 x2）",
    "group": 10,
    "price": 880,
    "rate": 8.6
  },
  {
    "id": 4,
    "name": "漁樂碼頭釣魚體驗套票",
    "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_2.png?raw=true",
    "area": "台中",
    "description": "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
    "group": 5,
    "price": 1280,
    "rate": 8.6
  },
  {
    "id": 5,
    "name": "熊森公園親子二日遊套票",
    "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_5.png?raw=true",
    "area": "高雄",
    "description": "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
    "group": 3,
    "price": 2480,
    "rate": 8.6
  },
];
const ticketCardArea = document.querySelector('.ticketCard-area');
const searchResultText = document.getElementById('searchResult-text')

function init() {
  let cardStr = "";
  data.forEach(e => {
    cardStr += `<li class="ticketCard">
            <div class="ticketCard-img">
                <a href="#"><img src="${e.imgUrl}"
                        alt="">
                </a>
                <div class="ticketCard-region">${e.area}</div>
                <div class="ticketCard-rank">${e.rate}</div>
            </div>
            <div class="ticketCard-content">
                <div>
                    <h3>
                        <a href="#" class="ticketCard-name">${e.name}</a>
                    </h3>
                    <p class="ticketCard-description">
                        ${e.description}
                    </p>
                </div>
                <div class="ticketCard-info">
                    <p class="ticketCard-num">
                        <span> <i class="bi bi-exclamation-circle-fill"></i></span> 剩下最後 <span id="ticketCard-num"> ${e.group} </span> 組
                    </p>
                    <p class="ticketCard-price">
                        TWD <span id="ticketCard-price">$${e.price.toLocaleString()}</span>
                    </p>
                </div>
            </div>
        </li>`;
  })
  ticketCardArea.innerHTML = cardStr;
  searchResultText.textContent = `本次搜尋共 ${data.length} 筆資料`
}
init()

const regionSearch = document.querySelector('.regionSearch');
const cantFindArea = document.querySelector('.cantFind-area')
regionSearch.addEventListener('change', e => {
  if (e.target.value === '') {init();cantFindArea.style.display='none'; return}
  let cardStr="";
  let listcount=0;
  data.forEach(f => {
    if (e.target.value == f.area){cardStr += `<li class="ticketCard">
            <div class="ticketCard-img">
                <a href="#"><img src="${f.imgUrl}"
                        alt="">
                </a>
                <div class="ticketCard-region">${f.area}</div>
                <div class="ticketCard-rank">${f.rate}</div>
            </div>
            <div class="ticketCard-content">
                <div>
                    <h3>
                        <a href="#" class="ticketCard-name">${f.name}</a>
                    </h3>
                    <p class="ticketCard-description">
                        ${f.description}
                    </p>
                </div>
                <div class="ticketCard-info">
                    <p class="ticketCard-num">
                        <span> <i class="bi bi-exclamation-circle-fill"></i></span> 剩下最後 <span id="ticketCard-num"> ${f.group} </span> 組
                    </p>
                    <p class="ticketCard-price">
                        TWD <span id="ticketCard-price">$${f.price.toLocaleString()}</span>
                    </p>
                </div>
            </div>
        </li>`;
        cantFindArea.style.display='none';
        listcount++;
      } else if (listcount == 0){cantFindArea.style.display='block'}
  })

  ticketCardArea.innerHTML = cardStr;
  searchResultText.textContent = `本次搜尋共 ${listcount} 筆資料`
})

const ticketName = document.getElementById('ticketName');//套票名稱
const ticketImgUrl = document.getElementById('ticketImgUrl')//圖片網址
const ticketRegion = document.getElementById('ticketRegion')//景點地區
const ticketPrice = document.getElementById('ticketPrice')//套票金額
const ticketNum = document.getElementById('ticketNum')//套票組數
const ticketRate = document.getElementById('ticketRate')//套票星級
const ticketDescription= document.getElementById('ticketDescription')//套票描述
const btn = document.querySelector('.btn')
const alertMessage=`<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;

const ticketNameMessage = document.getElementById('ticketName-message');
const ticketImgUrlMessage = document.getElementById('ticketImgUrl-message');
const ticketRegionMmssage = document.getElementById('ticketRegion-message');
const ticketPriceMessage = document.getElementById('ticketPrice-message');
const ticketNumMessage = document.getElementById('ticketNum-message');
const ticketRateMessage = document.getElementById('ticketRate-message');
const ticketDescriptionMessage = document.getElementById('ticketDescription-message');

btn.addEventListener('click', e => {
  e.preventDefault();
  if (ticketName.value === "") { ticketNameMessage.innerHTML = alertMessage } else { ticketNameMessage.innerHTML = "" }
  if (ticketImgUrl.value === "") { ticketImgUrlMessage.innerHTML = alertMessage } else { ticketImgUrlMessage.innerHTML = "" }
  if (ticketRegion.value === "") { ticketRegionMmssage.innerHTML = alertMessage } else { ticketRegionMmssage.innerHTML = "" }
  if (ticketPrice.value === "") { ticketPriceMessage.innerHTML = alertMessage } else { ticketPriceMessage.innerHTML = "" }  
  if (ticketNum.value === "") { ticketNumMessage.innerHTML = alertMessage } else { ticketNumMessage.innerHTML = "" }
  if (ticketRate.value === "") { ticketRateMessage.innerHTML = alertMessage } else { ticketRateMessage.innerHTML = "" }
  if (ticketDescription.value === "") { ticketDescriptionMessage.innerHTML = alertMessage } else { ticketDescriptionMessage.innerHTML = "" }    

  let addData = {
    id: data.length,
    name: ticketName.value,
    imgUrl: ticketImgUrl.value,
    area: ticketRegion.value,
    description: ticketDescription.value,
    group: Number(ticketNum.value),
    price: Number(ticketPrice.value),
    rate: Number(ticketRate.value)
  };
  data.push(addData);
  document.querySelector('.regionSearch').value = "";
  init();

  document.querySelector('.addTicket-form').reset();
  // ticketName.value = "";
  // ticketImgUrl.value = "";
  // ticketRegion.value = "";
  // ticketDescription.value = "";  
  // ticketNum.value = "";  
  // ticketPrice.value = "";
  // ticketRate.value = "";

})