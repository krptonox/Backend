const lucky = new Object;
lucky.username = "Lucky the Racer";
console.log(lucky.username);

const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello welcome from home page")

})
app.get("/home",(req,res)=>{
    res.send("Hello welcome from home epage")
   
})
app.get("/about",(req,res)=>{
    res.send("Hello welcome from about epage")
   
})
app.get("/search",(req,res)=>{
    console.log(req.query)
    res.send("hello search Result saved "+ req.query.key)
})
app.get("/conatct",(req,res)=>{
    res.send("Hello welcome from contact epage")
    `<h1>ye hai About page or niche hai link </h1>`

})
app.use((req,res)=>{
    res.status(404).send("404 not found")
   
})

console.log(`http://localhost:8000`);
app.listen(8000);



