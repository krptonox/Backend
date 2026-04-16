const { error } = require('console');
const fs = require('fs');
const file_handler = fs.openSync("create_Path","w");
console.log(file_handler)
const wr = fs.writeFileSync("create_Path","Hello ,I am Master.");
console.log(wr)
fs.closeSync

const new_File = fs.openSync("File-1","w+");
const check = fs.writeFileSync("File-1","Hello , let's Study React from Abishek Sir");

console.log(fs.readFileSync("File-1"));

console.log(fs.readFileSync("File-1",'utf-8'));

// console.log(fs.renameFileSync("File-1","utf-8"));

console.log(fs.renameSync("File-1","File-2"));

console.log(fs.appendFileSync("File-2","here is Anna"));

console.log(fs.cpSync("File-2","create_Path"));

console.log(fs.writeFile("File-1","mat kero choti bat",(error)=>{
    if(error){
    console.log("Bachpan ka Lucky")
    }
    else{
        console.log("bhagta hhua Lucky");
    }


}))

//File descriptor ->it has path of file and flag and poniter location and also known as file handler
//file pointer -> it is location of pointer from where you can write or read

fs.writeFileSync("dummy.txt","hello",{encoding:"utf-8",flag:"r",mode:""})


//user Agent 

