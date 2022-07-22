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

  export const getQues = async(request, response)=>{
    try{
     const surveys= await Survey.find({});
     response.status(200).json(surveys);
    }catch(error){
      response.status(404).json({message: error.message});
    }
  }