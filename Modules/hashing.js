// const crypto = require("crypto");

// const hash = crypto
//   .createHash("sha256")
//   .update("ghost123")
//   .digest("hex");

// console.log(hash);

// const beforeexe = Date.now();
// for(let i=0;i<100;i++){
// crypto.pbkdf2Sync("passworoijkhugjyfjkhjghfdsghjhkjlkiojkuh,gtgfdrfsvdfhghujijkh,ngfngtdrsd","salt",10000,512,"sha512");
// }

// crypto.pbkdf2("password","salt",10000,512,"sha512",(err)=>{
//    console.log(err);
// });

// crypto.pbkdf2("password","salt",10000,512,"sha512",(err)=>{
//    console.log(err);
// });


// console.log(Date.now()-beforeexe);

const event  = require("events");
const eventEmitter = new event.EventEmitter;

const eventhandler = ()=>{
    console.log("Survive with bear grylls");
};
eventEmitter.on("order_Pizza",()=>{
    console.log("fahhhhhhhhhhhhh");
})

eventEmitter.emit('order_Pizza');
