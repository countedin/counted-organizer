import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { SetStateAction, useState } from "react"
import { apiSetupPin } from "../../services/BEApis/AuthAPIs"
import { useNavigate } from "react-router"
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'rgba(0, 200, 166, 1)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(0, 200, 166, 1)',
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
  
  return (
    
    <div className="pincode-form">
      <div className="">
        <h3 id="pincode-txt1">Setup 4 digit PIN</h3>
        <h4 id="pincode-txt2">We ask you each time when you are creating an event</h4>
      </div>
      <CssTextField
        variant="outlined"
        margin="normal"
        type="password"
        label="Enter 4 digit PIN"
        value={enterPin}
        onChange={(e: { target: { value: SetStateAction<string> } }) => { setEnterPin(e.target.value) }}
      />
      <CssTextField
        variant="outlined"
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