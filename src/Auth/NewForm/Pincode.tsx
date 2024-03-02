import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

const Pincode = () => {
  return (
    <div className="row2">
      <div className="pincode-form">
        <h3 id="signin-txt1">Setup 4 digit PIN</h3>
        <h4 id="signin-txt2">We ask you each time when you are creating an event</h4>
        <form  noValidate>
          <TextField
            variant="outlined"
            color="success"
            margin="normal"
            fullWidth
            type="password"
            id="pincode"
            label="Enter 4 digit PIN"
            name="pincode"
            autoComplete="pincode"
          />
          <TextField
            variant="outlined"
            color="success"
            margin="normal"
            fullWidth
            type="password"
            id="pincode"
            label="Re-enter PIN"
            name="pincode"
            autoComplete="pincode"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            id="btn"
          >
            Finish
          </Button>
        </form>  

      </div>
    </div>
  )
}

export default Pincode