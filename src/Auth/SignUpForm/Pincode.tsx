import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useState } from "react"
import { apiSetupPin } from "../../services/BEApis/AuthAPIs"
import { useNavigate } from "react-router"

const Pincode = () => {

  const navigate = useNavigate();
  const [ enterPin , setEnterPin ] = useState('');
  const [ reenterPin , setReEnterPin ] = useState('');
  const localAppID = localStorage.getItem('appUserId');

  const callSignup = async () => {
    if(enterPin == reenterPin){
      console.log(enterPin)

      const apiRes = await apiSetupPin({ ipKeyAppUserId : localAppID , ipPin : enterPin })
      console.log(apiRes)
      navigate('/home')
    }
    else{
      alert('please enter the correct pin')
    }
  }


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
            value={ enterPin }
            onChange= {(e) => { setEnterPin(e.target.value) }}
          />
          <TextField
            variant="outlined"
            color="success"
            margin="normal"
            type="password"
            label="Re-enter PIN"
            value={ reenterPin }
            onChange={(e) => { setReEnterPin(e.target.value) }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            id="btn"
            onClick={callSignup}
          >
            Finish
          </Button>
        

      </div>

  )
}

export default Pincode