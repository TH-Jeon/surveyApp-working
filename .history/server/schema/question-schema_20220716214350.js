// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a schema for collection
const QuestionSchema = new Schema(
    {
        //QuestionId: String
        QuestionText: String,
       
        SurveyId: {
          type: Schema.Types.ObjectId,
          ref: "Survey",
        },
      },
      {
        collection: "questions",
      }

);

const QuestionModel = mongoose.model('Question', QuestionSchema);
export default QuestionModel;