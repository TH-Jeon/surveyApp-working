
// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import QuestionModel from './question-schema';


const SurveyModel = mongoose.Schema(
    {
     
      Title: String,
    
      QuestionIds: [
        {
          type: Schema.Types.ObjectId,
          ref: "Question",
        },
      ], 
      IsActive: Boolean,
      StartDate: {
        type: Date,
        default: Date.now(),
      },
      EndDate: Date,
    },
    {
      collection: "surveys",
    }
  );
  
  module.exports = mongoose.model("Survey", SurveyModel);