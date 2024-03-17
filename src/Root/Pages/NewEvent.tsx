import TextField from "@mui/material/TextField"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Autocomplete from "@mui/material/Autocomplete";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { useState } from "react";
import Button from '@mui/material/Button';
import leftimg from '../../assets/Images/LeftImage.png'
import rightimg from '../../assets/Images/RightImage.png'
import downimg from '../../assets/Images/DownImage.png'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";


const NewEvent = () => {

  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    venue: null,
    eventDate: null,
    startTime: dayjs('2022-04-17T15:30'),
    endTime: dayjs(),
  });

  const handleEventDateChange = (date: any) => {
    setEventDetails({ ...eventDetails, eventDate: date });
  };

  const handleStartTimeChange = (time: any) => {
    setEventDetails({ ...eventDetails, startTime: time });
  };

  const handleEndTimeChange = (time: any) => {
    setEventDetails({ ...eventDetails, endTime: time });
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const [openParent, setOpenParent] = useState(false);
  const [openChild, setOpenChild] = useState(false);

  const handleOpenParent = () => {
    setOpenParent(true);
  };

  const handleCloseParent = () => {
    setOpenParent(false);
  };

  const handleOpenChild = () => {
    setOpenChild(true);
  };

  const handleCloseChild = () => {
    setOpenChild(false);
  };

  const handleEdit = () => {
    setOpenParent(false);
  };

  const handleProceed = () => {
    setOpenParent(false);
    setOpenChild(true);
  };


  const leftimgStyle = {
    width: '178.83px',
    height: '453.89px',
    marginTop: '100px',
  };
  const rightimgStyle = {
    width: '151.9px',
    height: '440px',
    marginTop: '100px',
    marginLeft: '-100px',
  };
  const downimgStyle = {
    width: '80.26px',
    height: '306.6px',
    marginTop: '200px',
    marginRight: '20px',
  };

  const venue = [{ label: 'U.R Rao Seminar hall' }, { label: 'A.P.J Abdul Kalam Seminar Hall' }, { label: 'Sir M. Visveswaraya Auditorium' }, { label: 'Other' }]
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

  return (

    <>
      <div className="newEventWrapper">
        <div className="newEventImg">
          <img src={leftimg} alt="leftimg" style={leftimgStyle} />
        </div>
        <div className="form-content">
          <h3 className="card-txt">Tell us about the event</h3>
          <div className="form">
            <div className="inp-container">
              <h4 className="inp-txt">Share the name of the event</h4>
              <TextField fullWidth label="Event name" variant="outlined" color="success"
                value={eventDetails.eventName}
                onChange={(e) => setEventDetails({ ...eventDetails, eventName: e.target.value })} />
            </div>
            <div className="inp-container">
              <h4 className="inp-txt">Where did this happen ?</h4>
              <Autocomplete
                disablePortal
                options={venue}
                renderInput={(params) => <TextField {...params} label="Venue" color="success"
                  value={eventDetails.venue}
                  onChange={(e) => setEventDetails({ ...eventDetails, eventName: e.target.value })} />}
              />
            </div>
            <div className="inp-container">
              <h4 className="inp-txt">What date did your event conquer the calendar</h4>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
                  value={eventDetails.eventDate}
                  onChange={handleEventDateChange}
                  slotProps={{
                    textField: {
                      helperText: 'MM/DD/YYYY',
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="inp-container">
              <h4 className="inp-txt">Tell us the event's start and end times.</h4>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['TimePicker', 'TimePicker']} >
                  <label className="inp-txt">From</label>
                  <TimePicker
                    value={eventDetails.startTime}
                    onChange={handleStartTimeChange}
                    defaultValue={dayjs('2022-04-17T15:30')}
                  />
                  <label className="inp-txt">To</label>
                  <TimePicker
                    value={eventDetails.endTime}
                    onChange={handleEndTimeChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              id="btn-start"
              onClick={handleOpenParent}
            >
              Start
            </Button>
            <Modal
              open={openParent}
              onClose={handleCloseParent}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                {/* Display entered details in the parent modal */}
                <h2 id="parent-modal-title">Event Details</h2>
                <div id="parent-modal-description">
                  Event Name: {eventDetails.eventName}
                  Venue: {eventDetails.venue}
                  Date: {eventDetails.eventDate}
                  <>
                    From: {eventDetails.startTime.format('HH:mm')}
                    To: {eventDetails.endTime.format('HH:mm')}
                  </>
                </div>
                <Button onClick={handleEdit}>Edit</Button>
                <Button onClick={handleProceed}>Proceed</Button>
              </Box>
            </Modal>
            {/* Add a separate modal for the child */}
            <Modal
              open={openChild}
              onClose={() => setOpenChild(false)}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box sx={{ ...style, width: 200 }}>
                <h2 id="child-modal-title">Child Modal Content</h2>
                <p id="child-modal-description">
                  {/* Add content for the child modal */}
                </p>
                <Button onClick={() => setOpenChild(false)}>Close Child Modal</Button>
              </Box>
            </Modal>

          </div>
        </div >
        <div>
          <img src={downimg} alt="downimg" style={downimgStyle} />
          <img src={rightimg} alt="rightimg" style={rightimgStyle} />
        </div>
      </div >
    </>
  )
}

export default NewEvent
