import TextField from "@mui/material/TextField"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Autocomplete from "@mui/material/Autocomplete";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import Button from '@mui/material/Button';
import leftimg from '../../assets/Images/LeftImage.png'
import rightimg from '../../assets/Images/RightImage.png'
import downimg from '../../assets/Images/DownImage.png'


const NewEvent = () => {

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
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

  return (

    <>
      <div className="newEventWrapper">
        <div className="newEventImg">
          <img src={leftimg} alt="leftimg" style={leftimgStyle} />
        </div>
        <form className="form-content">
          <h3 className="card-txt">Tell us about the event</h3>
          <div className="form">
            <div className="inp-container">
              <h4 className="inp-txt">Share the name of the event</h4>
              <TextField fullWidth label="Event name" variant="outlined" color="success" />
            </div>
            <div className="inp-container">
              <h4 className="inp-txt">Where did this happen ?</h4>
              <Autocomplete
                disablePortal
                options={venue}
                renderInput={(params) => <TextField {...params} label="Venue" color="success" />}
              />
            </div>
            <div className="inp-container">
              <h4 className="inp-txt">What date did your event conquer the calendar</h4>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
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
                  <label htmlFor="From" className="inp-txt">From</label>
                  <TimePicker
                    defaultValue={dayjs('2022-04-17T15:30')}
                  />
                  <label htmlFor="To" className="inp-txt">To</label>
                  <TimePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              id="btn-start"
            >
              Start
            </Button>
          </div>
        </form>
        <div>
          <img src={downimg} alt="downimg" style={downimgStyle} />
          <img src={rightimg} alt="rightimg" style={rightimgStyle} />
        </div>
      </div>
    </>
  )
}

export default NewEvent
