
// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import QModel from './question-schema';

// create a schema for collection
const SurveySchema = new Schema({
    name: String,
    owner: String,
    surveyId: Schema.Types.ObjectId,
    questionArray: [Question],
    isActive: Boolean,
    startDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date,
    }
},
{
    collection: "surveys"
});

const Model = mongoose.model('Survey', SurveySchema);
export default Model;