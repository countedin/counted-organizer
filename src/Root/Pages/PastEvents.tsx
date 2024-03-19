import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const PastEvents = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/exportpage');
  };


  return (
    <>
      <div className="filterWrapper">
        <div className="search">
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            // sx={{ ml: 1, flex: 1 }}
            placeholder="Search event"
            inputProps={{ 'aria-label': 'eventname' }}
          />
        </div>
        <div className="filter">
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SortIcon />
          </IconButton>
          Sort
        </div>
      </div>
      <div className="tableWrapper">
      <div className="row">
          <div className="contentWrapper">
            <div className="eventName">Innovation in Semiconductor Chip Design, Fabrication, Assembly, Packaging and Testing</div>
            <div className="listItemWrapper">
              <ul className='listItems'>
                <li className="calendar">
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <CalendarMonthIcon />
                  </IconButton>
                  Mon, 12 Jan 2024
                </li>
                <li className="location">
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <LocationOnOutlinedIcon />
                  </IconButton>
                  Dr. A.P.J Abdul Kalam Seminar Hall
                </li>
                <li className="time">
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <AccessTimeOutlinedIcon />
                  </IconButton>
                  10:00am - 12:30pm
                </li>
              </ul>
            </div>
          </div>
          <div className="buttonWrapper">
            <Button
              // type="submit"
              variant="contained"
              id="attendanceButton"
              onClick={handleButtonClick}
            >
              View Atendences
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="contentWrapper">
            <div className="eventName">Innovation in Semiconductor Chip Design, Fabrication, Assembly, Packaging and Testing</div>
            <div className="listItemWrapper">
              <ul className='listItems'>
                <li className="calendar">
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <CalendarMonthIcon />
                  </IconButton>
                  Mon, 12 Jan 2024
                </li>
                <li className="location">
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <LocationOnOutlinedIcon />
                  </IconButton>
                  Dr. A.P.J Abdul Kalam Seminar Hall
                </li>
                <li className="time">
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <AccessTimeOutlinedIcon />
                  </IconButton>
                  10:00am - 12:30pm
                </li>
              </ul>
            </div>
          </div>
          <div className="buttonWrapper">
            <Button
              type="submit"
              variant="contained"
              id="attendanceButton"
              onClick={handleButtonClick}
            >
              View Atendences
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="contentWrapper">
            <div className="eventName">Innovation in Semiconductor Chip Design, Fabrication, Assembly, Packaging and Testing</div>
            <div className="listItemWrapper">
              <ul className='listItems'>
                <li className="calendar">
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <CalendarMonthIcon />
                  </IconButton>
                  Mon, 12 Jan 2024
                </li>
                <li className="location">
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <LocationOnOutlinedIcon />
                  </IconButton>
                  Dr. A.P.J Abdul Kalam Seminar Hall
                </li>
                <li className="time">
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <AccessTimeOutlinedIcon />
                  </IconButton>
                  10:00am - 12:30pm
                </li>
              </ul>
            </div>
          </div>
          <div className="buttonWrapper">
            <Button
              type="submit"
              variant="contained"
              id="attendanceButton"
              onClick={handleButtonClick}
            >
              View Atendences
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PastEvents