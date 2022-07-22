
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
  const SurveyModel = mongoose.model('Survey', SurveyModel);
export default SurveyModel;
 