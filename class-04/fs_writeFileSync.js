const http = require('http');
const fs   = require('fs');

http.createServer((req, res)=>{

    if(req.url == '/'){
      let err =  fs.writeFileSync('demo.txt','<h1>Hello Write File Sync</h1>');
      if(!err){
        res.writeHead(200, {"Content-type":"text/html"});
        res.write('Write File Successfully');
        res.end()
      }else{
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('File Write Fail');
        res.end()
      }
    }

}).listen(8080);

console.log("Server run success");