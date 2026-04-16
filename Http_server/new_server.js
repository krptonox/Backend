const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    const log = `${new Date()}: ${req.url}New Req Recceived\n`
     fs.appendFile('log.txt',log,(err,data) =>{
        switch(req.url){
            case '/': res.end("Home Page");
            break
            case '/about':res.end("About Page");
            break
            default: res.end("404 not found")
        }
     })
});
const url = `http://localhost:8000`;

myServer.listen(8000,()=>{
    console.log(url)
});