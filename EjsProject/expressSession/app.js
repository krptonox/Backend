const express = require('express');
const app = express();
const Session = require('express-session');
const cookie = require('cookie-parser');

//Middleware for session
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(
    Session({
        secret: "mySecretKey",
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge: 1000*60*60*24} //1 day
    })
);

app.use(cookie());

app.get('/',(req,res)=>{
    if(req.session.user){
        res.redirect('home');
    }
    app.set('view engine', 'ejs'); 
    res.render('login');
})

app.post('/login',(req,res)=>{
    const {username} = req.body;

    //create sesion for user
    req.session.user = username;
    

    res.redirect('/home');
})

app.get('/home',(req,res)=>{
    if(!req.session.user){
        return res.redirect('/');
    }
    res.render('home',{username: req.session.user});
})

app.get('/profile',(req,res)=>{
    if(!req.session.user){
        return res.redirect('/');
    }
    res.render('profile',{username: req.session.user});
})

app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.render('login')
    })
})

app.listen(5000,()=>{
    console.log('http://localhost:5000/');
})