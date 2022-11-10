const http = require('http');
const fs   = require('fs');


http.createServer((req, res) => {

        if(req.url == '/'){
            fs.exists('index.html',(error)=> {
                if(error){
                    res.writeHead(200,{'content-type': 'text/html'});
                    res.write('File exist');
                    res.end();
                }else{
                    res.writeHead(200,{'content-type': 'text/html'});
                    res.write('File not exist');
                    res.end();
                }
            })
        }

}).listen(8080);
console.log('Server Run');