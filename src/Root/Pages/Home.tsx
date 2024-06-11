import { Outlet } from "react-router";
import HomeTab from "./HomeTab";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <>
      <div>
        <TopBar />

        <div className="m-2"></div>
        <HomeTab />

        <Outlet />
      </div>
    </>
  );
};

export default Home;
