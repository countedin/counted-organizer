import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { apiVerifyCode } from "../../services/BEApis/AuthAPIs";
import { useNavigate } from "react-router";
import { styled } from "@mui/material/styles";
import { ArrowLeftIcon } from "@mui/x-date-pickers";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgba(0, 200, 166, 1)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(0, 200, 166, 1)",
    },
  },
});

const Verification = () => {
  const [verifyCode, setVerificationCode] = useState("");
  const localEmail = localStorage.getItem("regEmail");
  const navigate = useNavigate();

  const callVerifyCode = async () => {
    console.log(verifyCode);
    console.log(localEmail);

    const apiRes = await apiVerifyCode({
      ipEmail: localEmail,
      ipCode: verifyCode,
    });
    console.log(apiRes);

    localStorage.setItem("appUserId", apiRes.data.appUserId);
    localStorage.setItem("jwt", apiRes.data.token);

    navigate("/details");
  };

  return (
    <div className="signup-form">
      <div className="">
        <ArrowLeftIcon
          className="-ml-2 cursor-pointer mb-4"
          onClick={() => navigate(-1)}
          fontSize="large"
        />
        <div className="flex items-start justify-start">
          <div className="">
            <h3 id="verification-txt1" className="mb-2">
              Enter the Verification Code
            </h3>
            <h4 id="verification-txt2">
              We've sent a 6 digit code to your mail
            </h4>
          </div>
        </div>
      </div>
      <CssTextField
        variant="outlined"
        color="success"
        margin="normal"
        fullWidth
        type="text"
        label="Verification Code"
        value={verifyCode}
        onChange={(e) => {
          setVerificationCode(e.target.value);
        }}
      />
      <Button
        fullWidth
        variant="contained"
        id="btn"
        onClick={callVerifyCode}
        style={{
          textTransform: "none",
          fontWeight: "600",
          fontSize: "15px",
          fontFamily: "Poppins",
        }}
      >
        Register
      </Button>
    </div>
  );
};

export default Verification;
