//階段一
function printBmi(height, weight) {
    const bmi = (weight / ((height / 100) ** 2));
    if (bmi < 18.5) console.log("您的體重過輕");
    else if (bmi < 24) console.log("您的體重正常");
    else if (bmi < 27) console.log("您的體重過重");
    else if (bmi < 30) console.log("您的體重輕度肥胖");
    else if (bmi < 35) console.log("您的體重中度肥胖");
    else if (bmi >= 35) console.log("您的體重重度肥胖");
    else console.log("您的數值輸入錯誤，請重新輸入");
}
console.log("階段一")
printBmi(178, 20)
printBmi(178, 70)
printBmi(178, 85)
printBmi(178, 90)
printBmi(178, 110)
printBmi(178, 130)
printBmi("身高", "體重")
// 體重過輕	BMI ＜ 18.5
// 正常範圍	18.5≦BMI＜24
// 過重	24≦BMI＜27
// 輕度肥胖	27≦BMI＜30
// 中度肥胖	30≦BMI＜35
// 重度肥胖	BMI≧35
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

//階段二
const bmiStatesData = {
  "overThin": {
    "state": "過輕",
    "color": "藍色"
  },
  "normal": {
    "state": "正常",
    "color": "紅色"
  },
  "overWeight": {
    "state": "過重",
    "color": "澄色"
  },
  "mildFat": {
    "state": "輕度肥胖",
    "color": "黃色"
  },
  "moderateFat": {
    "state": "中度肥胖",
    "color": "黑色"
  },
  "severeFat": {
    "state": "重度肥胖",
    "color": "綠色"
  },
}

function printBmi2(height2, weight2) {
    let bmi2 = (weight2 / ((height2 / 100) ** 2));
    let bmiStatus2 = "";
    if (typeof height2 !== "number" || typeof weight2 !== "number") return console.log("您的數值輸入錯誤，請重新輸入");
    if (bmi2 < 18.5) bmiStatus2 = "overThin";
    else if (bmi2 < 24) bmiStatus2 = "normal";
    else if (bmi2 < 27) bmiStatus2 = "overWeight";
    else if (bmi2 < 30) bmiStatus2 = "mildFat";
    else if (bmi2 < 35) bmiStatus2 = "moderateFat";
    else bmiStatus2 = "severeFat";
    console.log(`您的體重${bmiStatesData[bmiStatus2].state}，健康指數為${bmiStatesData[bmiStatus2].color}`)
}
console.log("階段二")
printBmi2(178, 20)
printBmi2(178, 70)
printBmi2(178, 85)
printBmi2(178, 90)
printBmi2(178, 110)
printBmi2(178, 130)
printBmi2("身高", "體重")

//階段三
let bmiHistoryData = [];
function printBmi3(height3, weight3) {
    let bmi3 = (weight3 / ((height3 / 100) ** 2)).toFixed(2);
    let bmiStatus3 = "";
    if (typeof height3 !== "number" || typeof weight3 !== "number") return console.log("您的數值輸入錯誤，請重新輸入");
    if (bmi3 < 18.5) bmiStatus3 = "overThin";
    else if (bmi3 < 24) bmiStatus3 = "normal";
    else if (bmi3 < 27) bmiStatus3 = "overWeight";
    else if (bmi3 < 30) bmiStatus3 = "mildFat";
    else if (bmi3 < 35) bmiStatus3 = "moderateFat";
    else bmiStatus3 = "severeFat";
    console.log(`您的體重${bmiStatesData[bmiStatus3].state}，健康指數為${bmiStatesData[bmiStatus3].color}`);
    bmiHistoryData.push({ bmi: bmi3, state: bmiStatesData[bmiStatus3].state, color: bmiStatesData[bmiStatus3].color });
}
function showHistoryData() {
    const obj = bmiHistoryData.length;
    console.log(`您總共計算 ${obj} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[obj - 1].bmi}，體重${bmiHistoryData[obj - 1].state}！健康指數為${bmiHistoryData[obj - 1].color}！`)
}
console.log("階段三")
printBmi3(178, 20)
printBmi3(178, 70)
printBmi3(178, 85)
showHistoryData()