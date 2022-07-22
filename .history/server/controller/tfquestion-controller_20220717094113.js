import Question from '../schema/question-schema';

export const addSurvey = async(request, response)=>{
    const survey = request.body;
    const newSurvey = new Survey(survey);
    try{
     await newSurvey.save();
     response.status(201).json(newSurvey);
    }catch(error){
      response.status(409).json({message: error.message});
    }
  } 
