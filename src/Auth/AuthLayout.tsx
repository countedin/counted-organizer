import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (

        <>
          <div className="flex flex-right-100 justify-content-center align-items-center left-container" >
            <img src="public/assets/Images/siginin.png" alt="signin" id="signin-img"/>
          </div>
          <section className="right-container">
            <div className="row1">
              <img src="public/assets/Images/Frame.png" alt="logo" id="auth-frame" />
            </div>
            <Outlet/>
          </section>
        </>
      
    )
}

export default AuthLayout