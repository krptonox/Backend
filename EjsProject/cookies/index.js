const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Cookies parser")
})

app.get('/setcookie',(req,res)=>{
    res.cookie('biscuit','Hi I am a cookie',{
        httpOnly:true,
        secure:false,
        maxAge:1000*60*60*24
    })
     res.send("Cookies parser seted up")
    console.log("Cookie setup is complete")
})

app.get('/getcookie',(req,res)=>{
    const data = req.cookies.biscuit;
    if(data){
        res.send(`Cookie value: ${data}`);
    }
    else{
        console.log("No cookie found");
        res.send("No cookie found");
    }
})

app.get('/clearcookie',(req,res)=>{
    res.clearCookie('biscuit');
    res.send("Cookie cleared");
})

app.listen(5000,(err)=>{
    if(err){console.log(err)}
    console.log('http://localhost:5000/');
})