import { Modal } from "@mui/base/Modal";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import logo from '../../assets/Icons/icon2.png'
import profile from '../../assets/Icons/profile.png'
import React from "react";
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { apiGetUserDetails } from "../../services/BEApis/AuthAPIs";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from "react-router-dom";
// import { apiPostRequestHelp } from "../../services/BEApis/EventAPIs";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'rgba(0, 200, 166, 1)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(0, 200, 166, 1)',
    },
  },
});


const TopBar = () => {

  const [venue, setVenue] = useState('');

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [name, setName] = useState();
  const [empID, setEmployeeId] = useState();
  const [department, setDepartment] = useState();
  const [Email, setEmail] = useState();

  const localAppID = localStorage.getItem('appUserId')

  const fetchUserDetails = async () => {
    const response = await apiGetUserDetails(localAppID?.toString() || "")
    setName(await response.data.data.keyUsername)
    setEmployeeId(await response.data.data.keyEmpId)
    setDepartment(await response.data.data.keyDepartment)
    setEmail(await response.data.data.keyEmail)
    console.log(response)
  }

  useEffect(() => {
    fetchUserDetails();
  });

  const openModalHandler = async (modalNumber: number) => {
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

  const CHARACTER_LIMIT = 200;
  const [values, setValues] = React.useState({
    name: "Explain your problem"
  });

  const handleChange = (name: string) => (event: { target: { value: any; }; }) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgba(51, 51, 102, 1)',
      },
    },
  });

  const styles = {
    textField: {
      marginBottom: '10px',
    },
  };

  return (

    <>
      <div className="navbar">
        <div className="logo"><Link to="/home"><img src={logo} alt="logo" /></Link></div>
        <div className="nav-content">
          <Link to="/aboutus" id="nav-item">About Us</Link>
          <div id="nav-item" onClick={() => openModalHandler(1)}>Support</div>
          <div id="nav-item" onClick={() => openModalHandler(2)}>Profile</div>
        </div>
      </div>

      <Modal open={openModal1} onClose={() => closeModalHandler(1)} closeAfterTransition>
        <Fade in={openModal1}>
          <div className="modal">
            <div className="modal-description">
              <div className="close-container">
                <h2 className="profile-txt1">Need help ?
                  <span className="close" onClick={() => closeModalHandler(1)}>
                    &times;
                  </span>
                </h2>
                <h4 className="profile-txt2">Breifly explain us your problem.We will resolve it soon.</h4>
              </div>
              <ThemeProvider theme={theme}>
                <FormControl fullWidth sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(0, 200, 166, 1)",
                    },
                  },
                  "& .MuiSelect-icon": {
                    color: "rgba(0, 200, 166, 1)",
                  },
                  marginBottom: '20px',
                  width: '95%',
                }}>
                  <InputLabel style={{ backgroundColor: "white" }}>Category</InputLabel>
                  <Select
                    label="Venue"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                  >
                    <MenuItem value={'Event Details'}>Edit Event Details</MenuItem>
                    <MenuItem value={'Edit Profile'}>Edit profile</MenuItem>
                    <MenuItem value={'Others'}>Others</MenuItem>
                  </Select>
                </FormControl>
              </ThemeProvider>
              <CssTextField
                multiline
                inputProps={{
                  maxLength: CHARACTER_LIMIT
                }}
                value={values.name}
                onChange={handleChange("name")}
                rows={5}
              />
              <div className="helper-text">{`${values.name.length}/${CHARACTER_LIMIT}`}</div>
              <Button
                sx={{ width: '95%' }}
                variant="contained"
                id="btn-start"
                style={{ textTransform: 'none', fontWeight: '600', fontSize: '15px', fontFamily: 'Poppins' }}
              >
                Send
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>

      <Modal open={openModal2} onClose={() => closeModalHandler(2)} closeAfterTransition>
        <Fade in={openModal2}>
          <div className="modalProfile">
            <div className="profile-description">
              <div className="close-container">
                <div className="profile-logo">
                <div className="test"><img src={profile} alt="logo" width="90px" height="90px" />
                  <span className="close" onClick={() => closeModalHandler(2)}>
                    &times;
                  </span>
                </div>
                </div>
                <div className="flex flex-col profile-detail">
                  <TextField
                    disabled
                    label="Name"
                    value={name}
                    variant="filled"
                    InputProps={{
                      style: {
                        backgroundColor: '#f5f5f5',
                        width: '100%',

                      },
                      disableUnderline: true,
                    }}
                    style={{ ...styles.textField, flexGrow: 1, width: '80%' }}
                  />

                  <TextField
                    disabled
                    label="Employee ID"
                    value={empID}
                    variant="filled"
                    InputProps={{
                      style: {
                        backgroundColor: '#f5f5f5',
                      },
                      disableUnderline: true,
                    }}
                    style={{ ...styles.textField, flexGrow: 1, width: '80%' }}
                  />

                  <TextField
                    disabled
                    label="Department"
                    value={department}
                    variant="filled"
                    InputProps={{
                      style: {
                        backgroundColor: '#f5f5f5',
                      },
                      disableUnderline: true,
                    }}
                    style={{ ...styles.textField, flexGrow: 1, width: '80%' }}
                  />

                  <TextField
                    disabled
                    label="Email"
                    value={Email}
                    variant="filled"
                    InputProps={{
                      style: {
                        backgroundColor: 'rgba(245, 245, 245, 1)',
                      },
                      disableUnderline: true,
                    }}
                    style={{ ...styles.textField, flexGrow: 1, width: '80%' }}
                  />
                </div>
                <div className="icon-container">
                  <InfoOutlinedIcon style={{ fontSize: 15, fontWeight: '200', marginTop: '15px', padding: '5px' }} />
                  <h5 className="profile-txt">Details shown here are not editable. Please contact support for addtional help.</h5>
                </div>
              </div>
            </div>
          </div>
        </Fade >
      </Modal >
    </>
  )
}

export default TopBar