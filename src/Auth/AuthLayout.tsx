import { Outlet } from "react-router-dom";
import signin from '../assets/Images/siginin.png'
import frame from '../assets/Images/Frame.png'
const AuthLayout = () => {
  return (

        <>
          <div className="flex flex-right-100 justify-content-center align-items-center left-container" >
            <img src={signin} alt="signin" id="signin-img"/>
          </div>
          <section className="right-container">
            <div className="row1">
              <img src={frame} alt="logo" id="auth-frame" />
            </div>
            <Outlet/>
          </section>
        </>
  )
}

      export default AuthLayout