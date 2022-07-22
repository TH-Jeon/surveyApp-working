// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a schema for collection
const QuestionSchema = new Schema({
   statement:String
},
{
    collection: "question"
});

const Model = mongoose.model('Question', QuestionSchema);
export default Model;