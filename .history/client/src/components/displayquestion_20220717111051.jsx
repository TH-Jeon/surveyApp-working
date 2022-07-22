import{useEffect, useState} from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell, styled, Button} from "@mui/material";
import{getQuestion, deleteQuestion} from'../service/api.js';
import{Link} from 'react-router-dom';

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
    



const DisplayQuestion = ()=>{
    const [questions, setQuestions]=useState([]);
  

    useEffect(()=>{
        getAllQuestions();
    }, []);

    const getAllQuestions = async()=>{
      let response =  await getQuestion();
      setQuestions(response.data);
      //console.log(response.data);
    }

    const deleteQuestionDetails = async(id)=>{
        await deleteQuestion(id);
        getAllQuestions();

    }

    return(
        <StyledTable>
            <TableHead>
                <Thead>
                        
                        <TableCell>Questions</TableCell>
                        <TableCell></TableCell>
                    
                </Thead>
            </TableHead>
            <TableBody>
                {
                    questions.map((question, index)=>
                        <Tbody key={index}>                          
                                <TableCell >{question.statement}</TableCell>
                                <TableCell >T</TableCell>
                                
                                <TableCell>
                                <Button variant ="contained" style={{marginRight:10}} component={Link} >Edit</Button>
                                <Button variant = "contained" color="secondary" onClick = {()=>deleteQuestionDetails(question._id)}>Delete</Button>
                                </TableCell>   
                        </Tbody>

                    )



                }

            </TableBody>
        </StyledTable>

    )
}
export default DisplayQuestion;