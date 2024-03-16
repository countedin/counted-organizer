
import Button from '@mui/material/Button';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import React from 'react';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'enter mail ID provided by the college';
    }

    return 'Enter mail ID provided by the college';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}



const SignIn = () => {
  return (
    <div className="row2">
      <div className="signin-form">
        <h3 id="signin-txt1">Let's create your account</h3>
        <h4 id="signin-txt2">Enter the details as per the records</h4>
        <div>
          <TextField
            variant="outlined"
            color="success"
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <FormControl sx={{ width: 'auto', marginTop: '-5px', fontWeight: '300' }}>
            <MyFormHelperText />
          </FormControl>
          <TextField
            variant="outlined"
            color="success"
            margin="normal"
            fullWidth
            name="employeeID"
            label="Employee ID"
            type="text"
            id="employeeID"
            autoComplete="current-employeeID"
          />
          <Button
            variant="contained"
            id="btn"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  )

}
export default SignIn

