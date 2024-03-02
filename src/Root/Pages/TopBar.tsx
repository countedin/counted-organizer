import { Modal } from "@mui/base/Modal";
// import Backdrop from "@mui/material";
import Fade from "@mui/material/Fade";
import { useState } from "react";
// import Profile from "./Profile";
// import Support from "./Support";
// import AboutUs from "./AboutUs";


const TopBar = () => {


  const [openModal, setOpenModal] = useState(false);

  const openMaterialUIModal = () => {
    setOpenModal(true);
  };

  const closeMaterialUIModal = () => {
    setOpenModal(false);
  };

  return (
    // <nav className="topbar">
    //   <div className="nav-icon">
    //     <a href="/"><img src="public/assets/Icons/icon2.png" alt="icon" /></a>
    //   </div>
    //   <div className="unordered-list">
    //     <li className="list"><a href="/aboutus" id="nav-txt">About Us</a></li>
    //     <li className="list"><a href="/support" id="nav-txt">Support</a></li>
    //     <li className="list"><a href="/profile2" id="nav-txt">Profile</a></li>
    //   </div>

    // </nav>
    <>
      <div className="navbar">
        <div className="logo"><a href="/"><img src="public/assets/Icons/icon2.png" alt="icon" /></a></div>
        <div className="nav-content">
          <div className="nav-item"  onClick={() => openMaterialUIModal()}>About Us</div>
          <div className="nav-item"  onClick={() => openMaterialUIModal()}>Support</div>
          <div className="nav-item"  onClick={() => openMaterialUIModal()}>Profile</div>
        </div>
      </div>

      <Modal
        open={openModal}
        onClose={closeMaterialUIModal}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
          // timeout: 500,
        // }}
      >
        <Fade in={openModal}>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeMaterialUIModal}>&times;</span>
              This is Modal Form Material Ui
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default TopBar