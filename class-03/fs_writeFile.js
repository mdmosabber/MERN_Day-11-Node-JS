const http = require('http');
const fs   = require('fs');

http.createServer((req, res)=> {

    if(req.url == '/'){
        fs.writeFile('demo.txt','<h1>Hello World Write By Node JS</h1>',(err)=> {
            if(!err){
                res.writeHead(200, {"Content-type": "text/html"});
                res.write('<h1>File Write Success</h1>');
                res.end()
            }else{
                res.writeHead(200,{'Content-type': 'text/html'});
                res.write('<h1>File Write Fail</h1>');
                res.end()
            }
        })
    }

}).listen(8080);
console.log('File Run Success');