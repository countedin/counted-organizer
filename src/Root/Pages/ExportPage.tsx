import IconButton from "@mui/material/IconButton";
import TopBar from "./TopBar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from "@mui/material/InputBase";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { useNavigate } from 'react-router-dom';

const ExportPage = () => {

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1); 
  };


  function createData(slno: number, name: string, usn: string, deapartment: string, year: number, email: string) {
    return { slno, name, usn, deapartment, year, email };
  }
  
  const rows = [
    createData(1, 'Rohan Kannadiga','1NT20CS146','CSE',4,'1nt20cs146.rohan@nmit.ac.in'),
    createData(2, 'Srinivisa Rao M R','1NT20CS167','CSE',4,'1nt20cs147.srinivasarao@nmit.ac.in'),
    createData(4, 'Vishak Rao','1NT20CS148','CSE',4,'1nt20cs148.vishakrao@nmit.ac.in'),
    createData(5, 'Teja Kumar','1NT20CS149','CSE',4,'1nt20cs149.tejukumar@nmit.ac.in'),
  ];
  



  return (
    <>
      <TopBar />
      <div className="exportWrapper">
        <div className="backArrow">
          <IconButton type="button" sx={{ p: '10px' }} aria-label="ArrowBack" onClick={handleBackButtonClick}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="exportHeader">
          <div className="contentWrapper">
            <div id="eventName">Innovation in Semiconductor Chip Design, Fabrication, Assembly, Packaging and Testing</div>
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
                <li className="people">
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <PeopleOutlineIcon />
                  </IconButton>
                  52 attendees
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="downloadButton">
          <div className="download">
            <h3 className="download">Download as: </h3>
            <Button
              type="submit"
              variant="contained"
              id="downloadButton"
            >
              Pdf
            </Button>
            <Button
              type="submit"
              variant="contained"
              id="downloadButton"
            >
              Excel
            </Button>
            <Button
              type="submit"
              variant="contained"
              id="downloadButton"
            >
              Csv
            </Button>
            <h3 className="download">or</h3>
            <Button
              type="submit"
              variant="contained"
              id="downloadButton"
            >
              continue with gmail
            </Button>
          </div>
          <div className="search">
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search name or usn"
              inputProps={{ 'aria-label': 'name || usn' }}
            />
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="search">
            <TableHead>
              <TableRow>
                <TableCell>Sl. No.</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">USN</TableCell>
                <TableCell align="right">Department</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.slno}>
                  <TableCell component="th" scope="row">
                    {row.slno}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.usn}</TableCell>
                  <TableCell align="right">{row.deapartment}</TableCell>
                  <TableCell align="right">{row.year}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default ExportPage