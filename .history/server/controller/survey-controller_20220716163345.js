import Survey from '../schema/survey-schema.js';

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

  export const getSurvey = async(request, response)=>{
    try{
     const surveys= await User.find({});
     response.status(200).json(users);
    }catch(error){
      response.status(404).json({message: error.message});
    }
  }