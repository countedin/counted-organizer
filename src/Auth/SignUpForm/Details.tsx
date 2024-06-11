import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { apiGetUserbyAppIdDetails } from "../../services/BEApis/AuthAPIs";
import { useNavigate } from "react-router";
import { ArrowLeftIcon } from "@mui/x-date-pickers";

const Details = () => {
  const [name, setName] = useState();
  const [empID, setEmployeeId] = useState();
  const [department, setDepartment] = useState();
  const [Email, setEmail] = useState();
  const navigate = useNavigate();

  const localAppID = localStorage.getItem("appUserId");

  const fetchUserDetails = async () => {
    const response = await apiGetUserbyAppIdDetails(localAppID || "");
    setName(await response.data.data.keyUsername);
    setEmployeeId(await response.data.data.keyEmpId);
    setDepartment(await response.data.data.keyDepartment);
    setEmail(await response.data.data.keyEmail);
    console.log(response);
  };

  useEffect(() => {
    fetchUserDetails();
  });

  const proceedToPin = async () => {
    navigate("/pincode");
  };

  return (
    <div className="detail-container">
      <ArrowLeftIcon
        className="-ml-2 cursor-pointer mb-4"
        onClick={() => navigate(-1)}
        fontSize="large"
      />
      <h3 id="details-txt1">Check your details</h3>
      <h4 id="details-txt2">We know you</h4>

      <div className="flex flex-col gap-4 mt-2">
        <TextField
          disabled
          // label="Name"
          value={name}
          variant="outlined"
          // InputProps={{
          //   style: {
          //     backgroundColor: '#f5f5f5',
          //     borderBottom: '2px solid darkgrey',
          //   },
          //   disableUnderline: true,
          // }}
        />

        <TextField
          disabled
          // label="Employee ID"
          value={empID}
          variant="outlined"
          // InputProps={{
          //   style: {
          //     backgroundColor: '#f5f5f5',
          //     borderBottom: '2px solid darkgrey',
          //   },
          //   disableUnderline: true,
          // }}
          // style={styles.textField}
        />

        <TextField
          disabled
          // label="Department"
          value={department}
          variant="outlined"
          // InputProps={{
          //   style: {
          //     backgroundColor: '#f5f5f5',
          //     borderBottom: '2px solid darkgrey',
          //   },
          //   disableUnderline: true,
          // }}
        />

        <TextField
          disabled
          // label="Email"
          value={Email}
          variant="outlined"
          // InputProps={{
          //   style: {
          //     backgroundColor: '#f5f5f5',
          //     borderBottom: '2px solid darkgrey',
          //   },
          //   disableUnderline: true,
          // }}
        />

        <Button
          fullWidth
          variant="contained"
          id="btn"
          onClick={proceedToPin}
          style={{
            textTransform: "none",
            fontWeight: "600",
            fontSize: "15px",
            fontFamily: "Poppins",
          }}
          className=" text-transform-none font-weight-600"
        >
          Proceed
        </Button>
      </div>

      <h5 className="txt-3">
        *Details in this page are not editable. Please write us to{" "}
        <a href="mailto:countedin.app@gmail.com" id="link">
          countedin.app@gmail.com
        </a>{" "}
        if incorrect details are displayed.
      </h5>
    </div>
  );
};

export default Details;
