let sheet = [];

axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) {
    // console.log(response)
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
    let ary = response.data;
    console.log(ary);
    console.log(ary[0].name);
    document.querySelector('.title').textContent = `${ary[0].name}`
    sheet = ary;
  })

  console.log(sheet) //axios非同步觀念,在網頁上會看到先執行這行程式,才會回去執行function內的程式

