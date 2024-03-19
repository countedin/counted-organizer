import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import leftimg from "../../assets/Images/LeftImage.png"
import downimg from "../../assets/Images/DownImage.png"
import rightimg from "../../assets/Images/RightImage.png"
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from '@mui/material/Button';
import { SetStateAction, useState } from "react";
// import dayjs from "dayjs";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";


const NewEvent = () => {

  const leftImg = {
    maxWidth: "178.83px",
    maxHeight: "453.89px",
  }
  const downImg = {
    maxWidth: "80.26px",
    maxHeight: "306.63px"
  }
  const rightImg = {
    maxWidth: "151.9px",
    maxHeight: "440px",
  }

  const Venue = [
    { label: "U.R Rao Seminar hall" },
    { label: "A.P.J Abdul Kalam Seminar Hall" },
    { label: "Sir M. Visveswaraya Auditorium" },
    { label: "Other" },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgba(0, 128, 128, 0.7)',
      },
    },
  });

  const [openParent, setOpenParent] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const [openQRModal, setOpenQRModal] = useState(false);
  const [openFinishModal, setOpenFinishModal] = useState(false);

  const handleStartButtonClick = () => {
    setOpenParent(true);
  };

  const handleEditButtonClick = () => {
    setOpenParent(false); 
  };

  const handleProceedButtonClick = () => {
    setOpenParent(false);
    setOpenChild(true);
  };

  const handleContinueButtonClick = () => {
    setOpenChild(false);
    setOpenQRModal(true);
  };

  const handleQRFinishButtonClick = () => {
    setOpenQRModal(false);
    setOpenFinishModal(true);
  };

  const handleFinishConfirmation = () => {
    // Handle finishing the process (e.g., API call)
    setOpenFinishModal(false);
  };

  const [eventName, setEventName] = useState('');
  const [venue, setVenue] = useState('');
  const [eventDate, setEventDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleEventDateChange = (date: SetStateAction<null>) => {
    setEventDate(date);
  };
  
  const handleStartTimeChange = (time: SetStateAction<null>) => {
    setStartTime(time);
  };
  
  const handleEndTimeChange = (time: SetStateAction<null>) => {
    setEndTime(time);
  };

  return (
    <div className="newEventWrapper">
      <img src={leftimg} alt="leftImage" style={leftImg} />
      <div className="newEventForm">
        <h3 className="card-txt">Tell us about the event</h3>
        <div className="inp-container">
          <h4 className="inp-txt">Share the name of the event</h4>
          <TextField
            fullWidth
            label="Event name"
            variant="outlined"
            color="success"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="inp-container">
          <h4 className="inp-txt">Where did this happen ?</h4>
          <Autocomplete
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(0, 128, 128, 0.7)",
                },
              },
              "& .MuiIconButton-root": {
                color: "rgba(0, 128, 128, 0.7)",
              },
            }}
            disablePortal
            options={Venue}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Venue"
                color="success"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            )}
          />
        </div>
        <div className="inp-container">
          <h4 className="inp-txt">
            What date did your event conquer the calendar
          </h4>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={
                  <Typography style={{ color: "rgba(0, 128, 128, 0.4)" }}>
                    Date
                  </Typography>
                }
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(0, 128, 128, 0.7)",
                    },
                  },
                  "& .MuiIconButton-root": {
                    color: "rgba(0, 128, 128, 0.7)",
                  },
                }}
                slotProps={{
                  textField: {
                    helperText: "MM/DD/YYYY",
                  },
                }}
                value={eventDate}
                onChange={handleEventDateChange}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
        <div className="inp-container">
          <h4 className="inp-txt">
            Tell us the event's start and end times.
          </h4>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker", "TimePicker"]}>
                <h4 className="inp-txt">From</h4>
                <TimePicker
                  sx={{
                    width: "100%", // Set the width to 100%
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "rgba(0, 128, 128, 0.7)",
                      },
                    },
                    "& .MuiIconButton-root": {
                      color: "rgba(0, 128, 128, 0.7)",
                    },
                  }}
                  value={startTime}
                  onChange={handleStartTimeChange}
                />
                <h4 className="inp-txt">To</h4>
                <TimePicker
                  sx={{
                    width: "100%", // Set the width to 100%
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "rgba(0, 128, 128, 0.7)",
                      },
                    },
                    "& .MuiIconButton-root": {
                      color: "rgba(0, 128, 128, 0.7)",
                    },
                  }}
                  value={endTime}
                  onChange={handleEndTimeChange}
                />
              </DemoContainer>
            </LocalizationProvider>
          </ThemeProvider>
        </div>
        <Button
          fullWidth
          variant="contained"
          id="btn-start"
          onClick={handleStartButtonClick}
        >
          Start
        </Button>

        <Modal open={openParent} onClose={() => setOpenParent(false)} className="modal">
          <Box>
            <div className="modal-description">
              {/* <Typography variant="h6">Entered Details</Typography>
              <Typography>Event Name: {eventName}</Typography>
              <Typography>Venue: {venue}</Typography>
              <Typography>Event Date: {eventDate ? eventDate.toString() : ''}</Typography>
              <Typography>Start Time: {startTime}</Typography>
              <Typography>End Time: {endTime}</Typography> */}
              <Button onClick={handleEditButtonClick}>Edit</Button>
              <Button onClick={handleProceedButtonClick}>Proceed</Button>
            </div>
          </Box>
        </Modal>

        <Modal open={openChild} onClose={() => setOpenChild(false)} className="modal">
          <Box>
            <div className="modal-description">

              <Button onClick={handleContinueButtonClick}>Continue</Button>
              <Button onClick={() => setOpenParent(true)} >Cancel</Button>
            </div>
          </Box>
        </Modal>

        <Modal open={openQRModal} onClose={() => setOpenQRModal(false)} className="modal">
          <Box>
            <div className="modal-description">
              Display QR code
              <Button onClick={handleQRFinishButtonClick}>Finish</Button>
              <Button onClick={() => setOpenChild(true)}>Cancel</Button>
            </div>
          </Box>
        </Modal>

        <Modal open={openFinishModal} onClose={() => setOpenFinishModal(false)} className="modal">
          <Box>
            <div className="modal-description">
              Display finish confirmation
              <Button onClick={handleFinishConfirmation}>Continue</Button>
              <Button onClick={() => setOpenQRModal(true)}>Cancel</Button>
            </div>
          </Box>
        </Modal>

      </div>
      <img src={downimg} alt="downImg" style={downImg} />
      <img src={rightimg} alt="rightImg" style={rightImg} />
    </div>
  )
}

export default NewEvent
