import { Routes, Route } from "react-router-dom";
import SignInLayout from "./Auth/SignInLayout";
import SignIn from "./Auth/SignInForm/SignIn";
import SignUpLayout from "./Auth/SignUpLayout";
import SignUp from "./Auth/SignUpForm/SignUp";
import Verification from "./Auth/SignUpForm/Verification";
import Details from "./Auth/SignUpForm/Details";
import Pincode from "./Auth/SignUpForm/Pincode";
import Home from "./Root/Pages/Home";
import AboutUs from "./Root/Pages/AboutUs";
import NewEvent from "./Root/Pages/NewEvent";
import PastEvents from "./Root/Pages/PastEvents";
import ExportPage from "./Root/Pages/ExportPage";


function App() {
  return (
    <>
      <Routes>
        <Route element={<SignInLayout />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>

        {/**Public Routes */}
        <Route element={<SignUpLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/details" element={<Details />} />
          <Route path="/pincode" element={<Pincode />} />
        </Route>

        {/**Private Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/newevent" element={<NewEvent />} />
        <Route path="/pastevents" element={<PastEvents />} />
        <Route path="/exportPage" element={<ExportPage />} />
      </Routes>
    </>
  );
}

export default App;
