import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useState, useEffect} from 'react';
import {editUser, getThisSurvey} from '../service/api'; 
import { useHistory, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`


const Edituser=()=>{
    
    const [survey, setSurvey] = useState();
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

     const editUserDetails=async()=>{
        await editUser(user, id);
        history.push("/alluser");
     }

    return(
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>phone</InputLabel>
                <Input  onChange={(e)=>{onValueChange(e)}} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <InputLabel>email</InputLabel>
                <Input  onChange={(e)=>{onValueChange(e)}} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>editUserDetails()}>Edit</Button>
            </FormControl>
        </Container>
    )
}

export default Edituser;