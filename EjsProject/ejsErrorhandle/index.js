import express from 'express';
import bcrypt from 'bcrypt';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect('mongodb://127.0.0.1:27017/')
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}))


app.get('/register',(req,res) => {
    res.render('register');
})

app.post('/register',(req,res) => {
    let {Uname,Upass} = req.body;
    console.log(req.body);
    bcrypt.hash(Upass,10,async (err,hash) =>{
        let u1 = new User({username:Uname,password:hash})
        await u1.save();
        console.log("User Registered !!");
    })
    res.send("User Registered");
})

app.use('/', (req,res) => {
    res.send("hello from express server");
})

app.listen(5000, () => {
    console.log('http://localhost:5000/');
});