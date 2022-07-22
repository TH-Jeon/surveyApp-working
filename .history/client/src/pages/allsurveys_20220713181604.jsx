import{useEffect, useState} from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell, styled, Button} from "@mui/material";
import{getSurvey} from'../service/api.js';
import{Link} from 'react-router-dom';

const StyledTable = styled(Table)`
    width:80%;
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
    



const AllSurveys = ()=>{
    const [surveys, setSurveys]=useState([]);
  

    useEffect(()=>{
        getAllSurveys();
    }, []);
    const getAllSurveys = async()=>{
      let response =  await getSurvey();
      setSurveys(response.data);
      //console.log(response.data);
    }

    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Survey Id</TableCell>
                    <TableCell>Survey Name</TableCell>
                    <TableCell>Created Date</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    
                </Thead>
            </TableHead>
            <TableBody>
                {
                    surveys.map(survey=>(
                        <Tbody>
                            <TableCell>{survey._id}</TableCell>
                            <TableCell>{survey.name}</TableCell>
                            <TableCell>{survey.date}</TableCell>
                           
                            <TableCell>
                                <Button variant ="contained" style={{marginRight:10}} component={Link} to={`/edituse/${survey._id}`}>Edit</Button>
                                <Button variant = "contained" color="secondary" >Delete</Button>
                            </TableCell>
                        </Tbody>

                    ))



                }

            </TableBody>
        </StyledTable>

    )
}
export default AllSurveys;