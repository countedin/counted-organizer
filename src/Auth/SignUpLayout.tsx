import { Outlet } from "react-router-dom";
import frame from "../assets/Images/Frame.png";
import SignUp from "../assets/Images/SignUp.png";


const SignUpLayout = () => {
  return (
    <>
      

      {/* <div className="flex flex-right-100 justify-content-center align-items-center bg-[#eceaf6]"> */}
      {/* <div className="authPageWrapper"> */}
        <div className="authWrapper">
          <div className="left-container">
            <img src={SignUp} alt="signup" id="signup-img" />
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
      {/* </div> */}
    </>
  );
};

export default SignUpLayout;
