const http = require('http')

const server = http.createServer((request,response) =>{
    response.end("Server started Succesfully")
    console.log(request)
})

server.listen(8000,'localhost',(err)=>{
    if(err) console.log(err);

    else{
        console.log(`Server Started at port ${8000}`)
    }
})

//header
//URL
//Status Code
