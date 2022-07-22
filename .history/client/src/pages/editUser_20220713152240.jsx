import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useState, useEffect} from 'react';
import {addUser} from '../service/api'; 
import { useHistory } from "react-router-dom";

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`
const defaultValue={
    name:'',
    phone:'',
    email:''
}

const Edituser=()=>{
    const [user, setUser] = useState(defaultValue);
    const history = useHistory();
    
    useEffect(()=>{

    }
    

    const onValueChange=(e)=>{
        //console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]: e.target.value});
       // console.log(user);
     }

     const addUserDetails=async()=>{
        await addUser(user);
        history.push("/alluser");
     }

    return(
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>phone</InputLabel>
                <Input  onChange={(e)=>{onValueChange(e)}} name="phone"/>
            </FormControl>
            <FormControl>
                <InputLabel>email</InputLabel>
                <Input  onChange={(e)=>{onValueChange(e)}} name="email"/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>addUserDetails()}>Edit</Button>
            </FormControl>
        </Container>
    )
}

export default Edituser;