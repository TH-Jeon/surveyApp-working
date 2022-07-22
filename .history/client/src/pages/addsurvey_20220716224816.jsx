import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
    <div>
    <Form  className="center">
        <Form.Group className="mb-3" >
        <Form.Label>Survey Name</Form.Label>
        <Form.Control type="text" name="name" onChange={(e)=>{onValueChange(e)}}/>
        <Form.Text className="text-muted" >
          create a name for your survey!
        </Form.Text>
        </Form.Group>

        <br/><Button variant="primary" type="submit" onClick={()=>addSurveyDetails()} >Submit</Button> 
    </Form>
    </div>
  );
}

export default AddSurvey;