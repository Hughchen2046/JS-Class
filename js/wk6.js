let data = [];
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
.then(function(response){
    data = Object.values(response.data)[0] ;
    init()
})

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