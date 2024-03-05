import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

const Details = () => {
  return (
    <div className="detail-container">
      <h3 id="details-txt1">Check your details</h3>
      <h4 id="details-txt2">We know you</h4>
      <form noValidate>
        <div className="flex flex-col gap-6 detail-card">
          <TextField
            disabled
            id="filled-disabled"
            label="Name"
            defaultValue="Lecturer Name"
            variant="filled"
          />
          <TextField
            disabled
            id="filled-disabled"
            label="Employee ID"
            defaultValue="SS0785"
            variant="filled"
          />
          <TextField
            disabled
            id="filled-disabled"
            label="Department"
            defaultValue="Computer Science and Engineering"
            variant="filled"
          />
          <TextField
            disabled
            id="filled-disabled"
            label="Email"
            defaultValue="lecturername@gmail.com"
            variant="filled"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            id="btn"
          >
            Proceed
          </Button>
        </div>
      </form>
      <h5 className="txt-3">*Details in this page are not editable. Please write us to <a href="mailto:countedin.app@gmail.com" className="link">countedin.app@gmail.com</a>  if incorrect details are displayed.</h5>
    </div>
  )
}

export default Details