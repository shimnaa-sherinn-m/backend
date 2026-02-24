import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})

export default mongoose.models.users||mongoose.model('Users',userSchema)