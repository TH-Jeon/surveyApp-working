
// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;



const SurveySchema = mongoose.Schema(
    {
     
      name: String,
    
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
  const SurveyModel = mongoose.model('Survey', SurveySchema);
 export default SurveyModel;
 