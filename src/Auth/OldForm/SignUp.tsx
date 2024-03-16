import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import GoogleButton from 'react-google-button'
import { apiRegNewUser } from '../../services/BEApis/AuthAPIs'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const SignUp = () => {

  const [regEmail, setRegEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState("");


  const callRegister = async () => {
    if (regEmail.endsWith("@nmit.ac.in")) {
      console.log(regEmail)

      const apiRes = await apiRegNewUser({ ipEmail: regEmail })

      console.log(apiRes)

    } else {
      setAlertMessage("Please enter the email provided by the college.")

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
        // type="submit"

        variant="contained"
        id="btn"
        onClick={callRegister}
      >
        Login
      </Button>
      <GoogleButton
        id='btn-google'
        type="light" // can be light or dark
        onClick={() => { console.log('Google button clicked') }}
      />

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

export default SignUp