import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {addSurvey} from '../service/api'; 


import './addsurvey.css';

const defaultValue={
  statement:' '
}



function AddSurvey() {
    const [survey, setSurvey] = useState( );
    const history = useHistory();

    const onValueChange=(e)=>{
     
      setSurvey({...survey, [e.target.name]: e.target.value});
   }
   
    
    
  const addSurveyDetails=async()=>{
  await addSurvey(survey);
  history.push("/allsurvey");
}


  return (
   
  );
}

export default AddSurvey;