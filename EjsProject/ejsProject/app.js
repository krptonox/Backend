const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://127.0.0.1:27017/myDb')
.then(()=>{
    console.log("Connected to Databse Successfully....")
})
.catch((err)=>{
    console.log(err,"Connection lost to database....")
})

const newSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true, unique:true},
    number: {type: Number, required: true, unique: true}
})

const User = mongoose.model("User", newSchema);

app.post('/user', async (req,res)=>{
    try {
        const data = req.body;
        const user = await User.create(data);
        res.json(user);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
})



app.get('/',(req,res)=>{
    res.send('hello Animesh')
})

app.listen(5000,()=>{
    console.log('http://localhost:5000/');
})