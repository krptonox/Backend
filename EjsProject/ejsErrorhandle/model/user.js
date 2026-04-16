import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {value: String, required:true, unique},
    password: {value: String, required:true, unique}
})
const User = mongoose.model('User',userSchema);
export {User};