const bmiStatesData = {
  overThin: {
    state: "過輕",
    color: "藍色"
  },
  normal: {
    state: "正常",
    color: "紅色"
  },
  overWeight: {
    state: "過重",
    color: "澄色"
  },
  mildFat: {
    state: "輕度肥胖",
    color: "黃色"
  },
  moderateFat: {
    state: "中度肥胖",
    color: "黑色"
  },
  severeFat: {
    state: "重度肥胖",
    color: "綠色"
  }
};
//以上為資料建立

let bmiHistoryData = [] //建立BMI空陣列用於存儲,分為兩屬性BMI計算數值與info(mapping)後的值

function showHistoryData() {
  const len = bmiHistoryData.length; //BMI存儲陣列長度,用於紀錄次數
  const lastE = bmiHistoryData[len - 1]; //最後一筆BMI存儲序號
  console.log(`您總共計算 ${len}次 BMI 紀錄，最後一次 BMI 指數為 ${lastE.BMI}，${lastE.info}！`);  //列出最後一筆資料,並調出紀錄次數,陣列中最後一筆BMI值與info
}

function mapping(bmiState) {
  const e = bmiStatesData[bmiState]  //mapping用,調出bmiStatesData中物件的內容
  console.log(`您的體重${e.state}，健康指數為${e.color}`) //每次都列出於console中
  return `您的體重${e.state}，健康指數為${e.color}` //最後回傳給showHistoryData存儲用
}

function printBmi(height, weight) {
  if (typeof height !== "number" || typeof weight !== "number") return console.log("您的數值輸入錯誤，請重新輸入"); //如果輸入的內容非數字格式,則直接跳出並回覆輸入錯誤
  const BMI = (weight / ((height / 100) ** 2)).toFixed(2) //將BMI數值限制在小數點以下兩位
  if (BMI >= 35) bmiHistoryData.push({ BMI, info: mapping('severeFat') }); //關鍵,最後這個步驟是每次判斷完,便上傳資料到bmiHistoryData空陣列中,並上傳物件,屬性為BMI與info,info內容為mapping過後的字串
  else if (BMI >= 30) bmiHistoryData.push({ BMI, info: mapping('moderateFat') });
  else if (BMI >= 27) bmiHistoryData.push({ BMI, info: mapping('mildFat') });
  else if (BMI >= 24) bmiHistoryData.push({ BMI, info: mapping('overWeight') });
  else if (BMI >= 18.5) bmiHistoryData.push({ BMI, info: mapping('normal') });
  else bmiHistoryData.push({ BMI, info: mapping('overThin') });
}

printBmi(178, 20)
printBmi(178, 70)
// printBmi(178, 85)
// printBmi(178, 90)
// printBmi(178, 110)
// printBmi(178, 130)
printBmi("身高", "體重")
showHistoryData()