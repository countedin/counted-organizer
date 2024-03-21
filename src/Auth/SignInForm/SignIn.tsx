import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { apiRegExistingUser } from '../../services/BEApis/AuthAPIs';
import { useNavigate } from 'react-router';


const SignIn = () => {

  const [signinEmail, setSigninEmail] = useState('');
  const navigate = useNavigate();
  
  const callLogin = async () => {
    if (signinEmail.endsWith('@nmit.ac.in')) {
      console.log(signinEmail);
      
      const apiRes = await apiRegExistingUser({ ipEmail: signinEmail })
      if(apiRes.status == 200){
        navigate('/home')
      }
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