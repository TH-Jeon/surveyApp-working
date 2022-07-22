import{useEffect, useState} from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell, styled, Button} from "@mui/material";
import{getQuestion, deleteQuestion} from'../service/api.js';
import{Link} from 'react-router-dom';

const StyledTable = styled(Table)`
    
    margin:2em auto 0 auto;
`
const Thead = styled(TableRow)`
    background: #000000;
    & > th{
        color:#fff;
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
        await delete(id);
        getAllUsers();

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
                    users.map((user, index)=>
                        <Tbody key={index}>                          
                                <TableCell >{user._id}</TableCell>
                                <TableCell >{user.name}</TableCell>
                                 <TableCell >{user.phone}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                <Button variant ="contained" style={{marginRight:10}} component={Link} to={`/edituser/${user._id}`}>Edit</Button>
                                <Button variant = "contained" color="secondary" onClick = {()=>deleteUserDetails(user._id)}>Delete</Button>
                                </TableCell>   
                        </Tbody>

                    )



                }

            </TableBody>
        </StyledTable>

    )
}
export default DisplayQuestion;