import React from 'react';
import { useState } from 'react';
import { 
  TextField, 
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './login.css';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
      <div className="text-center mb-5 alert alert-primary">
        <label htmlFor="" className="h2">
          Login
        </label >
      </div>

      <div className="form-group" >
        <TextField size="small" variant="outlined" className="form-control" label="Email" value={email} 
          onChange={(e) => setEmail(e.target.value)}>
        </TextField>
      </div>

      <div className="form-group">
        <FormControl variant="outlined" size="small" className="form-control">
          <InputLabel>Password</InputLabel>
          <OutlinedInput label="Password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} 
          endAdornment={
            <InputAdornment>
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  { showPassword ? ( <VisibilityIcon /> ) : ( <VisibilityOffIcon /> ) }
                </IconButton>
              </InputAdornment>
            }>
          </OutlinedInput>
        </FormControl>
      </div>
      <div className="text-center mt-4">
        <Button variant='contained' type='submit' disabled={!email || !password}>Login</Button>
      </div>
    </div>
  )
}

export default Login
