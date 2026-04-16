const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('views'));


//Using Middleware 1 in this code
app.use((req,res,next)=>{
console.log("hello from middleware 1....");
req.name = "sonu";
//return res.json({data:"hello .....coders"})
next();
});


app.use((req,res,next)=>{
console.log("hello from middleware 2....",req.name);
next();
});

app.use((req,res,next)=>{
    req.name="Lucky Sharma Devloper"
console.log("hello from middleware 3....");
next();
});

app.get('/', (req, res) => {
    
    const student = {
        name : "Lucky Sharma",
        age  : 21,
        email : "lucky@gmail.com",
        marks : 26,
        hobbies : ["study", "astronomy", "Life Playing with me"]
    }

    // res.render('home', { name: 'knox' });
    // res.write(student);
       res.render('home', { name: student });
});

app.listen(5000, () => {
    console.log('http://localhost:5000/');
});
