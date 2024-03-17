import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { apiRegExistingUser } from '../../services/BEApis/AuthAPIs'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const SignIn = () => {

  const [regEmail, setRegEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState("");


  const callRegister = async () => {
    if (regEmail.endsWith("@nmit.ac.in")) {
      console.log(regEmail)
      

      const apiRes = await apiRegExistingUser({ ipEmail: regEmail })

      console.log(apiRes)

    } else {
      setAlertMessage("Please enter valid Email ID.")

    }
  }


  return (


    <div className="signup-form">
      <h3 id="signin-txt1">Welcome back,</h3>
      <h4 id="signin-txt2">Enter below details to login</h4>
      {/* <form noValidate> */}
      <TextField
        variant="outlined"
        color="success"
        margin="normal"
        label="Email ID"
        onChange={(e) => { setRegEmail(e.target.value) }}
      />
      
      <Button
        variant="contained"
        id="btn"
        onClick={callRegister}
      >
        Login
      </Button>
      

      {alertMessage && (
        <Stack sx={{
            position: 'fixed',
            top: 0,
            right:0,
            width: '52%',
            zIndex: 1,
          }}
          spacing={2}>
          <Alert severity="warning" onClose={() => setAlertMessage("")}>
            {alertMessage}
          </Alert>
        </Stack>
      )}

      {/* </form> */}

    </div>



  )
}

export default SignIn