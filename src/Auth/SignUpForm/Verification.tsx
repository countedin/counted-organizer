import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

const Verification = () => {
  return (
    // <div className="row2">
      <div className="signup-form">
        <h3 id="verification-txt1">Enter the Verification Code</h3>
        <h4 id="verification-txt2">We've sent a 6 digit code to your mail</h4>
        <div >
          <TextField
            variant="outlined"
            color="success"
            margin="normal"
            fullWidth
            type="text"
            label="Verification Code" 
          />
          <Button
            fullWidth
            variant="contained"
            id="btn"
          >
            Register
          </Button>
        </div>


      </div>
    // </div>
  )
}

export default Verification