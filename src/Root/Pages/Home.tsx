import { Outlet } from "react-router"
import HomeTab from "./HomeTab"
import TopBar from "./TopBar"

const Home = () => {

  return (
    <>
      
      <div>
        <TopBar/>
        
        <HomeTab/>
        
        <section>
          <Outlet/>
        </section>
      </div>
    </>
  )
}

export default Home