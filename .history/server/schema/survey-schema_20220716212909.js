
// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;



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
  const Model = mongoose.model('Response', ResponseSchema);
export default Model;
  module.exports = mongoose.model("Survey", SurveyModel);