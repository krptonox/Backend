const fs = require("fs");
const os = require("os");

// //Synchronus method --- Blocking R eq
// fs.writeFileSync('./test.txt',"Welcome to Fight Club!!! in synchronus way");

// //Asynchronus method for same file path for synchronus
// fs.writeFile('./test .txt',"Welcome to Fight Club!!! in Asynchronus way but same file name",(err) =>{
//     console.log(err)
// });

// //Asynchronus method --- Non-Blocking Req
// fs.writeFile('./test1 .txt',"Welcome to Fight Club!!! in Asynchronus way but in diff file named",(err) =>{
//     console.log(err)
// });


//Reading file Synchronus 
// const result = fs.readFileSync('./to_Read_file.txt',"utf-8");

// console.log(result);

//Reading file ASynchronusly it expects a Call-Back
// fs.readFile('./to_Read_file.txt',"utf-8",(err,result) =>{
//     if(err){
//         console.log("Error")
//     }
//     else{
//         console.log(result);
//     }
// });


//Append data on  file Synchronusly
// fs.appendFileSync('./test.txt'," Appened data using Append file on same file in Synchronus way")


//Append data on  file ASynchronusly
// fs.appendFile('./test.txt'," Appened data using Append file on same file in ASynchronus way",(err) =>{
//     console.log(err)
// })

//Copy file data in one to other Synchronusly
// fs.copyFileSync('./test.txt', './copy.txt')


//Copy file data in one to other ASynchronusly
// fs.copyFile('./test .txt','./copy3.txt',(err)=>{
//     console.log("error")
// })

//Delete a file 
// fs.unlinkSync('./copy3.txt')

//to check status of file
console.log(fs.statSync("test.txt").isFile())

//Creating a folder using file module
// fs.mkdirSync("my-docs");

console.log(os.cpus().length);