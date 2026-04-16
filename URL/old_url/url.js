const http = require('http')
const fs = require('fs')
const url  = require('url');

const myUrl = "http://alibaba.com/user?name=kirmada&id=123";
const parsurl = url.parse(myUrl,true);

const server = http.createServer((request,response) =>{
    response.write("<h1>Lucky the Racer</h1>")
    console.log(request.url)
    const da = new Date();
    console.log(da)
    response.write(`<h1>${da}</h1>`)
    fs.appendFile("serverlog.txt",`${da} ${request.url}`,'utf8',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("KIRMADA ZINDABAD")
        }
    })
    response.end("Server started Succesfully")
}).listen(8000,'localhost',(err)=>{
    if(err) console.log(err);

    else{
        console.log("Server Started at port http://localhost:8000")
    }
})


// console.log(parsurl.hostname)