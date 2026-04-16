const mongoose = require('mongoose');

const usermodel = new mongoose.Schema({
    shortUrl:{type:String, require:true, unique:true},

    generatedUrl:{type:String, require:true, unique:true}
},{
    timestamps:true
});




export const  UserModel = mongoose.model("UserModel",usermodel);