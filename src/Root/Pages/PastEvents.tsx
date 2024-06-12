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

  const renderRow = () => (
    <div className="w-[440px] border border-gray-300 p-4 rounded-md hover:border-[#00c8a6]">
      <div className="flex flex-col gap-8 w-[100%]">
        <div className="text-[#333366] font-semibold text-xl">
          Innovation in Semiconductor Chip Design, Fabrication, Assembly,
          Packaging and Testing
        </div>
        <div className="">
          <ul className="flex gap-4">
            <li className="flex gap-2">
              <CalendarMonthOutlinedIcon />
              <div className="text-xs font-semibold">Mon, 12 Jan 2024</div>
            </li>
            <li className="flex gap-2">
              <LocationOnOutlinedIcon />
              <div className="text-xs font-semibold">
                Dr. A.P.J Abdul Kalam Seminar Hall
              </div>
            </li>
            <li className="flex gap-2">
              <AccessTimeOutlinedIcon />
              <div className="text-xs font-semibold">10:00am - 12:30pm</div>
            </li>
          </ul>
        </div>

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
  );

  useEffect(() => {
    fnFetchEvents();
  });
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className=" font-semibold text-xl">My Past Events</div>
          <div className="flex">
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
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {renderRow()}
          {renderRow()}
          {renderRow()}
          {renderRow()}
        </div>
      </div>
    </>
  );
};

export default PastEvents;
