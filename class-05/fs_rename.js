const http = require('http');
const fs   = require('fs');

http.createServer((req,res)=> {

    if(req.url == '/'){
        fs.rename('demo.txt','demo.html',(error)=> {
            if(!error){
                res.writeHead(200,{'Content-type':'text/html'});
                res.write('<h1>File Rename Successfully</h1>');
                res.end()
            }else{
                res.writeHead(200,{'Content-type':'text/html'});
                res.write('<h1>File Rename Fail</h1>');
                res.end()
            }
        })
    }

}).listen(8080);

console.log('Server run');