import {FormControl, FormGroup, InputLabel, Input, Typography} from "@mui/material";

const Adduser=()=>{
    return(
        <FormGroup>
            <Typography varient>add user</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>phone</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>email</InputLabel>
                <Input/>
            </FormControl>
        </FormGroup>
    )
}

export default Adduser;