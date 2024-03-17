import signup from '../assets/Images/signup.png'
import frame from '../assets/Images/Frame.png'
import SignIn from "./SignInForm/SignIn"

const SignInLayout = () => {
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
            <SignIn />
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

export default SignInLayout