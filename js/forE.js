
const data = [{ charge: "免費", name: "兔寶寶充電站" }, { charge: "投幣式", name: "貓咪咖啡廳" }, { charge: "免費", name: "狗狗公園" }, { charge: "投幣式", name: "咪咪充電站" }];
const list = document.querySelector('.list');

function init() {
    let str = "";
    data.forEach(e => {
        // console.log(`${e.name},${e.charge}`)
        str += `<li>${e.name},${e.charge}</li>`;
            list.innerHTML = str;

    });


    //<li>咪咪充電站,免費 </li>
}
init();

const stationFilter = document.querySelector('.filter');
stationFilter.addEventListener('click', e => {
    if (e.target.value === 'Reset'){init(); return;}
    // console.log(e.target.value)
    let str1 = "";
    data.forEach(f => {
        if (e.target.value == f.charge) {
            str1 += `<li>${f.name},${f.charge}</li>`
        }
    })
    // console.log(str1)
    list.innerHTML = str1;
})

// console.log(stationFilter)