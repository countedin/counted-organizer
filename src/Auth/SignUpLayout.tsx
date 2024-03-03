import SignUp from "./OldForm/SignUp"
import signup from '../assets/Images/signup.png'
import frame from '../assets/Images/Frame.png'

const SignUpLayout = () => {
  return (
    <>
      <div className="flex flex-right-100  justify-center items-center left-container screen-width" >
        <img src={signup} alt="signup" id="signup-img" />
      </div>
      <section className="right-container">
        <div className="row1">
          <img src={frame} alt="logo" id="auth-frame" />
        </div>
        <SignUp />
      </section>
    </>
  )
}

export default SignUpLayout