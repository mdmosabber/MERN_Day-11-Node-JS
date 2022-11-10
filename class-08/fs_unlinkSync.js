const http = require('http');
const fs   = require('fs');

http.createServer((req, res)=> {
    if(req.url == '/'){
       let error = fs.unlinkSync('index.txt');
       if(!error){
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write('File Delete Successfully');
            res.end()
       }else {
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write('File Delete Fail');
            res.end()
       }
    }
}).listen(8080);

console.log('Server run')