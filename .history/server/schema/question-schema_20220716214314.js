// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a schema for collection
const QuestionSchema = new Schema(
    
});

const QuestionModel = mongoose.model('Question', QuestionSchema);
export default QuestionModel;