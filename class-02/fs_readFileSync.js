const http = require('http');
const fs   = require('fs');

http.createServer((req,res)=> {
    if(req.url == '/'){

      let data =  fs.readFileSync('index.html');
      res.writeHead(200,{'Content-ype':'text/html'});
      res.write(data);
      res.end();
        
    }
}).listen(8080);