import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useState } from "react"
import { apiSetupPin } from "../../services/BEApis/AuthAPIs"
import { useNavigate } from "react-router"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '&:hover': {
        borderColor: 'rgba(0, 0, 0, 0.87)', // Color on hover
      },
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 0, 0, 1)', // Custom color when focused
    },
  },
});


const Pincode = () => {

  const navigate = useNavigate();
  const [enterPin, setEnterPin] = useState('');
  const [reenterPin, setReEnterPin] = useState('');
  const localAppID = localStorage.getItem('appUserId');

  const callSignup = async () => {
    if (enterPin == reenterPin) {
      console.log(enterPin)

      const apiRes = await apiSetupPin({ ipKeyAppUserId: localAppID, ipPin: enterPin })
      console.log(apiRes)
      navigate('/home')
    }
    else {
      alert('please enter the correct pin')
    }
  }

  const classes = useStyles( );

  
  return (
    
    <div className="pincode-form">
      <div className="signtxt">
        <h3 id="signup-txt1">Setup 4 digit PIN</h3>
        <h4 id="signup-txt2">We ask you each time when you are creating an event</h4>
      </div>
      <TextField
        variant="outlined"
        margin="normal"
        type="password"
        label="Enter 4 digit PIN"
        value={enterPin}
        onChange={(e) => { setEnterPin(e.target.value) }}
        className={classes.root}
      />
      <TextField
        variant="outlined"
        // className={classes.root}
        margin="normal"
        type="password"
        label="Re-enter PIN"
        value={reenterPin}
        onChange={(e) => { setReEnterPin(e.target.value) }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        id="btn"
        onClick={callSignup}
        style={{ textTransform: 'none', fontWeight: '600', fontSize: '15px', fontFamily: 'Poppins' }}
      >
        Finish
      </Button>
    </div>

  )
}

export default Pincode