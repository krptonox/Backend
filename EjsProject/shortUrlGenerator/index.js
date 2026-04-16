const express = require('express');
const app = express();
const {router} = require('./routes/urlRoutes')
const {connection} = require('./config/db')

connection('mongodb://127.0.0.1:27017',Url_DB)
.then(
     console.log("MongoDb Connected")
)
.catch((err)=>{
    console.log(err,"Connection failed")
})

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.listen(5000,()=>{
     console.log('http://localhost:5000');
})