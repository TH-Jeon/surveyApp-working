
// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import autoIncrement from "mongoose-auto-increment";


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
      startDate: {
        type: Date,
        default: Date.now(),
      },
      EndDate: Date,
    },
    {
      collection: "surveys",
    }
  );

  autoIncrement.initialize(mongoose.connection);
//userSchema.plugin(autoIncrement.plugin, 'user');
  const SurveyModel = mongoose.model('Survey', SurveySchema);
 export default SurveyModel;
 