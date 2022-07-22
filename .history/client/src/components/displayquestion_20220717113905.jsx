import{useEffect, useState} from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell, styled, Button} from "@mui/material";
import{getQuestion, deleteQuestion} from'../service/api.js';
import{Link} from 'react-router-dom';
import Radio from '@mui/material/Radio';

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

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
    setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
    });

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
                                <Radio {...controlProps('c')} color="success" />
                                </TableCell>
                                <TableCell >F</TableCell>
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