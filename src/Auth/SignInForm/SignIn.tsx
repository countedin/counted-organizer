import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { apiRegExistingUser } from '../../services/BEApis/AuthAPIs';


const SignIn = () => {

  const [signinEmail, setSigninEmail] = useState('');
  
  const callLogin = async () => {
    if (signinEmail.endsWith('@nmit.ac.in')) {
      console.log(signinEmail);
      
      const apiRes = await apiRegExistingUser({ ipEmail: signinEmail })
      console.log(apiRes)
    } else {
      alert('Please enter college registered Email ID');
    }
  };

  return (

    <div className="signin-form">

      <h3 id="signup-txt1">Welcome back,</h3>
      <h4 id="signup-txt2">Enter below details to login</h4>

      <TextField
        variant="outlined"
        color="success"
        margin="normal"
        label="Email ID"
        onChange={(e) => setSigninEmail(e.target.value)}
      />

      <Button
        variant="contained"
        id="btn"
        onClick={callLogin}
      >
        Login
      </Button>

    </div>



  )
}

export default SignIn