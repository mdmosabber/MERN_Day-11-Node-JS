const http = require('http');
const fs   = require('fs');

http.createServer((req, res)=> {

    if(req.url == '/'){
      
        let error = fs.renameSync('demo.txt','index.html');

        if(!error){
            res.writeHead(200,{'Content-type':'text/html'});
            res.write('<h2>File Rename Success</h2>');
            res.end();
        }else{
            res.writeHead(200,{'Content-type':'text/html'});
            res.write('<h2>File Rename Success</h2>');
            res.end();
        }
    }

}).listen(8080);
console.log('Server Run Success');