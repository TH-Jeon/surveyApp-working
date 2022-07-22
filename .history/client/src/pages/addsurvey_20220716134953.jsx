import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import StatementInput from '../components/statementinput.jsx';
import { useHistory } from "react-router-dom";
import {addSurvey} from '../service/api'; 


import './addsurvey.css';





function AddSurvey() {
 
    const [tfQuestions, setTfQuestions]= useState([]);
    const [surveyTitle, setSurveyTitle] = useState("");
    const history = useHistory();

    function createEmptyTfQuestion(){
      tfQuestions.push({"statement" : ""})
      setTfQuestions([...tfQuestions]);
  }

  function updateTFQuestion(newQuestion, index){
    tfQuestions[index].statement = newQuestion
    setTfQuestions(tfQuestions);
}

  const addSurveyDetails=async()=>{
    let data = {
      "name": surveyTitle,
      "questions": tfQuestions
  }
  await addSurvey(data);
  history.push("/allsurvey");
}


  return (
    <>
    <p>
    What is your survey's title?
     </p>
        <input type="text" 
        className="sm:m-4 my-4 p-4 h-13 sm:w-3/5 w-full rounded-xl outline-none"
        name="question-input"
        placeholder="Your surveys title"
        value={surveyTitle}
        onChange={event => {
            setSurveyTitle(event.target.value);
            console.log(event.target.value);
        }} />

        <div className="sm:w-3/4 w-[90%] mx-auto">{
                tfQuestions?.map((question, index) =>(
                    <StatementInput 
                        key={index}
                        statement={question.statement}
                        onChange={event => {
                            updateTFQuestion(event.target.value, index);
                        }}
                    />
                ))
            }</div>

            


        </>
  );
}

export default AddSurvey;