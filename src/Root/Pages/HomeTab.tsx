// import Tabs from "@mui/material/Tabs";
// import NewEvent from "./NewEvent"
// import PastEvents from "./PastEvents"
// import { useState } from "react"
// import Tab from "@mui/material/Tab";

import { Tab } from "@mui/base/Tab"
import { TabPanel } from "@mui/base/TabPanel"
import { Tabs } from "@mui/base/Tabs"
import { TabsList } from "@mui/base/TabsList"
import PastEvents from "./PastEvents"
import NewEvent from "./NewEvent"


const HomeTab = () => {

  // const [currentTab, setCurrentTab] = useState(0);

  // const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setCurrentTab(newValue);
  // };

  return (

    // <>
    //   {/* <div className="tab">
    //     <Tabs value={currentTab} onChange={handleTabChange} className="tab-list">
    //       <Tab label="New Event" id="tab-event"/>
    //       <Tab label="Past Events" id="tab-event"/>
    //     </Tabs>
    //   </div>
    //   <div className="tab-contents">
    //     <div className="tab-content" style={{ display: currentTab === 0 ? 'block' : 'none' }}>
    //       <NewEvent/>
    //     </div>
    //     <div className="tab-content" style={{ display: currentTab === 1 ? 'block' : 'none' }}>
    //       <PastEvents/>
    //     </div>

    //   </div> */}


    // </>

    <>
     <Tabs defaultValue={'newevent'} className="home-tab">
       <TabsList className="tab-list">
         <Tab id="tab-event" value={'newevent'}>
           New Event
         </Tab>
         <Tab id="tab-event" value={'pastevents'}>
           Past Events
         </Tab>
       </TabsList>
       <TabPanel  value={'newevent'}>
         <NewEvent/>
       </TabPanel>
       <TabPanel  value={'pastevents'}>
         <PastEvents/>
       </TabPanel>
     </Tabs>
    </>
  )  
}

export default HomeTab


