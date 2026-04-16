const mongoose = require('mongoose');

async function connection(){
   return mongoose.connection(url)
}

module.exports={connection}