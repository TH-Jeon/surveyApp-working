import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {addSurvey} from '../service/api'; 


import './addsurvey.css';

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`


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
    <Container>
    <Typography variant="h4">Add Survey</Typography>
    <FormControl>
        <InputLabel >SurName</InputLabel>
        <Input onChange={(e)=>{onValueChange(e)}} name="name"/>
    </FormControl>
    <FormControl>
    <Button variant="contained" onClick={()=>addSurveyDetails()}>Add</Button>
    </FormControl>
</Container>
   
  );
}

export default AddSurvey;