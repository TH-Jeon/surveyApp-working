import Question from '../schema/question-schema';

export const addTfQuestion = async(request, response)=>{
    const question = request.body;
    const newQuestion = new Question(question);
    try{
     await newQuestion.save();
     response.status(201).json(newSurvey);
    }catch(error){
      response.status(409).json({message: error.message});
    }
  } 
