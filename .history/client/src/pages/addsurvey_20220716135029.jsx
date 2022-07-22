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

              <div 
                onClick={createEmptyTFQuestion}
                className="sm:w-3/4 w-[90%] m-3 p-2 bg-sky-50 hover:bg-azure-100 inline-flex flex-row 
                    items-center rounded-3xl border-2 border-baby-blue/30 hover:border-azure/30
                    transition-all opacity-50 hover:opacity-70">

                <div className="sm:min-w-[90%] min-w-[80%] inline-flex flex-col items-start">
                    <p className="mx-2 mt-1 font-semibold text-xl">
                        What is your question?
                    </p>
                    <input  className="sm:m-4 my-4 p-4 h-13 sm:w-3/5 w-4/5 rounded-xl outline-none" 
                            type="text" 
                            name="question-input" 
                            placeholder="Your question here"
                            disabled
                    />
                </div>

                <img src={logo} alt="add" className="sm:max-w-[10%] max-w-[20%]"/>

            </div>


        </>
  );
}

export default AddSurvey;