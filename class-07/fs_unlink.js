const http = require('http');
const fs   = require('fs');

http.createServer((req,res)=> {
    if(req.url == '/'){
 
        fs.unlink('index.html',(error)=> {
            if(!error){
                res.writeHead(200,{'Content-type':'text/html'});
                res.write('<h1>File Delete Success</h1>');
                res.end();
            }else{
                res.writeHead(200,{'Content-type':'text/html'});
                res.write('<h1>File Delete Fail</h1>');
                res.end();
            }
        })

    }
}).listen(8080);
console.log('Server run success');