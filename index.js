//var name = "Eric"
//console.log(name);


//const http = require("http"); 
//http.createServer((req,res) => {
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.end('Aloha world');
//}).listen(process.env.PORT || 3000);



const http = require("http")
http.createServer((req,res) => {
    var path = req.url.toLowerCase();    
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            //res.end('Willy Home page');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
        //default:
            //res.writeHead(404, {'Content-Type': 'text/plain'});
            //res.end('Not found');
            //break;
    }    
}).listen(process.env.PORT || 3000);
