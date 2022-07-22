import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";


const surveySchema = mongoose.Schema({
    name:String,
    question: [{statement: String}]
})
autoIncrement.initialize(mongoose.connection);
surveySchema.plugin(autoIncrement.plugin, 'survey');
const survey = mongoose.model('survey', surveySchema)

export default survey;