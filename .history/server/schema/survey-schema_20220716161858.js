import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
import Question from "./question-schema";

const surveySchema = mongoose.Schema({
    name:String,
    question: [{statement: String, optio}]
})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'survey');
const survey = mongoose.model('survey', surveySchema)

export default survey;