// let chart = c3.generate({
//     bindto: '#chart',  // 綁定的 HTML 元素
//     data: {
//       columns: [
//         ['data1', 30, 200, 100, 400, 150, 250],  // 資料陣列，第一個字串為該資料的名稱
//         ['data2', 50, 20, 10, 40, 15, 25]
//       ],
//       type : 'bar',  // 可以使用 type 屬性調整想呈現的圖表類型（圓餅圖、長條圖 ..等）
//     }
// });

// 可以到這邊參考各類圖表使用方式：https://c3js.org/examples.html
// 這邊可以觀看各個屬性運用：https://c3js.org/reference.html

let chart = c3.generate({
    bindto: '#chart',  // 綁定的 HTML 元素
    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2021-01-15', '2021-01-16', '2021-01-17', '2021-01-18', '2021-01-19', '2021-01-20'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['大翰', 60, 50, 80, 90, 67, 80],
            ['小寶', 90, 70, 50, 68, 80, 90]
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
});
let chart2 = c3.generate({
    bindto: document.getElementById('chart2'),
    size:{width:700},
    data:{
        columns:[
            ['鬼屋',10],
            ['女僕咖啡廳',20],
            ['童話世界',5],
        ],
        type:'donut',
        colors:{
            鬼屋: '#E68618',
            女僕咖啡廳:'#F280CA',
            童話世界:'#26BFC7',
        }
    },
    donut:{
        title:"園遊會主題票選"
    }
});
