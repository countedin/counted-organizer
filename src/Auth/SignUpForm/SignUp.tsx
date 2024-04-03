import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { apiRegNewUser } from '../../services/BEApis/AuthAPIs';
import { useNavigate } from 'react-router';
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

const SignUp = () => {

  const [regEmail, setRegEmail] = useState("");
  const [regEmpID, setRegEmpID] = useState("");
  const navigate = useNavigate();

  const callRegister = async () => {
    if (regEmail.endsWith("@nmit.ac.in")) {
      console.log(regEmail)
      console.log(regEmpID)


      const apiRes = await apiRegNewUser({ ipEmail: regEmail, ipEmpId: regEmpID })
      console.log(apiRes)

      navigate('/verification')
    }
  }


  return (

    <div className="signup-form">

      <div className="signuptxt">
        <h3 id="signup-txt1">Let's create your account</h3>
        <h4 id="signup-txt2">Enter the details as per the records</h4>
      </div>

      <CssTextField
        className='TextField'
        variant="outlined"
        color="success"
        margin="normal"
        label="Email"
        helperText="Enter mail ID provided by college "
        onChange={(e) => {
          setRegEmail(e.target.value);
          localStorage.setItem('regEmail', (e.target.value))
        }}
      />

      <CssTextField
        variant="outlined"
        color="success"
        label="Employee ID"
        type="text"
        onChange={(e) => { setRegEmpID(e.target.value) }}
      />
      <Button
        variant="contained"
        id="btn"
        onClick={callRegister}
        style={{ textTransform: 'none', fontWeight: '600' , fontSize: '15px', fontFamily: 'Poppins'}}
      >
        Register
      </Button>

    </div>

  )

}
export default SignUp

