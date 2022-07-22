import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const sSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String
})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
const user = mongoose.model('user', userSchema)

export default user;