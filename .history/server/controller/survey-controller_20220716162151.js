import Survey from '../schema/survey-schema.js';

export const addSurvey = async(request, response)=>{
    const survey = request.body;
    const newSurvey = new Survey(user);
    try{
     await newUser.save();
     response.status(201).json(newUser);
    }catch(error){
      response.status(409).json({message: error.message});
    }
  } 