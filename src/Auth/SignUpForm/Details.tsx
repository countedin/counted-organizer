import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useEffect, useState } from "react"
import { apiGetUserDetails } from "../../services/BEApis/AuthAPIs";
import { useNavigate } from "react-router";

const Details = () => {

  const [ name , setName ] = useState();
  const [ empID , setEmployeeId ] = useState();
  const [ department , setDepartment ] = useState();
  const [ Email , setEmail ] = useState();
  const navigate = useNavigate();
  
  const localAppID = localStorage.getItem('appUserId') 

  const fetchUserDetails = async () => {
    const response = await apiGetUserDetails(localAppID?.toString() || "")
    setName(await response.data.data.keyUsername)
    setEmployeeId(await response.data.data.keyEmpId)
    setDepartment(await response.data.data.keyDepartment)
    setEmail(await response.data.data.keyEmail)
    console.log(response)
  }

  useEffect(() => {
    fetchUserDetails();
  });

  const proceedToPin = async () => {
    navigate('/pincode');
  }


  return (
    
    <div className="detail-container">
      <h3 id="details-txt1">Check your details</h3>
      <h4 id="details-txt2">We know you</h4>
  
      <div className="flex flex-col gap-6 detail-card">
        <TextField
          disabled
          label={name}
          variant="filled"
        />

        <TextField
          disabled
          label={empID}
          variant="filled"
        />

        <TextField
          disabled
          label={department}
          variant="filled"
        />

        <TextField
          disabled
          label={Email}
          variant="filled"
        />

        <Button
          fullWidth
          variant="contained"
          id="btn"
          onClick={proceedToPin}
        >
          Proceed
        </Button>
        
      </div>
      
      <h5 className="txt-3">*Details in this page are not editable. Please write us to <a href="mailto:countedin.app@gmail.com" id="link">countedin.app@gmail.com</a>  if incorrect details are displayed.</h5>
    </div>
    

  )
}

export default Details