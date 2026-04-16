const express = require('express');
const app = express();
const user = require('./users_400.json');
const fs = require('fs');
// const errorHandler = require('./middleware/error');

app.get('/',(req,res)=>{
    res.send("Welcome to home page!")
});

app.get('/users',(req,res)=>{
    res.json(user);
})

app.get('/data',(req,res)=>{
    const html = 
    `<ul>
    ${user.map((user => `<li>${user.name}</li>`)).join(" ")};
    </ul>`
    res.send(html);
})


app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    console.log(id);
    const userId = user.find((u)=>u.id === id);
    res.json(userId)
})



app.post('/api/users',(req,res)=>{
    //using mongoDb
    //or using postman
    const newData =  {
    "id": 1,
    "name": "Kaluu Trijal",
    "email": "user1@example.com",
    "address": {
      "street": "1 Main Street",
      "city": "City 1",
      "state": "State 1",
      "zip": "10001"
    },
    "contact": {
      "phone": "+91-9000000001",
      "alternatePhone": "+91-8000000001"
    }
  }
  fs.appendFileSync('AppendedFile.txt',`${JSON.stringify(newData)}`,(err)=>{
    if(err){
        console.log(err);
    }
  })

  res.json(newData);
  

})

app.put('/api/users/:id',(req,res)=>{
    //with mongodb or postman
})

app.delete('/api/users/:id',(req,res)=>{

})


// app.use((req,res, next)=>{
//     const error = new Error("Page not found");
//     error.statusCode = 404;
//     error.status = "Fail";
//     next(error);
// })
// app.use(errorHandler);


app.listen(4000,()=>{
    console.log('http://localhost:4000/');
});