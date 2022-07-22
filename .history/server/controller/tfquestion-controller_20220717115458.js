import Question from '../schema/question-schema.js';

export const  addTfQuestion = async(request, response)=>{
    const question = request.body;
    const newQuestion = new Question(question);
    try{
     await newQuestion.save();
     response.status(201).json(newQuestion);
    }catch(error){
      response.status(409).json({message: error.message});
    }
  } 

  export const getQuestion = async(request, response)=>{
    try{
        let surveyID = request.params.id;
     const questions= await Question.find({});
     response.status(200).json(questions);
    }catch(error){
      response.status(404).json({message: error.message});
    }
  }