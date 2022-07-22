import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { useHistory } from "react-router-dom";
import {addSurvey} from '../service/api'; 


import './addsurvey.css';





function AddSurvey() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setSmShow(false);
    const handleClose2 = () => setLgShow(false);
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
  <h1>2</h1>
  );
}

export default AddSurvey;