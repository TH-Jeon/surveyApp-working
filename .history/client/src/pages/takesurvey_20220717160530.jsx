import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useState, useEffect} from 'react';
import { getThisSurvey} from '../service/api'; 
import {  useParams } from "react-router-dom";
import DisplayQuestion from "../components/displayquestion.jsx"

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



const TakeSurvey=()=>{
   
    const [survey, setSurvey] = useState(defaultValue);
    
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


    return(
        <Container>
            <Typography variant="h4">Take Survey</Typography>
            <FormControl>
                <h2 ></h2>
                <Input onChange={(e)=>{onValueChange(e)}} name="name" value={survey.name}/>
                
                <DisplayQuestion/>
            </FormControl>
      </Container>
    )

}

export default TakeSurvey;