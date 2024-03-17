
import Button from '@mui/material/Button';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { apiRegNewUser } from '../../services/BEApis/AuthAPIs';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'enter mail ID provided by the college';
    }

    return 'Enter mail ID provided by the college';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}



const SignUp = () => {

  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const callRegister = async() => {
    if(regEmail.endsWith("@nmit.ac.in")){
      console.log(regEmail)
      console.log(regPassword)


      const apiRes = await apiRegNewUser({ipEmail: regEmail, ipPassword: regPassword})
      console.log(apiRes)
    }
  }


  return (
    <div className="row2">
      <div className="signin-form">
        <h3 id="signin-txt1">Let's create your account</h3>
        <h4 id="signin-txt2">Enter the details as per the records</h4>
        <div className='signin-form'>
          <TextField
            variant="outlined"
            color="success"
            margin="normal"
            fullWidth
            label="Email"  
            onChange={(e) => {setRegEmail(e.target.value)}}
          />
          <FormControl>
            <MyFormHelperText />
          </FormControl>
          <TextField
            variant="outlined"
            color="success"
            fullWidth
            label="Employee ID"
            type="text"
            onChange={(e) => {setRegPassword(e.target.value)}}
          />
          <Button
            variant="contained"
            id="btn"
            onClick={callRegister}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  )

}
export default SignUp

