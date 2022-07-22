import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const questionSchema = mongoose.Schema({
    state
})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'question');
const survey = mongoose.model('question', surveySchema)

export default survey;