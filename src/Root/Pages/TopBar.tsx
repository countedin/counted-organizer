import { Modal } from "@mui/base/Modal";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
// import Backdrop from "@mui/material";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import Profile from "./Profile";
// import Support from "./Support";
// import AboutUs from "./AboutUs";
import logo from '../../assets/Icons/icon2.png'
import profile from '../../assets/Icons/profile.png'


const TopBar = () => {

  const venue = [{ label: 'U.R Rao Seminar hall' }, { label: 'A.P.J Abdul Kalam Seminar Hall' }, { label: 'Sir M. Visveswaraya Auditorium' }, { label: 'Other' }]

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const openModalHandler = (modalNumber: number) => {
    switch (modalNumber) {
      case 1:
        setOpenModal1(true);
        break;
      case 2:
        setOpenModal2(true);
        break;
      default:
        break;
    }
  };

  const closeModalHandler = (modalNumber: number) => {
    switch (modalNumber) {
      case 1:
        setOpenModal1(false);
        break;
      case 2:
        setOpenModal2(false);
        break;
      default:
        break;
    }
  };

  return (

    <>
      <div className="navbar">
        <div className="logo"><a href="/"><img src={logo} alt="logo" /></a></div>
        <div className="nav-content">
          <a href="/aboutus" id="nav-item">About Us</a>
          <div className="nav-item" onClick={() => openModalHandler(1)}>Support</div>
          <div className="nav-item" onClick={() => openModalHandler(2)}>Profile</div>
        </div>
      </div>

      <Modal open={openModal1} onClose={() => closeModalHandler(1)} closeAfterTransition>
        <Fade in={openModal1}>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => closeModalHandler(1)}>
                &times;
              </span>
              <form >
                <h2>Need help</h2>
                <h4>Breifly explain us your problem.We will resolve it soon.</h4>
                <Autocomplete
                  disablePortal
                  options={venue}
                  renderInput={(params) => <TextField {...params} label="Category" color="success" />}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  id="btn-start"
                >
                  Start
                </Button>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>

      <Modal open={openModal2} onClose={() => closeModalHandler(2)} closeAfterTransition>
        <Fade in={openModal2}>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => closeModalHandler(2)}>
                &times;
              </span>
              <div className="flex flex-1 flex-col">
                <div className="profile-logo">
                  <img src={profile} alt="logo" width="50px" height="50px" />
                </div>
                <div className="flex flex-col gap-6 detail-card">
                  <TextField
                    disabled
                    id="filled-disabled"
                    label="Name"
                    defaultValue="Lecturer Name"
                    variant="filled"
                  />
                  <TextField
                    disabled
                    id="filled-disabled"
                    label="Employee ID"
                    defaultValue="SS0785"
                    variant="filled"
                  />
                  <TextField
                    disabled
                    id="filled-disabled"
                    label="Department"
                    defaultValue="Computer Science and Engineering"
                    variant="filled"
                  />
                  <TextField
                    disabled
                    id="filled-disabled"
                    label="Email"
                    defaultValue="lecturername@gmail.com"
                    variant="filled"
                  />
                </div>
                <h5 className="profile-txt">Details in this page are not editable. Please contact support for additional help.</h5>
              </div>
            </div>
          </div>
        </Fade >
      </Modal >
    </>
  )
}

export default TopBar