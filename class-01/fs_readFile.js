const http = require('http');
const fs   = require('fs');

http.createServer((req, res)=> {

    if(req.url == '/'){
        fs.readFile('index.html', (err, data)=> {
            if(!err){
                res.writeHead(200,{'Content-type': 'text/html'});
                res.write(data);
                res.end();
            }else{
                res.writeHead(200,{'Content-type': 'text/html'});
                res.write('<h1>Not Found</h1>');
                res.end(); 
            }

        });
    }
    
}).listen(8080);
console.log('Server run success');