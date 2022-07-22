import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const questionSchema = mongoose.Schema({
    name:String,
    question:[]
})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'surv');
const survey = mongoose.model('survey', surveySchema)

export default survey;