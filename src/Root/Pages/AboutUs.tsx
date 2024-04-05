import TopBar from "./TopBar"
import aboutus from '../../assets/Images/AboutUs.png'
import { useNavigate } from 'react-router-dom';
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const AboutUs = () => {

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const aboutUsimgStyle = {
    // width: '460px',  
    // height: '449.97px',
    // margin: '15px',
  }


  return (
    <>
      <TopBar/>
      <div className="aboutusWrapper">
        <div className="leftaboutus">
          <img src={aboutus} alt="aboutus" style={aboutUsimgStyle}/>
        </div>
        <div className="rightaboutus">
        <div className="backArrow">
          <IconButton type="button" sx={{ p: '10px' }} aria-label="ArrowBack" onClick={handleBackButtonClick}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="abouttxt">About us</div>
        <div className="aboutContent">
          <p className="para" style={{ marginBottom: '20px', lineHeight: '2.0' }}>
          Welcome to Counted, a revolutionary attendance tracking solution meticulously crafted with passion by Rohan Navale and Srinivasa Rao. With the unwavering support of the CSE Department at NMIT, we are committed to simplifying your academic journey. Our goal is to provide you with a hassle-free experience in attendance management, making your academic endeaavors smoother and stress-free.
          </p>
          <p className="para" style={{ marginBottom: '20px', lineHeight: '2.0' }}>
          We express our heartfelt gratitude for choosing Counted as your  trusted companion in attendance management. Thank you forbeing part of our vision for a seamless academic experirnce.
          </p>
          <p className="para" style={{ marginBottom: '20px', lineHeight: '2.0' }}>Have a feedback?</p>
          <p>please write it to <a href="mailto:countedin.app@gmail.com" style={{ textDecoration: 'none' }}>countedin.app@gmail.com</a></p>
        </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs