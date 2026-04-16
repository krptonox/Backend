const express = require('express');
const app = express();

app.use(express.json());


app.get('/users', (req,res)=>{
  res.json(users);
})

app.get('/users/:id',(req,res)=>{
  const user = users.find(u => u.id == req.params.id);
  res.json(user);
})

app.post('/users',(req,res)=>{
   const newUser = {
    id: users.length + 1,
    name: req.body.name
   };

   users.push(newUser);
   res.json(newUser);
})

 +

app.listen(8000,()=>{
  console.log('Server is running on port 8000');
})