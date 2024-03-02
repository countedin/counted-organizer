import SignUp from "./OldForm/SignUp"

const SignUpLayout = () => {
  return (
    <>
      <div className="flex flex-right-100  justify-center items-center left-container screen-width" >
        <img src="public/assets/Images/signup.png" alt="signup" id="signup-img" />
      </div>
      <section className="right-container">
        <div className="row1">
          <img src="public/assets/Images/Frame.png" alt="logo" id="auth-frame" />
        </div>
        <SignUp />
      </section>
    </>
  )
}

export default SignUpLayout