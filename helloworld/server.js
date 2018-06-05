var http = require('http'), //http呼び出し  
    fs = require('fs');
var server = http.createServer();　//httpのcreateServerを呼び出して、serverと名付ける
var settings = require('./settings');
var msg;

//on はイベントと結びつけるもの
//'request'は名前,function(req,res)はコールバック関数
//コールバック関数とはserver.onが呼ばれたら実行されるもの
server.on('request',function(req,res){
    fs.readFile(__dirname + '/public_html/hello.html','utf-8',function(err,data){
       if(err) {
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.write("not found");
            return res.end();
            }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
});
server.listen(settings.port,settings.host);
console.log("server listening.....");