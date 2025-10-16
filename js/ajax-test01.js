const http = require("http");

http.createServer(function(request, response){
    console.log(request.url);
    if (request.url == '/'){
        console.log('接收到網頁請求!');
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>index</h1>");
        response.end();
    } else {
        console.log('接收到網頁請求!');
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>not index</h1>");
        response.end();        
    }
}).listen(process.env.PORT ||5500);
console.log("Server已開啟port: 5500.")
