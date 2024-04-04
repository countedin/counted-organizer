import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { apiRegExistingUser } from '../../services/BEApis/AuthAPIs';
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


const SignIn = () => {

  const [signinEmail, setSigninEmail] = useState('');
  const navigate = useNavigate();

  const callLogin = async () => {
    if (signinEmail.endsWith('@nmit.ac.in')) {
      console.log(signinEmail);

      const apiRes = await apiRegExistingUser({ ipEmail: signinEmail })
      if (apiRes.status > 200) {
        navigate('/home')
      }
      console.log(apiRes)
    } else {
      alert('Please enter college registered Email ID');
    }
  };


  return (
    <>
      <div className="signin-form">
        <div className="signtxt">
          <h3 id="verification-txt1">Welcome back,</h3>
          <h4 id="verification-txt2">Enter below details to login</h4>
        </div>
        
        <CssTextField
          variant="outlined"
          color="success"
          margin="normal"
          label="Email ID"
          onChange={(e) => setSigninEmail(e.target.value)}
        />

        <Button
          variant="contained"
          id="btn"
          onClick={callLogin}
          style={{ textTransform: 'none', fontWeight: '600', fontSize: '15px', fontFamily: 'Poppins' }}
        >
          Login
        </Button>

      </div>
    </>

  )
}

export default SignIn