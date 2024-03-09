import { Routes, Route } from "react-router-dom";
import SignUpLayout from "./Auth/SignUpLayout";
import SignUp from "./Auth/OldForm/SignUp";
import AuthLayout from "./Auth/AuthLayout";
import SignIn from "./Auth/NewForm/SignIn";
import Verification from "./Auth/NewForm/Verification";
import Details from "./Auth/NewForm/Details";
import Pincode from "./Auth/NewForm/Pincode";
import Home from "./Root/Pages/Home";
import AboutUs from "./Root/Pages/AboutUs";
import NewEvent from "./Root/Pages/NewEvent";
import PastEvents from "./Root/Pages/PastEvents";
import ExportPage from "./Root/Pages/ExportPage";

function App() {
  return (
    <>
      {/* <main className="main-screen"> */}
      <Routes>
        <Route element={<SignUpLayout />}>
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/**Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/details" element={<Details />} />
          <Route path="/pincode" element={<Pincode />} />
        </Route>

        {/**Private Routes */}
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/newevent" element={<NewEvent />} />
        <Route path="/pastevents" element={<PastEvents />} />
        <Route path="/exportPage" element={<ExportPage />} />
      </Routes>

      {/* </main> */}
    </>
  );
}

export default App;
