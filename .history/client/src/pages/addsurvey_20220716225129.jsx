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
    <Container>
    <Typography variant="h4">add user</Typography>
    <FormControl>
        <InputLabel >Name</InputLabel>
        <Input onChange={(e)=>{onValueChange(e)}} name="name"/>
    </FormControl>
    <FormControl>
        <InputLabel>phone</InputLabel>
        <Input  onChange={(e)=>{onValueChange(e)}} name="phone"/>
    </FormControl>
    <FormControl>
        <InputLabel>email</InputLabel>
        <Input  onChange={(e)=>{onValueChange(e)}} name="email"/>
    </FormControl>
    <FormControl>
    <Button variant="contained" onClick={()=>addUserDetails()}>Add</Button>
    </FormControl>
</Container>
   
  );
}

export default AddSurvey;