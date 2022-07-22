import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useState, useEffect} from 'react';
import {editSurvey, getThisSurvey} from '../service/api'; 
import { useHistory, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`
const defaultValue={
    name:''
    
}


const EditSurvey=()=>{
    
    const [survey, setSurvey] = useState(defaultValue);
    const history = useHistory();
    const {id} = useParams();
    
    useEffect(()=>{
        loadSurveyDetails();
    },[])
    
    const loadSurveyDetails =async()=>{
        const response = await getThisSurvey(id);
        setSurvey(response.data);
    }

    const onValueChange=(e)=>{
        //console.log(e.target.name, e.target.value)
        setSurvey({...survey, [e.target.name]: e.target.value});
       // console.log(user);
     }

     const editSurveyDetails=async()=>{
        await editSurvey(survey, id);
        history.push("/allsurvey");
     }

    return(
        <Container>
            <Typography variant="h4">Edit Survey</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} name="name" value={survey.name}/>
            </FormControl>
            
            <Button variant="warning" onClick={() => setSmShow(true)} className="me-2">
        Create a T/F question
      </Button>

      <Button variant= "success" onClick={() => setLgShow(true)}>Create a multiple choice question</Button>
      </Container>
}

export default EditSurvey;