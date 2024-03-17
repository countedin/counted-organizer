import { Outlet } from "react-router-dom";
import signin from "../assets/Images/siginin.png";
import frame from "../assets/Images/Frame.png";


const SignUpLayout = () => {
  return (
    <>
      

      {/* <div className="flex flex-right-100 justify-content-center align-items-center bg-[#eceaf6]"> */}
      <div className="authPageWrapper">
        <div className="authWrapper">
          <div className="left-container">
            <img src={signin} alt="signin" id="signin-img" />
          </div>

          <div className="right-container">
            <div className="row1">
              <img src={frame} alt="logo" id="auth-frame" />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpLayout;
