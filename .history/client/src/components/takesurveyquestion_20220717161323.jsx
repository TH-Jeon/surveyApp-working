import{useEffect, useState} from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell, styled, Button} from "@mui/material";
import{getQuestion, deleteQuestion} from'../service/api.js';
import{Link} from 'react-router-dom';
import {  useParams } from "react-router-dom";


const StyledTable = styled(Table)`
    
    margin:2em auto 0 auto;
`
const Thead = styled(TableRow)`
    background: #efdc75;
    & > {
        
        font-size:20px;
    }
`
const Tbody =styled(TableRow)`
    &>td{
        font-size:20px;
    }
`
    



const TakeSurveyQuestion = ()=>{
    const [questions, setQuestions]=useState([]);
    const {id} = useParams();

    useEffect(()=>{
        getAllQuestions(id);
    }, []);

    const getAllQuestions = async(id)=>{
      let response =  await getQuestion(id);
      setQuestions(response.data);
      //console.log(response.data);
    }

    const deleteQuestionDetails = async(id)=>{
        await deleteQuestion(id);
        window.location.reload();

    }

    
    return(
        <StyledTable>
            <TableHead>
                
            </TableHead>
            <TableBody>
                {
                    questions.map((question, index)=>
                        <Tbody key={index}>                          
                                <TableCell >{question.statement}</TableCell>
                                <TableCell >
                                <input type="radio" name="overall" value="T"></input><span>T</span>
                                </TableCell>
                                <TableCell >
                                    <input type="radio" name="overall" value="F"></input><span>F</span></TableCell>
                                
                        </Tbody>

                    )



                }

            </TableBody>
        </StyledTable>

    )
}
export default TakeSurveyQuestion;