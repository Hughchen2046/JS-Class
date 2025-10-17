let answer = {}; // 請把修改完的資料存入 answer 物件。
let url = "https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json";
axios.get(url)
  .then(function(response) {
    let total = {};
    let data = response.data;
    // console.log(data[16].jsGroup);
    data.forEach(function(item, i) {
      if(total[item.jsGroup] === undefined) {
        total[item.jsGroup] = 1;
        // console.log(`未分組人數${total[item.jsGroup]}` )
      } else {
        total[item.jsGroup] += 1;
      }
    });
 
    // 將整理好的 total 資料調整成圖中的格式存入 answer 中
    /* 程式碼開始 */
    Object.keys(total).forEach(e => {
      const num = Number(e);
      if (Number.isNaN(num) === false ){answer[`第${e}組人數`] = total[e]}
      else{      
      answer[`${e}人數`] = total[e]
    };
    })

    /* 程式碼結束 */
    
    console.log(answer);
  });
