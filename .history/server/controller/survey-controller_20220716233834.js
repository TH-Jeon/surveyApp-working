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
     const surveys= await Survey.find({});
     response.status(200).json(surveys);
    }catch(error){
      response.status(404).json({message: error.message});
    }
  }

  export const deleteSurvey = async(request, response)=>{
    try{
     await Survey.deleteOne({_id: request.params.id});
     response.status(200).json({message:'Survey deleted successfully.'});
    }catch(error){
      response.status(409).json({message:error.message});
    }

  }

  export const getThisSurvey = async(request, response)=>{
  
    try{
     // const user= await User.find({_id: request.params.id});
      const survey = await Survey.findById(request.params.id);
      response.status(200).json(survey);
     
     }catch(error){
       response.status(404).json({message: error.message});
     }
  }
  
  export const editSurvey = async(request, response)=>{
    let user = request.body;
    const editUser = new User(user);
    try{
      await User.updateOne({_id:request.params.id}, editUser);
      response.status(201).json(editUser);
    }catch(error){
      response.status(409).json({message:error.message});
    }
  }