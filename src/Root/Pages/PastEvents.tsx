import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { apiGetAllEventsForAUser } from "../../services/BEApis/EventAPIs";
import { useEffect } from "react";

const PastEvents = () => {
  const navigate = useNavigate();
  const localAppUserID = localStorage.getItem("appUserId");
  const fnFetchEvents = async () => {
    const apiRes = await apiGetAllEventsForAUser(localAppUserID as string);
    console.log(apiRes);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchText = event.target.value.toLowerCase();
    const rows: HTMLDivElement[] = Array.from(
      document.getElementsByClassName("row")
    ) as HTMLDivElement[];

    for (let i = 0; i < rows.length; i++) {
      const eventName = rows[i].getElementsByClassName(
        "eventName"
      )[0] as HTMLElement;
      if (eventName.innerText.toLowerCase().includes(searchText)) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  };

  const handleSort = () => {
    const tableWrapper = document.querySelector(".tableWrapper");
    const rows = tableWrapper
      ? Array.from(tableWrapper.querySelectorAll(".row"))
      : [];

    rows.sort((row1, row2) => {
      const eventName1 =
        row1.querySelector(".eventName")?.textContent?.toLowerCase() || "";
      const eventName2 =
        row2.querySelector(".eventName")?.textContent?.toLowerCase() || "";
      return eventName1.localeCompare(eventName2);
    });

    if (tableWrapper) {
      tableWrapper.innerHTML = "";
      // Append sorted rows
      rows.forEach((row) => {
        if (tableWrapper) {
          tableWrapper.appendChild(row);
        }
      });
    }
  };

  const handleButtonClick = () => {
    navigate("/exportpage");
  };

  useEffect(() => {
    fnFetchEvents();
  });
  return (
    <>
      <div className="filterWrapper">
        <div className="search">
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search event"
            inputProps={{ "aria-label": "eventname" }}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="filter">
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSort}
          >
            <SortIcon />
          </IconButton>
          Sort
        </div>
      </div>
      <div className="tableWrapper">
        <div className="row">
          <div className="contentWrapper">
            <div className="eventName">
              Innovation in Semiconductor Chip Design, Fabrication, Assembly,
              Packaging and Testing
            </div>
            <div className="listItemWrapper">
              <ul className="listItems">
                <li id="listIcons">
                  <CalendarMonthOutlinedIcon />
                  Mon, 12 Jan 2024
                </li>
                <li id="listIcons">
                  <LocationOnOutlinedIcon />
                  Dr. A.P.J Abdul Kalam Seminar Hall
                </li>
                <li id="listIcons">
                  <AccessTimeOutlinedIcon />
                  10:00am - 12:30pm
                </li>
              </ul>
            </div>
          </div>
          <div className="buttonWrapper">
            <Button
              variant="contained"
              id="attendanceButton"
              onClick={handleButtonClick}
              style={{
                textTransform: "none",
                fontWeight: "600",
                fontSize: "15px",
                fontFamily: "Poppins",
              }}
            >
              View Atendences
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastEvents;
