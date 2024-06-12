import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import leftimg from "../../assets/Images/LeftImage.png";
import downimg from "../../assets/Images/DownImage.png";
import rightimg from "../../assets/Images/RightImage.png";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { SetStateAction, useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { apiCreateNewEvent } from "../../services/BEApis/EventAPIs";
import Modal1 from "./Modal1";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgba(0, 200, 166, 1)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(0, 200, 166, 1)",
    },
  },
});

const NewEvent = () => {
  const leftImg = {
    maxWidth: "178.83px",
    maxHeight: "453.89px",
  };
  const downImg = {
    maxWidth: "80.26px",
    maxHeight: "306.63px",
  };
  const rightImg = {
    maxWidth: "151.9px",
    maxHeight: "440px",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgba(0, 128, 128, 0.7)",
      },
    },
  });

  const [Name, setEventName] = useState("");
  const [venue, setVenue] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const localAppID = localStorage.getItem("appUserId");

  const handleEventDateChange = (date: SetStateAction<null>) => {
    setEventDate(date);
  };

  const handleStartTimeChange = (time: SetStateAction<null>) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time: SetStateAction<null>) => {
    setEndTime(time);
  };

  const [modal1, setModal1] = useState(false);

  const handleStartButtonClick = async () => {
    const apiRes = await apiCreateNewEvent(localAppID?.toString() || "", {
      keyEventName: Name,
      keyVenue: venue,
      keyStartTime: startTime,
      keyEndTime: endTime,
      keyCreatedBy: localAppID,
      keyTags: [],
      keyAttended: false,
    });

    console.log(apiRes);
    if (apiRes.status > 200) {
      setModal1(true);
    }
  };

  return (
    <div className="flex justify-center items-center align-middle">
      <img src={leftimg} alt="leftImage" style={leftImg} />
      <div className="bg-[#fefefe] p-16  flex flex-col gap-4">
        <h3 className="font-bold mb-2 text-xl text-[#333366]">
          Tell us about the event
        </h3>
        <div className="w-100">
          {/* <h4 className="inp-txt mb-2">Share the name of the event</h4> */}
          <CssTextField
            fullWidth
            label="Event name"
            variant="outlined"
            color="success"
            value={Name}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="w-100">
          {/* <h4 className="inp-txt mb-2">Where did this happen ?</h4> */}
          <ThemeProvider theme={theme}>
            <FormControl
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "rgba(51, 51, 102, 1)",
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(0, 200, 166, 1)",
                  },
                },
                "& .MuiSelect-icon": {
                  color: "rgba(0, 200, 166, 1)",
                },
              }}
            >
              <InputLabel>Venue</InputLabel>
              <Select
                label="Venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              >
                <MenuItem value={"U.R Rao Seminar hall"}>
                  U.R Rao Seminar hall
                </MenuItem>
                <MenuItem value={"A.P.J Abdul Kalam Seminar Hall"}>
                  A.P.J Abdul Kalam Seminar Hall
                </MenuItem>
                <MenuItem value={"Sir M. Visveswaraya Auditorium"}>
                  Sir M. Visveswaraya Auditorium
                </MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </ThemeProvider>
        </div>
        <div className="w-100">
          {/* <h4 className="inp-txt mb-2">
            What date did your event conquer the calendar
          </h4> */}
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={<Typography>Date</Typography>}
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
        <div className="w-100">
          {/* <h4 className="inp-txt mb-2">
            Tell us the event's start and end times.
          </h4> */}
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DemoContainer components={["TimePicker", "TimePicker"]}> */}
              <div className="flex justify-between items-center gap-2">
                <div className="">
                  {/* <h4 className="inp-txt mb-2">Starts at</h4> */}
                  <TimePicker
                    label={"Starts at"}
                    slotProps={{
                      textField: {
                        helperText: "HH:MM",
                      },
                    }}
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
                    value={startTime}
                    onChange={handleStartTimeChange}
                  />
                </div>

                <div className="">
                  {/* <h4 className="inp-txt mb-2">Ends at</h4> */}
                  <TimePicker
                    label={"Ends at"}
                    slotProps={{
                      textField: {
                        helperText: "HH:MM",
                      },
                    }}
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
                    value={endTime}
                    onChange={handleEndTimeChange}
                  />
                </div>
                {/* </DemoContainer> */}
              </div>
            </LocalizationProvider>
          </ThemeProvider>
        </div>
        <Button
          fullWidth
          variant="contained"
          id="btn-start"
          onClick={handleStartButtonClick}
          style={{
            textTransform: "none",
            fontWeight: "600",
            fontSize: "15px",
            fontFamily: "Poppins",
          }}
        >
          Start
        </Button>

        {modal1 && <Modal1 open={modal1} onClose={() => setModal1(false)} />}
      </div>
      <img src={downimg} alt="downImg" style={downImg} />
      <img src={rightimg} alt="rightImg" style={rightImg} />
    </div>
  );
};

export default NewEvent;
