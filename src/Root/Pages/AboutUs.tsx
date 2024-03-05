import TopBar from "./TopBar"
import aboutus from '../../assets/Images/AboutUs.png'
import frame from '../../assets/Icons/icon2.png'
const AboutUs = () => {

  return (
    <>
      <div className="screen-width">

        <div className="flex flex-right-100 justify-content-center align-items-center navbar"><TopBar /></div>

        <div className="left-part">
          <img src={aboutus} alt="aboutus" />
        </div>
        <section className="right-part">
          <div className="row1">
            <img src={frame} alt="logo" id="auth-frame" />
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutUs