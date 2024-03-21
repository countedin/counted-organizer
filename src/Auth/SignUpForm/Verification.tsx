import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useState } from "react";
import { apiVerifyCode } from "../../services/BEApis/AuthAPIs";
import { useNavigate } from "react-router";
// import { locale } from "dayjs";



const Verification = () => {

  const [verifyCode, setVerificationCode] = useState("");
  const localEmail = localStorage.getItem('regEmail');
  const navigate = useNavigate();

  const callVerifyCode = async() => {
    console.log(verifyCode)
    console.log(localEmail)

    const apiRes = await apiVerifyCode({ipEmail : localEmail ,ipCode : verifyCode})
    console.log(apiRes)

    localStorage.setItem("appUserId", apiRes.data.appUserId)
    localStorage.setItem("jwt", apiRes.data.token)

    navigate('/details')

  }

  return (
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
            value={verifyCode}
            onChange={(e) => {setVerificationCode(e.target.value)}}
          />
          <Button
            fullWidth
            variant="contained"
            id="btn"
            onClick={callVerifyCode}
          >
            Register
          </Button>
        </div>
      </div>
  )
}

export default Verification