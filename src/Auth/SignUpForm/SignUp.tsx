import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import  { useState } from 'react';
// import { apiRegNewUser } from '../../services/BEApis/AuthAPIs';

const SignUp = () => {

  // const [regEmail, setRegEmail] = useState("");
  // const [regPassword, setRegPassword] = useState("");

  // const callRegister = async() => {
  //   if(regEmail.endsWith("@nmit.ac.in")){
  //     console.log(regEmail)
  //     console.log(regPassword)


  //     const apiRes = await apiRegNewUser({ipEmail: regEmail, ipPassword: regPassword})
  //     console.log(apiRes)
  //   }
  // }


  return (

      <div className="signup-form">
        <h3 id="signup-txt1">Let's create your account</h3>
        <h4 id="signup-txt2">Enter the details as per the records</h4>

          <TextField
            variant="outlined"
            color="success"
            margin="normal"
            label="Email" 
            helperText="Enter mail ID provided by college " 
            // onChange={(e) => {setRegEmail(e.target.value)}}
          />

          <TextField
            variant="outlined"
            color="success"
            label="Employee ID"
            type="text"
            // onChange={(e) => {setRegPassword(e.target.value)}}
          />
          <Button
            variant="contained"
            id="btn"
            // onClick={callRegister}
          >
            Register
          </Button>
        
      </div>
  
  )

}
export default SignUp

