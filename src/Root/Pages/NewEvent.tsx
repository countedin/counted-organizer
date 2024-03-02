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

const NewEvent = () => {

  const venue = [{ label: 'U.R Rao Seminar hall' }, { label: 'A.P.J Abdul Kalam Seminar Hall' }, { label: 'Sir M. Visveswaraya Auditorium' }, { label: 'Other' }]
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

  return (
    <div className="tab-content">
      <div className="left-img">
        <img src="public/assets/Images/LeftImage.png" alt="leftimg" width="168.83px" height="443.89px" />
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
      <div className="right-img">
        <img src="public/assets/Images/RightImage.png" alt="rightimg" width="151.9px" height="440px" />
      </div>
      <div className="down-img">
        <img src="/public/assets/Images/DownImage.png" alt="douwnimg" width="60.26" height="286.63" />
      </div>
    </div>
  )
}

export default NewEvent
