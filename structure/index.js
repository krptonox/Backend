const http = require('http')
const fs = require('fs')
const url  = require('url');



const server = http.createServer((request,response) =>{
    // response.write("<h1>Lucky the Racer</h1>")
    
    // response.end("Server started Succesfully")
    switch(request.url){
        case '/':
            fs.readFile('./components/cards/home.html',jpg,(err,page)=>{
                if(err){
                    response.end();
                }
                else{
                    response.write(page);
                    response.end();
                }
            })
            break;
            case '/about':
                 fs.readFile('./components/about.html',(err,page)=>{
                if(err){
                    response.end();
                }
                else{
                    response.write(page);
                    response.end();
                }
            })
            break;

               case '/path':
                 fs.readFile('./components/path.html',(err,page)=>{
                if(err){
                    response.end();
                }
                else{
                    response.write(page);
                    response.end();
                }
            })
            break;

    }
    console.log(request.url)
}).listen(8000,'localhost',(err)=>{
    if(err) console.log(err);

    else{
        console.log("Server Started at port http://localhost:8000")
    }
})