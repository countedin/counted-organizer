import SignUp from "./OldForm/SignUp"
import signup from '../assets/Images/signup.png'
import frame from '../assets/Images/Frame.png'

const SignUpLayout = () => {
  return (
    <>
      <div className="authPageWrapper">
        <div className="authWrapper">
          <div className="left-container">
            <img src={signup} alt="signup" id="signup-img" />
          </div>

          <div className="right-container">
            <div className="row1">
              <img src={frame} alt="logo" id="auth-frame" />
            </div>
            <SignUp />
          </div>
        </div>
      </div>
      
      
      
      
      
      
      
      
      {/* <div className="flex flex-right-100  justify-center items-center left-container screen-width" >
        <img src={signup} alt="signup" id="signup-img" />
      </div>
      <section className="right-container">
        <div className="row1">
          <img src={frame} alt="logo" id="auth-frame" />
        </div>
        <SignUp />
      </section> */}
    </>
  )
}

export default SignUpLayout