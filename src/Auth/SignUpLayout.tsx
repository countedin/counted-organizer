import { Outlet } from "react-router-dom";
import frame from "../assets/Images/Frame.png";
import Signup from "../assets/Images/Signup.png";


const SignUpLayout = () => {
  return (
    <>
        <div className="authWrapper">
          <div className="left-container">
            <img src={Signup} alt="signup" id="signup-img" />
          </div>

          <div className="right-container">
            <div className="row1">
              <img src={frame} alt="logo" id="auth-frame" />
            </div>
            <div className="row2">
              <Outlet />
            </div>
          </div>
        </div>
    </>
  );
};

export default SignUpLayout;
