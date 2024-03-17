import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

const Pincode = () => {
  return (
    // <div className="row2">
      <div className="pincode-form">
        <h3 id="signup-txt1">Setup 4 digit PIN</h3>
        <h4 id="signup-txt2">We ask you each time when you are creating an event</h4>
          <TextField
            variant="outlined"
            color="success"
            margin="normal"
            type="password"
            label="Enter 4 digit PIN"
          />
          <TextField
            variant="outlined"
            color="success"
            margin="normal"
            type="password"
            label="Re-enter PIN"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            id="btn"
          >
            Finish
          </Button>
        

      </div>

  )
}

export default Pincode