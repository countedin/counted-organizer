import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import GoogleButton from 'react-google-button'

const SignUp = () => {
  return (


    <div className="signup-form">
      <h3 id="signin-txt1">Welcome back,</h3>
      <h4 id="signin-txt2">Enter below details to login</h4>
      <form noValidate>
        <TextField
          variant="outlined"
          color="success"
          margin="normal"
          fullWidth
          id="email"
          label="Email ID"
          name="email"
          autoComplete="email"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          id="btn"
        >
          Login
        </Button>
        <GoogleButton
          id='btn-google'
          type="light" // can be light or dark
          onClick={() => { console.log('Google button clicked') }}
        />
        
      </form>

    </div>



  )
}

export default SignUp