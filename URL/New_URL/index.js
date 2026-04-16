const fs = require("fs");
const http = require("http");
const url = require("url");

// const myUrl = "http://alibaba.com/user?name=kirmada&id=123";
// const parsurl = url.parse(myUrl,true);

// console.log(parsurl.hostname)

const serever = http.createServer((req,res)=>{
    if(req.url === "/favicon.io") return res.end();
    const log = `${Date.now()}: ${req.url} New Request Recieved\n`;
    const myurl = url.parse(req.url,true)
    console.log(myurl)
    fs.appendFile("newServer.txt",log,'utf-8',(err,data)=>{
          switch(myurl.pathname){
            case '/': res.end("Home Page");
            break
            case '/about':res.end("About Page");
            break
            case "/search":
                const search = myurl.query.search_query;
                res.end("here are your results for "+ search)
                break
            default: res.end("404 not found")
        }
    })
    res.end("Welcome to the fight club!!")
}).listen(8000,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(`http://localhost:8000`)
        }
})