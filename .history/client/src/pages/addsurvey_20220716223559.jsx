import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import StatementInput from '../components/statementinput.jsx';
import { useHistory } from "react-router-dom";
import {addSurvey} from '../service/api'; 


import './addsurvey.css';

const defaultValue={
  statement:' '
}



function AddSurvey() {
 
   
    const [surveyTitle, setSurveyTitle] = useState("");
    const history = useHistory();

    const onValueChangeTitle=(e)=>{
      //console.log(e.target.name, e.target.value)
      setSurveyTitle(e.target.value);
      //console.log(surveyTitle);
      
   }
   
    
    
  const addSurveyDetails=async()=>{
    let data = {
      "name": surveyTitle,
     // "questionArray": tfQuestions
  }
  //console.log(tfQuestions);
  console.log(data);

  await addSurvey(data);
  history.push("/allsurvey");
}


  return (
    <div>
    <Form  className="center">
        <Form.Group className="mb-3" >
        <Form.Label>Survey Name</Form.Label>
        <Form.Control type="text" name="name" onChange={(e)=>{onValueChangeTitle(e)}}/>
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